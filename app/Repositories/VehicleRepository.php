<?php

namespace App\Repositories;

use App\Models\Vehicle;
use App\Repositories\Interface\DeleteableEntityInterface;
use App\Repositories\Interface\GenericEntityInterface;
use App\Repositories\Interface\ListableEntityInterface;

class VehicleRepository implements GenericEntityInterface, ListableEntityInterface, DeleteableEntityInterface
{
    private $model;

    function __construct(Vehicle $model)
    {
        $this->model = $model;
    }

    function store($params)
    {
        $vehicle = $this->model->where('plate_number', $params['plate_number'])->get();
        if (count($vehicle) > 0) {
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
        $accountNo = session()->get('account_no');
        return $this->model->where('account_no', $accountNo)->orderBy('vehicle_no', 'desc')->skip($params['offset'])->take($params['limit'])->get();
    }

    function update($params)
    {
        $accountNo = session()->get('account_no');
        return $this->model->where('account_no', $accountNo)->where('vehicle_no', $params['vehicle_no'])->update($params);
    }

    function delete($params)
    {   
        $accountNo = session()->get('account_no');
        return $this->model->where('account_no', $accountNo)->whereIn('vehicle_no', $params['vehicle_no'])->delete();
    }

    function count($params)
    {
        $accountNo = session()->get('account_no');

        return $this->model->where('account_no', $accountNo)->get()->count();
    }
}
