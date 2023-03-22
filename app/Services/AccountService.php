<?php

namespace App\Services;

use App\Models\Account;
use Illuminate\Support\Facades\Hash;

class AccountService
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
            'is_verified' => false // default for initial dev
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
            session()->put('user', $acc['user_name']);
            return [
                'success' => true,
                'username' => $acc['user_name'],
            ];
        }
        return $error;
    }

    function status()
    {
        return  [
            'auth' => !empty(session()->get('user'))
        ];
    }

    function details()
    {
        $username = session()->get('user');
        $acc = $this->model->where('user_name', $username)->first();

        return [
            'user_name'  => $acc['user_name'],
            'first_name' => $acc['first_name'],
            'last_name'  => $acc['last_name'],
            'email'      => $acc['email'],
            'mobile'     => $acc['mobile'],
            'image_src'  => $acc['image_src'],
        ];
    }

    function updProfile($par, $usePass = true)
    {
        $username = session()->get('user');
        $par['user_name'] = $username;
        $pass = $usePass === true ? $par['password'] : '';
        unset($par['password']);
        $acc = $this->model->where('user_name', $username)->first();
        if ($usePass && !Hash::check($pass, $acc['password'])) {
            return [
                'success' => false,
                'message' => 'Unauthorized'
            ];
        }
        
        if (array_key_exists('n_password', $par)) {
            $par['password'] = Hash::make($par['n_password']);
            unset($par['n_password']);
        }
        
        $res = $this->model->where('user_name', $username)->update($par);
        $acc->refresh();
        return [
            'success' => $res === 1,
            'details' => [
                'user_name'  => $acc['user_name'],
                'first_name' => $acc['first_name'],
                'last_name'  => $acc['last_name'],
                'image_src'  => $acc['image_src'],
                'email'      => $acc['email'],
                'mobile'     => $acc['mobile']
            ]
        ];
    }
}
