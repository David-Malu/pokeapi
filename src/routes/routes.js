import poke from "../components/poke.vue"
import galeria from "../components/galeria.vue"
import {createRouter,createWebHashHistory} from "vue-router"

const routes =[
 {path:"/", component:poke},
 {path:"/galeria/:nombre/:imagen/:poder/:id/:peso/:hp/:defensa/:ataque/:ataqueEspecial/:defensaEspecial/:velocidad/:altura/:tipo/:", component:galeria,props: true,}

]

export const router= createRouter({
history:createWebHashHistory(),
routes

})