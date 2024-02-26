<template>
    <div>
        <div class="container-fluid" style="font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">
            <div class="row">
                <div class="col-sm-4">
                    
                </div>
                <div class="col-sm-4">
                    <h1 id="titulo">PokeApi</h1>

                </div>
                <div class="col-sm-4">

                    <h4 style="margin-top: 50px;text-indent: 250px;" >Tipo: <b style="color: blue;" >{{ tipo }}</b> </h4>
                </div>

            </div>


            <div class="row">
                <div class="col-sm-1">

                </div>
                <div class="col-sm-6" id="id">
                    <h1>N° : {{ id }}</h1>
                    <h1 id="nombre_poke">{{ nombre }}</h1>
                </div>
                <div class="col-sm-4" id="imagen">
                    <img :src="imagen" :alt="nombre" />

                </div>
                <div class="col-sm-1"></div>
            </div>

            <div class="row mt-5">
                <div class="col-sm-4">
                    <h1 id="estadisticas">Estadisticas </h1>
                </div>
                <div class="col-sm-1">
                    <h6>Altura:</h6>
                    <h6>Velocidad:</h6>
                    <h6>DefEspecial:</h6>
                    <h6>AtaqEspecial:</h6>
                    <h6>Ataque:</h6>
                    <h6>Defensa:</h6>
                    <h6>Hp:</h6>
                    <h6>Peso:</h6>

                    <h6>Poder:</h6>
                </div>
                <div class="col-sm-6">
                    <div class="progress mt-2" role="progressbar" aria-label="Success example" aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" :style="{ width: `${altura}%` }"></div>
                    </div>
                    <div class="progress mt-4" role="progressbar" aria-label="Info example" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-info" :style="{ width: `${velocidad}%` }"></div>
                    </div>
                    <div class="progress mt-4" role="progressbar" aria-label="Warning example" aria-valuenow="75"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-warning" :style="{ width: `${defensaEspecial}%` }"></div>
                    </div>
                    <div class="progress mt-4" role="progressbar" aria-label="Danger example" aria-valuenow="100"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" :style="{ width: `${ataqueEspecial}%` }"></div>
                    </div>
                    <div class="progress mt-4" role="progressbar" aria-label="Danger example" aria-valuenow="100"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-danger" :style="{ width: `${ataque}%` }"></div>
                    </div>
                    <div class="progress mt-4" role="progressbar" aria-label="Danger example" aria-valuenow="100"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-info" :style="{ width: `${defensa}%` }"></div>
                    </div>
                    <div class="progress mt-4" role="progressbar" aria-label="Danger example" aria-valuenow="100"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" :style="{ width: `${hp}%` }"></div>
                    </div>
                    <div class="progress mt-4" role="progressbar" aria-label="Danger example" aria-valuenow="100"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-danger" :style="{ width: `${peso}%` }"></div>
                    </div>
                    <div class="progress mt-4" role="progressbar" aria-label="Danger example" aria-valuenow="100"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-warning" :style="{ width: `${poder}%` }"></div>
                    </div>




                </div>
                <div class="col-sm-1">
                    <h6>{{ altura }}</h6>
                    <h6>{{ velocidad }}</h6>
                    <h6>{{ defensaEspecial }}</h6>
                    <h6>{{ ataqueEspecial }}</h6>
                    <h6>{{ ataque }}</h6>
                    <h6>{{ defensa }}</h6>
                    <h6>{{ hp }}</h6>
                    <h6>{{ peso }}</h6>
                    <h6>{{ poder }}</h6>
                </div>
            </div>







        </div>




    </div>
</template>

  
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    nombre: { type: String, required: true, },
    imagen: { type: String, required: true, },
    poder: { type: String, required: true },
    id: { tipe: String, required: true },
    peso: { type: String, required: true },
    hp: { type: String, required: true },
    defensa: { type: String, required: true },
    ataque: { type: String, required: true },
    ataqueEspecial: { type: String, required: true },
    defensaEspecial: { type: String, required: true },
    velocidad: { type: String, required: true },
    altura: { type: String, required: true },
    tipo: { type: String, required: true }
});
</script>

<style scoped >
#titulo {
    color: red;
    display: flex;
    justify-content: center;
    align-items: center;
}

#nombre_poke {
    width: 10%;
    color: black;
    text-align: center;
    text-transform: uppercase;
    font-size: 100px;
    font-weight: bold;
    margin-top: 130px;
}

#estadisticas {
    width: 100%;
    color: black;
    text-align: center;
    text-transform: uppercase;
    font-size: 60px;
    font-weight: bold;
    margin-top: 50px;
}

#imagen {
    overflow: hidden;
}

#imagen img {
    width: 100%;
    height: 100%;
    transition: scale 400ms;
}

#imagen:hover img {
    scale: 120%;
}
</style> 


  
