<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\CreateUserRequest;
use App\Http\Requests\User\LoginUserRequest;
use App\Models\User;
use Auth;
use Request;

class UserController extends Controller
{
    public function createUser(CreateUserRequest $request)
    {

    }

    public function updateUser(int $id)
    {

    }

    public function getUser(int $id)
    {
        $user = User::where('id', $id)
            ->where('active', true)
            ->select()
            ->first();

        if ($user) {
            return $this->success($user->toArray());
        } else {
            return $this->error(404, 'Пользователь не найден');
        }

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
            return $this->error(400, "Пользователь уже зарегистрирован");
        }
        $user = User::where('email', $data['email'])
            ->orWhere('nickname', $data['nickname'])
            ->first();

        if (!$user) {
            return $this->error(404, 'Пользователя не существует');
        }
        if (!\Hash::check($data['password'], $user->password)) {
            return $this->error(400, 'Неверный логин или пароль');
        }
        $token = $user->createToken('bigboost_user_auth')->plainTextToken;


        return $this->success([
            'token' => $token,
            'user' => $user,
        ]);
    }
}
