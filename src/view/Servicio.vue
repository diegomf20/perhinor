<template>
    <div>
        <div class="banner" style="background-image: url('servicios.png');">
            <div class="banner-text animate__animated animate__fadeIn">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-7 col-md-7 col-lg-5">
                            <h1 class="banner-titulo text-center">Nuestros</h1>
                            <h1 class="banner-titulo text-center">Servicios</h1>
                            <p class=" text-center">“Te ayudamos a crecer”</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-blanco servicio">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div @click="detalles(1)" class="row">
                            <div class="col-4 col-md-4">
                                <img class="img-responsive" src="img/servicio/PERFORACION-DE-POZO-TUBULAR-DE-AGUA-CON-SISTEMA-ROTATORIO.png" alt="">
                            </div>
                            <div class="col-8 col-md-8 vertical-center">
                                <p class="sub-titulo">PERFORACIÓN y CONSTRUCCIÓN DE POZO TUBULAR DE AGUA CON SISTEMA ROTATORIO<i class="fa fa-caret-down" aria-hidden="true"></i></p>
                            </div>
                        </div>
                        <p class="mt-1 animate__animated animate__fadeIn" v-if="item_detalle==1">Método rotario, en la cual consiste llevar a cabo una acción de arrancar partículas por medio de un instrumento cortante (broca y barrenos) sometido a una fuerza giratoria, desde la superficie proporcionada por la máquina perforadora. Una vez que se va realizando el corte, se utiliza agua y bentonita creando una masa evitando el desprendimiento de las paredes del pozo. La preparación de la masa (bentonita y agua), se realiza con la recirculación del fluido a través de las pozas y el abastecimiento de agua mediante la poza donde se almacenó. A través de este sistema también permite la eliminación de los estratos y/o sedimentos que afloran la superficie de las pozas de lodo.</p>
                    </div>
                    <div class="col-md-6">
                        <div @click="detalles(2)" class="row">
                            <div class="col-8 col-md-8 vertical-center">
                                <p class="sub-titulo">SONDAJES ELECTRICOS VERTICALES (SEV) <i class="fa fa-caret-down" aria-hidden="true"></i></p>
                            </div>
                            <div class="col-4 col-md-4">
                                <img class="img-responsive" src="img/servicio/SONDAJES-ELECTRICOS-VERTICALES.png" alt="">
                            </div>
                        </div>
                        <p class="mt-1 animate__animated animate__fadeIn" v-if="item_detalle==2">Previo a la perforacion. permite conocer a partir de la superficie del terreno la distribución de las distintas capas geoeléctricas en dirección vertical. muestra los valores de resistividad de cada capa del subsuelo y su espesor correspondiente. Esta información permitirá definir un área favorable para la perforación de pozos de explotación que sirva de abastecimiento de agua para el proyecto que deseen implementar.</p>
                    </div>
                    <div class="col-md-6">
                        <div @click="detalles(3)" class="row">
                            <div class="col-4 col-md-4">
                                <img class="img-responsive" src="img/servicio/DIAGRAFIA.png" alt="">
                            </div>
                            <div class="col-8 col-md-8 vertical-center">
                                <p class="sub-titulo">DIAGRAFÍAS ELÉCTRICAS <i class="fa fa-caret-down" aria-hidden="true"></i></p>
                            </div>
                        </div>
                        <p class="mt-1 animate__animated animate__fadeIn" v-if="item_detalle==3"></p>
                    </div>
                    <div class="col-md-6">
                        <div @click="detalles(4)" class="row">
                            <div class="col-8 col-md-8 vertical-center">
                                <p class="sub-titulo">REGISTRO LITOLÓGICO <i class="fa fa-caret-down" aria-hidden="true"></i></p>
                            </div>
                            <div class="col-4 col-md-4">
                                <img class="img-responsive" src="img/servicio/REGISTRO-LITOLOGICO.png" alt="">
                            </div>
                        </div>
                        <p class="mt-1 animate__animated animate__fadeIn" v-if="item_detalle==4"></p>
                    </div>
                    <div class="col-md-6">
                        <div @click="detalles(5)" class="row">
                            <div class="col-4 col-md-4">
                                <img class="img-responsive" src="img/servicio/LIMPIEZA-DE-POZO-CON-AIRE-COMPRIMIDO.png" alt="">
                            </div>
                            <div class="col-8 col-md-8 vertical-center">
                                <p class="sub-titulo">LIMPIEZA DE POZO CON AIRE COMPRIMIDO <i class="fa fa-caret-down" aria-hidden="true"></i></p>
                            </div>
                        </div>
                        <p class="mt-1 animate__animated animate__fadeIn" v-if="item_detalle==5"></p>
                    </div>
                    <div class="col-md-6">
                        <div @click="detalles(6)" class="row">
                            <div class="col-8 col-md-8 vertical-center">
                                <p class="sub-titulo">PRUEBA DE RENDIMIENTO DE POZO TUBULAR <i class="fa fa-caret-down" aria-hidden="true"></i></p>
                            </div>
                            <div class="col-4 col-md-4">
                                <img class="img-responsive" src="img/servicio/PRUEBA-DE-RENDIMIENTO-DE-POZO-TUBULAR.png" alt="">
                            </div>
                        </div>
                        <p class="mt-1 animate__animated animate__fadeIn" v-if="item_detalle==6"></p>
                    </div>
                    <div class="col-md-6">
                        <div @click="detalles(7)" class="row">
                            <div class="col-4 col-md-4">
                                <img class="img-responsive" src="img/servicio/VIDEO-SONDAJE-DE-POZO-TUBULAR.png" alt="">
                            </div>
                            <div class="col-8 col-md-8 vertical-center">
                                <p class="sub-titulo">VIDEO SONDAJE DE POZO TUBULAR <i class="fa fa-caret-down" aria-hidden="true"></i></p>
                            </div>
                        </div>
                        <p class="mt-1 animate__animated animate__fadeIn" v-if="item_detalle==7"></p>
                    </div>
                    <div class="col-md-6">
                        <div @click="detalles(8)" class="row">
                            <div class="col-8 col-md-8 vertical-center">
                                <p class="sub-titulo">FORMALIZACION DE AGUA SUBTERRANEA <i class="fa fa-caret-down" aria-hidden="true"></i></p>
                            </div>
                            <div class="col-4 col-md-4">
                                <img class="img-responsive" src="img/servicio/FORMALIZACION-DE-AGUA-SUBTERRANEA.png" alt="">
                            </div>
                        </div>
                        <p class="mt-1 animate__animated animate__fadeIn" v-if="item_detalle==8"></p>
                    </div>
                    <div class="col-md-6">
                        <div @click="detalles(9)" class="row">
                            <div class="col-4 col-md-4">
                                <img class="img-responsive" src="img/servicio/ASESORIA-Y-CONSULTORIA-EN-PROYECTOS-DE-POZOS-TUBULARES.png" alt="">
                            </div>
                            <div class="col-8 col-md-8 vertical-center">
                                <p class="sub-titulo">ASESORIA Y CONSULTORIA EN PROYECTOS DE POZOS TUBULARES <i class="fa fa-caret-down" aria-hidden="true"></i></p>
                            </div>
                        </div>
                        <p class="mt-1 animate__animated animate__fadeIn" v-if="item_detalle==9"></p>
                    </div>
                    <div class="col-md-6">
                        <div @click="detalles(10)" class="row">
                            <div class="col-8 col-md-8 vertical-center">
                                <p class="sub-titulo">ESTUDIOS DE IMPACTO AMBIENTAL (EIA) <i class="fa fa-caret-down" aria-hidden="true"></i></p>
                            </div>
                            <div class="col-4 col-md-4">
                                <img class="img-responsive" src="img/servicio/ESTUDIOS-DE-IMPACTO-AMBIENTAL-(EIA).png" alt="">
                            </div>
                        </div>
                        <p class="mt-1 animate__animated animate__fadeIn" v-if="item_detalle==10"></p>
                    </div>
                    <div class="col-md-6">
                        <div @click="detalles(11)" class="row">
                            <div class="col-4 col-md-4">
                                <img class="img-responsive" src="img/servicio/ANALISIS-FISICO-QUIMICO-DEL-AGUA.png" alt="">
                            </div>
                            <div class="col-8 col-md-8 vertical-center">
                                <p class="sub-titulo">ANALISIS FISICO QUIMICO DEL AGUA <i class="fa fa-caret-down" aria-hidden="true"></i></p>
                            </div>
                        </div>
                        <p class="mt-1 animate__animated animate__fadeIn" v-if="item_detalle==11"></p>
                    </div>
                    <div class="col-md-6">
                        <div @click="detalles(12)" class="row">
                            <div class="col-8 col-md-8 vertical-center">
                                <p class="sub-titulo">MONTAJE Y DESMONTAJE DE BOMBA SUMERGIBLE,  MANTENIMIENTO Y REHABILITACION DE POZOS TUBULARES <i class="fa fa-caret-down" aria-hidden="true"></i></p>
                            </div>
                            <div class="col-4 col-md-4">
                                <img class="img-responsive" src="img/servicio/MONTAJE-Y-DESMONTAJE-DE-BOMBA-SUMERGIBLE-MANTENIMIENTO-Y-REHABILITACION-DE-POZOS-TUBULARES.png" alt="">
                            </div>
                        </div>
                        <p class="mt-1 animate__animated animate__fadeIn" v-if="item_detalle==12"></p>
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
            item_detalle: 0
        }
    },
    methods: {
        detalles(n){
            if (this.item_detalle==n) {
                this.item_detalle=0;
            }else{
                this.item_detalle=n;
            }
        }
    },
}
</script>