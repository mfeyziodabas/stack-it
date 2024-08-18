package com.example.pokemon.feignclients;

import com.example.pokemon.models.Pokemon;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient(
        name = "pokemon",
        url = "https://pokeapi.co/api/v2/"
)
public interface PokemonFeignClient {

    @RequestMapping(
            method = RequestMethod.GET,
            value = "/pokemon/{id}"
    )
    Pokemon getPokemon(@PathVariable Long id);
}
