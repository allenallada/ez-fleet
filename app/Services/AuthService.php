<?php

namespace App\Services;

use App\Models\Account;
use Illuminate\Support\Facades\Hash;

class AuthService
{
    private $model;


    function __construct(Account $model)
    {
        $this->model = $model;
    }

    function register($par)
    {
        $acc = $this->model->where('user_name', $par['userName'])->get();
        if (count($acc) > 0) {
            return [
                'success' => false,
                'message' => 'Username is not available'
            ];
        }

        $data = [
            'user_name' => $par['userName'],
            'first_name' => $par['firstName'],
            'last_name' => $par['lastName'],
            'password' => Hash::make($par['password']),
            'is_verified' => true // default for initial dev
        ];

        $res = $this->model->create($data);

        return [
            'success' => true,
            'account' => [
                'user_name' => $res['user_name'],
                'first_name' => $res['first_name'],
                'last_name' => $res['last_name']
            ]
        ];
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
            return [
                'success' => true,
                'username' => $acc['user_name'],
            ];
        }
        return $error;
    }
}
