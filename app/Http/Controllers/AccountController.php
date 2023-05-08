<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\AccountType;

class AccountController extends Controller
{
    private const SELECTED_FIELD = [
        'name',
        'description',
        'price',
        'type',
        'created_at',
        'updated_at',
        'images',
    ];

    public function getAccountsVr()
    {
        $accounts = Account::select(self::SELECTED_FIELD)
            ->where('type', AccountType::getVrType()->getId())
            ->where('active', true)
            ->get();

        if (count($accounts) > 0) {
            return $this->success($accounts->toArray());
        } else {
            return $this->error(404, "Аккаунтов на данный момент нет.");
        }
    }

    public function getAccountsCs()
    {
        $accounts = Account::select(self::SELECTED_FIELD)
            ->where('type', AccountType::getCsType()->getId())
            ->where('active', true)
            ->get();

        if (count($accounts) > 0) {
            return $this->success($accounts->toArray());
        } else {
            return $this->error(404, "Аккаунтов на данный момент нет.");
        }
    }

    public function getListAccounts()
    {
        $accounts = Account::select(self::SELECTED_FIELD)
            ->where('active', true)
            ->get();

        if (count($accounts) > 0) {
            return $this->success($accounts->toArray());
        } else {
            return $this->error(404, "Аккаунтов на данный момент нет.");
        }
    }

    public function getAccount(int $id)
    {
        $account = Account::select(self::SELECTED_FIELD)
            ->where('id', $id)
            ->where('active', true)
            ->first();

        if ($account) {
            return $this->success($account->toArray());
        } else {
            return $this->error(404, "Аккаунт не найден.");
        }
    }
}
