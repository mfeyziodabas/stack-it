package com.example.pokemon.battle;

import com.example.pokemon.entities.BattleResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BattleResultRepository extends JpaRepository<BattleResult, Long> {
}
