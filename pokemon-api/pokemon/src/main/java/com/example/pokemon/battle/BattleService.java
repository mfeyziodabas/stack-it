package com.example.pokemon.battle;

import com.example.pokemon.feignclients.PokemonFeignClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Service
public class BattleService {

    private final BattleResultRepository resultRepository;
    private final PokemonFeignClient pokemonFeignClient;

    @Autowired
    public BattleService(BattleResultRepository resultRepository, PokemonFeignClient pokemonFeignClient) {
        this.resultRepository = resultRepository;
        this.pokemonFeignClient = pokemonFeignClient;
    }


    public List<BattleResult> getBattleResults() {
        return resultRepository.findAll();
    }

    public BattleResult findBattleResultByBattleId(Long id) {
        return resultRepository.findById(id).orElse(null);
    }

    public BattleResult saveOneBattleResult(ParticipiansOfBattle participiansOfBattle) {
        BattleResult result = new BattleResult(participiansOfBattle.attacker(), participiansOfBattle.defender(), new Date());
        return resultRepository.save(result);
    }

    public BattleResult arrangeABattle(ParticipiansOfBattle participiansOfBattle) {
        return determineTheWinnerAndCreateBattleResult(participiansOfBattle);
    }

    private BattleResult determineTheWinnerAndCreateBattleResult(ParticipiansOfBattle participiansOfBattle) {
        checkIfParticipiantsExists(participiansOfBattle);
        return null;
    }

    public boolean checkIfParticipiantsExists(ParticipiansOfBattle participiansOfBattle) {
        System.out.println(pokemonFeignClient.getPokemon(participiansOfBattle.attacker()));
        return true;
    }
}
