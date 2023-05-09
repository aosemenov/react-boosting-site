<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'email' => 'nullable|email:rfc,dns|unique:users,email',
            'nickname' => 'nullable|unique:users,nickname',
            'password' => 'nullable|string',
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
