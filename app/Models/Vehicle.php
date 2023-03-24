<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;

    const CREATED_AT = 'creation_date';

    const UPDATED_AT = 'updated_date';

    protected $fillable = [
        'plate_number',
        'brand',
        'model',
        'driver_no',
        'status',
        'image_src'
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 't_vehicle';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'vehicle_no';
}
