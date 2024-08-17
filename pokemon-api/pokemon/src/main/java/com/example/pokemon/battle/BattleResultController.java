package com.example.pokemon.battle;

import org.aspectj.lang.annotation.RequiredTypes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/battle")
public class BattleResultController {

    private final BattleService battleService;

    @Autowired
    public BattleResultController(BattleService battleService) {
        this.battleService = battleService;
    }

    @GetMapping("/result/{id}")
    public BattleResult getOneBattleResult(@PathVariable Long id) {
        return battleService.findBattleResultByBattleId(id);
    }

    @GetMapping("/result")
    public List<BattleResult> getBattleResults() {
        return battleService.getBattleResults();
    }

    @PostMapping("/start")
    @ResponseBody
    public ResponseEntity<BattleResult> saveBattleResult(@RequestBody ParticipiansOfBattle participiansOfBattle){
        var battleResult = battleService.arrangeABattle(participiansOfBattle);
        if(battleResult != null){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(battleResult);
        //return ResponseEntity.ok(battleService.saveOneBattleResult(participiansOfBattle));
    }

}
