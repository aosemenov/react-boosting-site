<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class OrderStatus extends Model
{
    public $timestamps = false;

    private const STATUS_WAIT_PAY = 'wait-pay';
    private const STATUS_SEARCH_BOOST = 'search-boost';
    private const STATUS_IN_PROGRESS = 'in-progress';
    private const STATUS_SUCCESS = 'success';
    private const STATUS_CANCEL = 'cancel';

    protected const DEFAULT_TTL = 86400;

    /**
     * @return OrderStatus|false
     */
    public static function getWaitStatus()
    {
        return self::getStatus(self::STATUS_WAIT_PAY);
    }

    /**
     * @return OrderStatus|false
     */
    public static function getSearchBoostStatus()
    {
        return self::getStatus(self::STATUS_SEARCH_BOOST);
    }

    /**
     * @return OrderStatus|false
     */
    public static function getInProgressStatus()
    {
        return self::getStatus(self::STATUS_IN_PROGRESS);
    }

    /**
     * @return OrderStatus|false
     */
    public static function getSuccessStatus()
    {
        return self::getStatus(self::STATUS_SUCCESS);
    }

    /**
     * @return false|OrderStatus
     */
    public static function getCancelStatus()
    {
        return self::getStatus(self::STATUS_CANCEL);
    }

    /**
     * @param string $codeStatus
     * @return false|OrderStatus
     */
    private static function getStatus(string $codeStatus)
    {
        $allStatuses = self::getAllStatuses();
        foreach ($allStatuses as $status) {
            if ($status->getCode() == $codeStatus) {
                return $status;
            }
        }
        return false;
    }

    /**
     * @return mixed
     */
    private static function getAllStatuses()
    {
        return Cache::remember('order_statuses_all', self::DEFAULT_TTL, function () {
            return $this->all();
        });
    }

    /**
     * @return int|mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed|string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @return mixed|string
     */
    public function getCode()
    {
        return $this->code;
    }
}
