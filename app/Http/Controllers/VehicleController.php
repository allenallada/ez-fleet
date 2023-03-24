<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\VehicleService;

class VehicleController extends Controller
{
    public $service;

    function __construct(VehicleService $service)
    {
        $this->service = $service;
    }


    public function add(Request $req)
    {   
        $par = $req->only([
            'plate_number',
            'brand',
            'model',
            'plate_number',
            'status',
            'image_src'
        ]);

        return $this->service->add($par);
    }

    public function search(Request $req)
    {   
        $par = $req->only([
            'limit',
            'offset'
        ]);

        return $this->service->search($par);
    }
}
