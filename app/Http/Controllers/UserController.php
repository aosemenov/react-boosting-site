<?php

namespace App\Http\Controllers;

use App\Models\User;

class UserController extends Controller
{
    public function createUser()
    {

    }

    public function updateUser(int $id)
    {

    }

    public function getUser(int $id)
    {
        $user = User::where('id', $id)
//            ->where('active', true)
//            ->select()
            ->first();

        if ($user) {
            return $this->success($user->toArray());
        } else {
            return $this->error(404, 'Пользователь не найден');
        }

    }

    public function getListUsers()
    {
//        $users = User::where('active', true)
//            ->select()
//            ->get();

        $users = User::all();

        if ($users) {
            return $this->success($users->toArray());
        } else {
            return $this->error(404, 'Нет пользователей.');
        }
    }
}
