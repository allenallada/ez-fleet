<?php

namespace App\Repositories;

use App\Models\Vehicle;
use App\Repositories\Interface\CRUDInterface;

class VehicleRepository implements CRUDInterface
{
    private $model;

    function __construct(Vehicle $model)
    {
        $this->model = $model;
    }

    function store($params)
    {
        $acc = $this->model->where('plate_number', $params['plate_number'])->get();
        if (count($acc) > 0) {
            return [
                'success' => false,
                'message' => 'Plate number already exists'
            ];
        }

        $res = $this->model->create($params);

        return [
            'success' => true,
            'account' => $res
        ];
    }

    function get($id)
    {
        return $id;
    }

    function update($params)
    {

    }

    function list($params)
    {

    }

    function delete($id)
    {

    }
}
