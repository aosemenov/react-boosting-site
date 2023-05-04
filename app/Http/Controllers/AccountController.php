<?php

namespace App\Http\Controllers;

use App\Models\Account;

class AccountController extends Controller
{

    protected const TYPE_CS = 1;
    protected const TYPE_VR = 2;

    public function getAccountsVr()
    {
        $accounts = Account::where('type', self::TYPE_VR)->where('active', true)->get();

        if ($accounts) {
            return $this->success($accounts->toArray());
        } else {
            return $this->error(404, "Аккаунтов на данный момент нет.");
        }
    }

    public function getAccountsCs()
    {
        $accounts = Account::where('type', self::TYPE_CS)->where('active', true)->get();

        if ($accounts) {
            return $this->success($accounts->toArray());
        } else {
            return $this->error(404, "Аккаунтов на данный момент нет.");
        }    }

    public function getListAccounts()
    {
        $accounts = Account::where('active', true)->get();

        if ($accounts) {
            return $this->success($accounts->toArray());
        } else {
            return $this->error(404, "Аккаунтов на данный момент нет.");
        }    }

    public function getAccount(int $id)
    {
        $account = Account::where('id', $id)->where('active', true)->first();

        if ($account) {
            return $this->success($account->toArray());
        } else {
            return $this->error(404, "Аккаунт не найден.");
        }    }
}
