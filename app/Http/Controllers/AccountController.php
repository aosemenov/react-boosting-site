<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\AccountImage;
use App\Models\AccountType;

class AccountController extends Controller
{

    public function getAccountsVr()
    {
        $accounts = Account::where('type', AccountType::getVrType()->getId())
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
        $accounts = Account::where('type', AccountType::getCsType()->getId())
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
        $accounts = Account::where('active', true)->get();

        if (count($accounts) > 0) {
            return $this->success($accounts->toArray());
        } else {
            return $this->error(404, "Аккаунтов на данный момент нет.");
        }
    }

    public function getAccount(int $id)
    {
        $account = Account::where('id', $id)
            ->where('active', true)
            ->first();

        if ($account) {
            return $this->success($account->toArray());
        } else {
            return $this->error(404, "Аккаунт не найден.");
        }
    }
}
