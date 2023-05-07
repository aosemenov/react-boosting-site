<?php

namespace App\Http\Requests\Order;

use Illuminate\Foundation\Http\FormRequest;

class CreatePaymentRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'type' => 'required|string',
            'event' => 'required|string',
            'object' => 'required|array',
            'object.status' => 'required|string',
            'object.paid' => 'required|boolean',
            'object.captured_at' => 'required|string',
            'object.description' => 'required|string',
            'object.income_amount' => 'required|array',
            'object.income_amount.value' => 'required|numeric',
            'object.refunded_amount' => 'required|array',
            'object.refunded_amount.value' => 'required|numeric',
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
