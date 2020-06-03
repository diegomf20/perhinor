<template>
    <div id="app">
        <div class="banner" style="background-image: url('inicio.png');">
            <div class="banner-text animate__animated animate__fadeIn">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-7 col-md-7 col-lg-5">
                            <div class="flex mb-3">
                                <div>
                                    <h1 class="banner-capital">11</h1>
                                </div>
                                <div>
                                    <h1 class="mb-0 banner-titulo">Años de</h1>
                                    <h1 class="mb-0 banner-titulo">EXPERIENCIA</h1>
                                </div>
                            </div>
                            <p class="text-right">
                                "Llevando agua saludable y confiable a miles de hogares e industrias"
                                <!-- "Soluciones integrales a la medida del cliente" -->
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-blanco">
            <div class="container">
                <h3 class="text-center mb-3 text-blue">Videos</h3>
                <div class="row">
                    <div class="col-sm-6 col-lg-4">
                        <iframe class="youtube mb-1" height="200" src="https://www.youtube.com/embed/gSrIaATOiv0"></iframe>
                        <h4 class="text-center mb-0">Titulo</h4>
                        <p class="text-center">Descripcion</p>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <iframe class="youtube  mb-1" height="200" src="https://www.youtube.com/embed/xsKZOv7nYQA"></iframe>    
                        <h4 class="text-center mb-0">Titulo</h4>
                        <p class="text-center">Descripcion</p>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <iframe class="youtube  mb-1" height="200" src="https://www.youtube.com/embed/gSrIaATOiv0"></iframe>
                        <h4 class="text-center mb-0">Titulo</h4>
                        <p class="text-center">Descripcion</p>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <iframe class="youtube mb-1" height="200" src="https://www.youtube.com/embed/gSrIaATOiv0"></iframe>
                        <h4 class="text-center mb-0">Titulo</h4>
                        <p class="text-center">Descripcion</p>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <iframe class="youtube  mb-1" height="200" src="https://www.youtube.com/embed/xsKZOv7nYQA"></iframe>    
                        <h4 class="text-center mb-0">Titulo</h4>
                        <p class="text-center">Descripcion</p>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <iframe class="youtube  mb-1" height="200" src="https://www.youtube.com/embed/gSrIaATOiv0"></iframe>
                        <h4 class="text-center mb-0">Titulo</h4>
                        <p class="text-center">Descripcion</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-gris">
            <div class="container">
                <h3 class="text-center mb-3 text-blue">Proyectos</h3>
                <div class="row">
                    <div v-for="proyecto in proyectos" class="col-sm-6 col-lg-4">
                        <a target="_blank" rel="noopener noreferrer" :href="proyecto.url_album" class="tarjeta-proyecto img-responsive">
                            <img :src="proyecto.url_imagen" class="img-responsive" alt="">
                            <div class="contenido">
                                <div class="contenido-titulo">
                                    <hr class="mb-2">
                                    Proyecto
                                    <br>
                                    <p class="mb-0 text-center"><b>{{ proyecto.nombre_proyecto }}</b></p>
                                    - {{ proyecto.ubicacion }} -
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            proyectos: []
        }
    },
    mounted() {
        this.cargar();
    },
    methods: {
        cargar(){
            axios.get('proyectos.json').then(res=>{
                this.proyectos=res.data;
            })
        }
    },
}
</script>