import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Paginated from './views/PaginatedView.vue'
import HomeView from './views/HomeView.vue'

const PokemonView = () => import('./views/PokemonView.vue')
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomeView,
    name: 'Home',
  },
  {
    path: '/list/:ty',
    component: Paginated,
  },
  {
    path: '/pokemon/:id',
    component: PokemonView,
  },
]
export const router = createRouter({
  history: createWebHistory(),
  routes,
})
const pokemonRouteRegex =
  /^https:\/\/pokeapi\.co\/api\/v2\/pokemon\/([a-zA-Z0-9-]+)\/?$/
const paginatedRouteRegex =
  /^https:\/\/pokeapi\.co\/api\/v2\/([A-Z_a-z-]+($|\?(.+)))/
export function toRoute(apiUrl: string): string | null {
  const pokemonRoute = apiUrl.match(pokemonRouteRegex)
  if (pokemonRoute) {
    return `/pokemon/${pokemonRoute[1]}`
  }
  const paginatedRoute = apiUrl.match(paginatedRouteRegex)
  if (paginatedRoute) {
    console.log('paginatedRoute', paginatedRoute)
    return `/list/${paginatedRoute[1]}` + paginatedRoute[2]
  }
  return ''
}
