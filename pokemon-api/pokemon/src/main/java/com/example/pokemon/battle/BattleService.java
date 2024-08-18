package com.example.pokemon.battle;

import com.example.pokemon.feignclients.PokemonFeignClient;
import com.example.pokemon.models.Pokemon;
import feign.FeignException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class BattleService {

    private final BattleResultRepository battleResultRepository;
    private final PokemonFeignClient pokemonFeignClient;

    @Autowired
    public BattleService(BattleResultRepository resultRepository, PokemonFeignClient pokemonFeignClient) {
        this.battleResultRepository = resultRepository;
        this.pokemonFeignClient = pokemonFeignClient;
    }

    public List<BattleResult> getAllBattleResults() {
        return battleResultRepository.findAll();
    }

    public BattleResult findBattleResultByBattleId(Long id) {
        return battleResultRepository.findById(id).orElse(null);
    }

    public BattleResult arrangeABattle(ParticipantsOfBattle participantsOfBattle) {
        List<Pokemon> participants = checkIfParticipantsExistsAndCallPokemonInfo(participantsOfBattle);
        if(participants.size() != 2) {
            return null;
        }
        BattleResult battleResult = determineTheWinnerAndCreateBattleResult(participants);
        battleResultRepository.save(battleResult);
        return battleResult;
    }

    private BattleResult determineTheWinnerAndCreateBattleResult(List<Pokemon> participants) {
        participants.sort(Comparator.comparing(Pokemon::weight).reversed());
        return createBattleResult(participants.getFirst().id(), participants.getLast().id());
    }

    private BattleResult createBattleResult(Long winner, Long loser) {
        return new BattleResult(winner, loser, new Date());
    }

    private List<Pokemon> checkIfParticipantsExistsAndCallPokemonInfo(ParticipantsOfBattle participantsOfBattle) {
        ArrayList<Pokemon> participantsPokemonList = new ArrayList<>();
        try {
            Pokemon attacker = pokemonFeignClient.getPokemon(participantsOfBattle.attacker());
            Pokemon defender = pokemonFeignClient.getPokemon(participantsOfBattle.defender());
            participantsPokemonList.add(attacker);
            participantsPokemonList.add(defender);
        } catch (FeignException e) {
            e.printStackTrace();
        }
        return participantsPokemonList;
    }
}
