<?php

namespace App\Repositories\Interface;

interface GenericEntityInterface {
    public function store($params);
    public function update($params);
    public function get($id);
}