<?php

namespace App\Http\Requests\Order;

use Illuminate\Foundation\Http\FormRequest;

class CreateOrderRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'comment' => 'string|nullable',
            'offer_id' => 'integer|nullable',
            'offer_type' => 'required|string',
            'from_rank' => 'integer|nullable',
            'to_rank' => 'integer|nullable',
            'from_elo' => 'integer|nullable',
            'to_elo' => 'integer|nullable',
            'discount' => 'string|nullable',
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
