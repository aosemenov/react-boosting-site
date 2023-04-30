<?php

namespace App\Http\Requests\Boosting;

use Illuminate\Foundation\Http\FormRequest;

class BoostingRankCsRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'rank_from' => 'required|numeric|min:0|max:255',
            'rank_to' => 'required|numeric|min:1|max:255',
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
