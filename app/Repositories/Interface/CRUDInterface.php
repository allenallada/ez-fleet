<?php

namespace App\Repositories\Interface;

interface CRUDInterface {
    public function store($params);
    public function update($params);
    public function get($id);
    public function list($params);
    public function delete($id);
}