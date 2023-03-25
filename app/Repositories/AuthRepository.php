<?php

namespace App\Repositories;

use App\Models\Account;
use Illuminate\Support\Facades\Hash;

class AuthRepository
{
    private $model;

    function __construct(Account $model)
    {
        $this->model = $model;
    }

    function login($par)
    {
        $error = [
            'success' => false,
            'message' => 'Pleace check your username and password'
        ];
        $res = $this->model->where('user_name', $par['username'])->get();
        if (count($res) < 1) {
            return $error;
        }
        $acc = $res[0];

        if (Hash::check($par['password'], $acc['password'])) {
            session()->put('user', $acc['user_name']);
            session()->put('account_no', $acc['account_no']);
            return [
                'success' => true,
                'username' => $acc['user_name'],
            ];
        }
        return $error;
    }

    function status()
    {
        $user = session()->get('user');

        return  [
            'auth' => !empty($user),
            'account_no' => session()->get('account_no'),
            'user_name' => $user
        ];
    }
}
