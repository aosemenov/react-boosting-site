<?php

namespace App\Http\Controllers;

use App\Http\Requests\Boosting\BoostingEloCsRequest;
use App\Http\Requests\Boosting\BoostingRankCsRequest;
use App\Models\TariffsEloCs;
use App\Models\TariffsRankCs;
use Illuminate\Support\Facades\Cache;

class BoostCSController extends Controller
{
    protected const MIN_ELO = 25;

    public function calcRank(BoostingRankCsRequest $request)
    {
        $data = $request->validated();
        if ($data['rank_from'] >= $data['rank_to']) {
            return $this->error(400, 'Выбранный ранг некорректный');
        }
        $sum = 0.0;
        $i = $data['rank_from'];

        $ranks = Cache::remember('tariffs_ranks_cs', self::DEFAULT_TTL, function () {
            return TariffsRankCs::all();
        });

        foreach ($ranks as $rank) {
            if ($i >= $data['rank_to']) {
                break;
            }

            while ($i >= $rank->rank_from && $i <= $rank->rank_to && $i < $data['rank_to']) {
                $sum += $rank->price;
                $i++;
            }
        }

        return $this->success(['sum' => $sum]);

    }

    public function calcElo(BoostingEloCsRequest $request)
    {
        $data = $request->validated();
        if ($data['elo_from'] >= $data['elo_to']) {
            return $this->error(400, 'ELO некорректно');
        }
        $sum = 0.0;
        $i = $data['elo_from'];

        $elos = Cache::remember('tariffs_elos_cs', self::DEFAULT_TTL, function () {
            return TariffsEloCs::all();
        });

        foreach ($elos as $elo) {
            while ($i <= $elo->elo_to && $i >= $elo->elo_from && $i < $data['elo_to']) {
                $sum += $elo->price / self::MIN_ELO;
                $i++;
            }
        }

        return $this->success(['sum' => round($sum, 1)]);
    }

    public function getRankInfo()
    {
        $ranks = Cache::remember('tariffs_ranks_cs', self::DEFAULT_TTL, function () {
            return TariffsRankCs::all();
        });
        $rank_from = $ranks->sortBy('rank_from')->first()->rank_from;
        $rank_to = $ranks->sortByDesc('rank_from')->first()->rank_to;
        return $this->success(['min-rank' => $rank_from, 'max-rank' => $rank_to]);
    }

    public function getEloInfo()
    {
        $elos = Cache::remember('tariffs_elos_cs', self::DEFAULT_TTL, function () {
            return TariffsEloCs::all();
        });
        $elo_from = $elos->sortBy('elo_from')->first()->elo_from;
        $elo_to = $elos->sortByDesc('elo_from')->first()->elo_to;
        return $this->success(['min-elo' => $elo_from, 'max-elo' => $elo_to]);
    }
}
