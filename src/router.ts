import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const HelloWorld = () => import("./components/HelloWorld.vue");
const PokemonView = () => import("./components/PokemonView.vue");
export const routes:RouteRecordRaw[] = [
    {
        path:"/",
        component: HelloWorld
    },
    {
        path:"/pokemon/:id",
        component: PokemonView
    }
]
export const router = createRouter({
    history: createWebHistory(),
    routes
})
const pokemonRouteRegex = /^https:\/\/pokeapi\.co\/api\/v2\/pokemon\/([a-zA-Z0-9-]+)$/
export function toRoute(apiUrl:string):string {
    const pokemonRoute = apiUrl.match(pokemonRouteRegex)
    if (pokemonRoute) {
        return "/pokemon/" + pokemonRoute[1]
    }
}
