<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;

    const CREATED_AT = 'creation_date';


    const UPDATED_AT = 'updated_date';

    protected $fillable = [
        'user_name',
        'first_name',
        'last_name',
        'password',
        'is_verified'
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 't_account';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'account_no';
}
