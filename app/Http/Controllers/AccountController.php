<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\AccountRepository;

class AccountController extends Controller
{
    public $repository;

    function __construct(AccountRepository $repository)
    {
        $this->repository = $repository;
    }

    public function profile(Request $req)
    {   
        $params = $req->only(['email', 'mobile', 'first_name', 'last_name', 'password']);
        return $this->repository->update($params);
    }

    public function password(Request $req)
    {   
        $params = $req->only(['n_password', 'password']);
        return $this->repository->update($params);
    }

    public function avatar(Request $req)
    {   
        $params = $req->only(['image_src']);
        return $this->repository->update($params, false);
    }

    public function register(Request $req)
    {   
        $par = $req->only([
            'userName',
            'firstName',
            'lastName',
            'password'
        ]);

        return $this->repository->store($par);
    }


    public function details($id)
    {   
        return $this->repository->get($id);
    }
}
