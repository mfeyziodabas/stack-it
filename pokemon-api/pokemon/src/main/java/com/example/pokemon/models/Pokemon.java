package com.example.pokemon.models;

public record Pokemon(Long id, int weight) {

    @Override
    public String toString() {
        return "Pokemon{" +
                "id=" + id +
                ", weight=" + weight +
                '}';
    }
}
