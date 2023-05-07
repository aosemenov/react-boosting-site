<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{

    protected const DEFAULT_TTL = 86400;
    protected const DEFAULT_ERROR_CODE = 500;
    protected const DEFAULT_ERROR_MESSAGE = "Ошибка в работе сервиса. Повторите попытку позже.";

    protected const ERRORS = [
        400 => "Bad Request",
        404 => "Not found",
        500 => "Internal Server Error",
    ];

    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function success(array $data)
    {
        return response($data, 200);
    }

    protected function error(int $code = self::DEFAULT_ERROR_CODE, string $message = self::DEFAULT_ERROR_MESSAGE)
    {
        return response([
            'code' => self::ERRORS[$code] ?? self::ERRORS[self::DEFAULT_ERROR_CODE],
            'message' => $message], $code);
    }
}
