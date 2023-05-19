<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class OfferType extends Model
{
    public $timestamps = false;

    protected const DEFAULT_TTL = 86400;

    private const TYPE_BOOST_CS = 'boost_cs';
    private const TYPE_BOOST_VR = 'boost_vr';
    private const TYPE_ACCOUNT = 'account';

    /**
     * @return OfferType|false
     */
    public static function getBoostCsType()
    {
        return self::getTypes(self::TYPE_BOOST_CS);
    }

    /**
     * @return OfferType|false
     */
    public static function getBoostVrType()
    {
        return self::getTypes(self::TYPE_BOOST_VR);
    }

    /**
     * @return OfferType|false
     */
    public static function getAccountType()
    {
        return self::getTypes(self::TYPE_ACCOUNT);
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
     * @return false|OfferType
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
        return Cache::remember('offer_types_all', self::DEFAULT_TTL, function () {
            return OfferType::all();
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
