<?php

namespace App\Services;

use App\Models\Vehicle;

class VehicleService
{
    private $model;

    function __construct(Vehicle $model)
    {
        $this->model = $model;
    }

    function add($par)
    {
        $acc = $this->model->where('plate_number', $par['plate_number'])->get();
        if (count($acc) > 0) {
            return [
                'success' => false,
                'message' => 'Plate number already exists'
            ];
        }

        $res = $this->model->create($par);

        return [
            'success' => true,
            'account' => $res
        ];
    }

    function search($par)
    {
        return $par;
    }
}
