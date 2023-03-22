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

    public function profile(Request $req)
    {   
        $par = $req->only(['email', 'mobile', 'first_name', 'last_name', 'password']);
        return $this->service->updProfile($par);
    }

    public function password(Request $req)
    {   
        $par = $req->only(['n_password', 'password']);
        return $this->service->updProfile($par);
    }

    public function avatar(Request $req)
    {   
        $par = $req->only(['image_src']);
        return $this->service->updProfile($par, false);
    }
}
