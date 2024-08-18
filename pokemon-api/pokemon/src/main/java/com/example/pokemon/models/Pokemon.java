package com.example.pokemon.models;

import jakarta.annotation.Nullable;

@Nullable
public class Pokemon {

    private final Long id;
    private final int weight;

    public Pokemon(Long id, int weight) {
        this.id = id;
        this.weight = weight;
    }

    public Long getId() {
        return id;
    }

    public int getWeight() {
        return weight;
    }

    @Override
    public String toString() {
        return "Pokemon{" +
                "id=" + id +
                ", weight=" + weight +
                '}';
    }
}
