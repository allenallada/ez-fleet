<?php

namespace App\Repositories;

use App\Models\Account;
use Illuminate\Support\Facades\Hash;

class AccountRepository
{
    private $model;

    function __construct(Account $model)
    {
        $this->model = $model;
    }

    function update($par, $usePass = true)
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
