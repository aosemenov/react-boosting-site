<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class LoginUserRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'email' => 'nullable|email:rfc,dns',
            'nickname' => 'nullable|string',
            'password' => 'required|string',
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
