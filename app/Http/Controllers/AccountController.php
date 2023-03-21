<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\AccountService;

class AccountController extends Controller
{
    public $service;

    function __construct(AccountService $service)
    {
        $this->service = $service;
    }


    public function register(Request $req)
    {   
        $par = $req->only([
            'userName',
            'firstName',
            'lastName',
            'password'
        ]);

        return $this->service->register($par);
    }


    public function login(Request $req)
    {   
        $par = $req->only([
            'username',
            'password',
        ]);

        return $this->service->login($par);
    }


    public function status()
    {   
        return $this->service->status();
    }


    public function details()
    {   
        return $this->service->details();
    }
}
