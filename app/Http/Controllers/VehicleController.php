<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\VehicleRepository;

class VehicleController extends Controller
{
    public $repository;

    function __construct(VehicleRepository $repository)
    {
        $this->repository = $repository;
    }


    public function store(Request $request)
    {   
        $params = $request->only([
            'plate_number',
            'brand',
            'model',
            'plate_number',
            'status',
            'image_src'
        ]);

        return $this->repository->store($params);
    }

    public function list(Request $request)
    {   
        $params = $request->only([
            'limit',
            'offset'
        ]);
        
        return $this->repository->list($params);
    }

    public function count(Request $request)
    {   
        $params = $request->only([]);

        return [
            'count' => $this->repository->count($params)
        ];
    }

    public function delete(Request $request)
    {   
        $params = $request->only(['vehicle_no']);
        return [
            'success' =>  $this->repository->delete($params) === 1
        ];
    }

    public function update(Request $request)
    {   
        $params = $request->only([
            'vehicle_no',
            'plate_number',
            'brand',
            'model',
            'plate_number',
            'status',
            'image_src'
        ]);
        return [
            'success' =>  $this->repository->update($params) === 1
        ];
    }
}
