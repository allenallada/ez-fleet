<?php

namespace App\Services;

class AuthService
{
    function __construct()
    {

    }

    function register($par)
    {
        $par['received'] = true;
        return $par;
    }
}
