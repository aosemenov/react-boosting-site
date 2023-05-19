<?php

namespace App\Http\Requests\Boosting;

use Illuminate\Foundation\Http\FormRequest;

class BoostingEloCsRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'elo_from' => 'required|numeric|min:0|max:5000',
            'elo_to' => 'required|numeric|min:1|max:5000',
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
