<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class CreateUserRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'email' => 'required|email:rfc,dns|unique:users,email',
            'nickname' => 'required|unique:users,nickname',
            'password' => 'required|string',
            'name' => 'nullable|string',
            'first_name' => 'nullable|string',
            'last_name' => 'nullable|string',
            'telegram_link' => 'nullable|string',
            'vk_link' => 'nullable|string',
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
