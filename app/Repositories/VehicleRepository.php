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
        $params['account_no'] = session()->get('account_no');
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

    function list($params)
    {
        return $this->model->orderBy('vehicle_no', 'desc')->skip($params['offset'])->take($params['limit'])->get();
    }

    function update($params)
    {

    }

    function delete($id)
    {

    }

    function count($params)
    {
        $accountNo = session()->get('account_no');

        return $this->model->where('account_no', $accountNo)->get()->count();
    }
}
