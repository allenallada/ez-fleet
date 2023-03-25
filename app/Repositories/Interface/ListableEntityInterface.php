<?php

namespace App\Repositories\Interface;

interface ListableEntityInterface {
    public function list($params);
    public function count($id);
}