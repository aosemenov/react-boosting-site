<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class AccountType extends Model
{
    protected const DEFAULT_TTL = 86400;
    const TYPE_ACCOUNT_CS = 'CS';
    const TYPE_ACCOUNT_VR = 'VR';

    public $timestamps = false;


    /**
     * @return AccountType|false
     */
    public static function getVrType()
    {
        return self::getTypes(self::TYPE_ACCOUNT_VR);
    }

    /**
     * @return AccountType|false
     */
    public static function getCsType()
    {
        return self::getTypes(self::TYPE_ACCOUNT_CS);
    }

    /**
     * @return array
     */
    public static function getAllTypesCode(): array
    {
        $allTypes = self::getAllTypes();
        $codes = [];
        foreach ($allTypes as $type) {
            $codes[] = $type->getCode();
        }
        return $codes;
    }

    /**
     * @param string $codeType
     * @return false|AccountType
     */
    public static function getTypes(string $codeType)
    {
        $allTypes = self::getAllTypes();
        foreach ($allTypes as $type) {
            if ($type->getCode() == $codeType) {
                return $type;
            }
        }
        return false;
    }

    /**
     * @return mixed
     */
    private static function getAllTypes()
    {
        return Cache::remember('account_types_all', self::DEFAULT_TTL, function () {
            return AccountType::all();
        });
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
