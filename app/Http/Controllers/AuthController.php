<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\AuthService;

class AuthController extends Controller
{
    public $service;

    function __construct(AuthService $service)
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
}
