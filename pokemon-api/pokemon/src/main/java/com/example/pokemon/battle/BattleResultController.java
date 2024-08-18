package com.example.pokemon.battle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/battle")
public class BattleResultController {

    private final BattleService battleService;

    @Autowired
    public BattleResultController(BattleService battleService) {
        this.battleService = battleService;
    }

    @GetMapping("/result")
    public List<BattleResult> getAllBattleResults() {
        return battleService.getAllBattleResults();
    }

    @GetMapping("/result/{id}")
    public ResponseEntity<BattleResult> getOneBattleResult(@PathVariable Long id) {
        BattleResult battleResult = battleService.findBattleResultByBattleId(id);
        if (battleResult == null) {
            ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(battleResult);
    }

    @PostMapping("/start")
    @ResponseBody
    public ResponseEntity<BattleResult> startBattle(@RequestBody ParticipantsOfBattle participantsOfBattle){
        BattleResult battleResult = battleService.arrangeABattle(participantsOfBattle);
        if(battleResult == null){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(battleResult);
    }
}
