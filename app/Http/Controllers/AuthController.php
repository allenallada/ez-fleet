<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\AuthRepository;

class AuthController extends Controller
{
    public $repository;

    function __construct(AuthRepository $repository)
    {
        $this->repository = $repository;
    }

    public function register(Request $req)
    {   
        $par = $req->only([
            'userName',
            'firstName',
            'lastName',
            'password'
        ]);

        return $this->repository->register($par);
    }

    public function login(Request $req)
    {   
        $par = $req->only([
            'username',
            'password',
        ]);

        return $this->repository->login($par);
    }


    public function status()
    {   
        return $this->repository->status();
    }


    public function details()
    {   
        return $this->repository->details();
    }
}
