<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\CreateUserRequest;
use App\Http\Requests\User\LoginUserRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Models\User;
use Auth;
use Hash;
use Request;

class UserController extends Controller
{
    private const DEFAULT_SELECT = [
        'id',
        'email',
        'nickname',
        'name',
        'first_name',
        'last_name',
    ];

    public function createUser(CreateUserRequest $request)
    {
        $data = $request->validated();

        $name = $data['name'] ?? "";
        $first_name = $data['first_name'] ?? "";
        $last_name = $data['last_name'] ?? "";
        $telegram_link = $data['telegram_link'] ?? "";
        $vk_link = $data['vk_link'] ?? "";

        $user = new User();
        $user->email = strtolower(trim($data['email']));
        $user->name = ucfirst(strtolower(trim($name)));
        $user->first_name = ucfirst(strtolower($first_name));
        $user->last_name = ucfirst(strtolower(trim($last_name)));
        $user->active = true;
        $user->nickname = ucfirst(strtolower(trim($data['nickname'])));
        $user->telegram_link = trim($telegram_link);
        $user->vk_link = trim($vk_link);
        $user->password = $data['password'];

        $user->save();
        $token = $user->createToken('bigboost_user_auth')->plainTextToken;

        return $this->success([
            'token' => $token,
            'user' => $user,
        ]);
    }

    public function updateUser(UpdateUserRequest $request)
    {
        $data = $request->validated();
        $user = Auth::user();
        foreach ($data as $key => $field) {
            if (!empty($field)) {
                $user->{$key} = $field;
            }
        }
        $user->save();

        return $this->success([
            'message' => 'Данные успешно обновлены.',
            'user' => $user,
        ]);
    }

    public function getUser(Request $request)
    {
        return $this->success(Auth::user()->toArray());
    }

    public function getListUsers()
    {
        $users = User::where('active', true)
            ->select()
            ->get();

        $users = User::all();

        if ($users) {
            return $this->success($users->toArray());
        } else {
            return $this->error(404, 'Нет пользователей.');
        }
    }

    public function login(LoginUserRequest $request)
    {
        $data = $request->validated();
        if (Auth::check()) {
            return $this->error(401, "Пользователь уже зарегистрирован");
        }

        $user = User::select(array_merge(self::DEFAULT_SELECT, ['password']));
        if (!empty($data['email'])) {
            $user = $user->where('email', $data['email'])->first();
        } elseif (!empty($data['nickname'])) {
            $user = $user->where('nickname', $data['nickname'])->first();
        } else {
            return $this->error(401, 'Не указан email или nickname');
        }

        if (!$user) {
            return $this->error(404, 'Пользователя не существует');
        }
        if (!Hash::check($data['password'], $user->password)) {
            return $this->error(401, 'Неверный логин или пароль');
        }
        $token = $user->createToken('bigboost_user_auth')->plainTextToken;


        return $this->success([
            'token' => $token,
            'user' => $user,
        ]);
    }
}
