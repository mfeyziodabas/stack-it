package com.example.pokemon.battle;

import jakarta.persistence.*;

import java.util.Date;

@Entity(name = "BattleResults")
public class BattleResult {

    @Id
    @SequenceGenerator(
            name = "battle_result_sequence",
            sequenceName = "battle_result_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "battle_result_sequence"
    )
    @Column(
            name = "battle_id",
            updatable = false
    )
    private Long battleId;

    @Column(
            name ="winner_id",
            nullable = false
    )
    private Long winnerId;

    @Column(
            name ="loser_id",
            nullable = false
    )
    private Long loserId;

    @Column(
            name ="battle_date"
    )
    private Date battleDate;

    public BattleResult(Long winnerId, Long loserId, Date battleDate) {
        this.winnerId = winnerId;
        this.loserId = loserId;
        this.battleDate = battleDate;
    }

    public BattleResult() {
    }

    public Long getBattleId() {
        return battleId;
    }

    public void setBattleId(Long battleId) {
        this.battleId = battleId;
    }

    public Long getWinnerId() {
        return winnerId;
    }

    public void setWinnerId(Long winnerId) {
        this.winnerId = winnerId;
    }

    public Long getLoserId() {
        return loserId;
    }

    public void setLoserId(Long loserId) {
        this.loserId = loserId;
    }

    public Date getBattleDate() {
        return battleDate;
    }

    public void setBattleDate(Date battleDate) {
        this.battleDate = battleDate;
    }

    @Override
    public String toString() {
        return "BattleResult{" +
                "battleId=" + battleId +
                ", winnerId=" + winnerId +
                ", loserId=" + loserId +
                ", battleDate=" + battleDate +
                '}';
    }
}
