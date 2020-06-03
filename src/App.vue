<template>
    <div id="app">
      <div class="gota animate__animated animate__fadeInDown">
        <img src="gota.png">
        <div class="gota-content">
            <h5 class="text-center">Contactanos</h5>
            <br>
            <div class="row">
                <div class="col-3">
                    <label for="">Nombres:</label>
                </div>
                <div class="col-9">
                    <input type="text" class="form-gota">
                </div>
                <div class="col-3">
                    <label for="">Apellidos:</label>
                </div>
                <div class="col-9">
                    <input type="text" class="form-gota">
                </div>
                <div class="col-3">
                    <label for="">Celular:</label>
                </div>
                <div class="col-9">
                    <input type="text" class="form-gota">
                </div>
                <div class="col-3">
                    <label for="">Correo:</label>
                </div>
                <div class="col-9">
                    <input type="text" class="form-gota">
                </div>
                <div class="col-3">
                    <label for="">lugar:</label>
                </div>
                <div class="col-9 mb-1">
                    <textarea type="text" class="form-gota" rows="3"></textarea>
                </div>
                <div class="col-12 text-center">
                    <button class="btn btn-margin">Enviar</button>
                </div>
            </div>
        </div>
      </div>
      <nav class="nav-lg">
        <div class="container">
            <button @click="abrir()" class="btn-toggler">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
            <a class="brand">
                <img src="logo.png" alt="">
            </a>
            <div class="toggler" :class=" status_var ? 'open':'' ">
              <a class="toggler-close" @click="abrir()">
                X
              </a>
              <div class="toggler-content">
                <router-link class="nav-link" :to="{ name: 'home'}" v-on:click.native="abrir()">Inicio</router-link>
                <router-link class="nav-link" to="nosotros" v-on:click.native="abrir()">Nosotros</router-link>
                <router-link class="nav-link" to="servicio" v-on:click.native="abrir()">Servicio</router-link>
                <router-link class="nav-link" to="procesos" v-on:click.native="abrir()">Procesos</router-link>
                <router-link class="nav-link" to="clientes" v-on:click.native="abrir()">Clientes</router-link>
              </div>
            </div>
        </div>
      </nav>
      <router-view></router-view>
      <div class="bg-gota">
        <div class="container">
          <div class="row">
            <div class="col-sm-2">

            </div>
            <div class="col-sm-8">
              <h4 class="text-center">Contactanos</h4>
              <br>
              <div class="row">
                <div class="col-3">
                    <label for="">Nombres:</label>
                </div>
                <div class="col-9">
                    <input type="text" class="form-gota">
                </div>
                <div class="col-3">
                    <label for="">Apellidos:</label>
                </div>
                <div class="col-9">
                    <input type="text" class="form-gota">
                </div>
                <div class="col-3">
                    <label for="">Celular:</label>
                </div>
                <div class="col-9">
                    <input type="text" class="form-gota">
                </div>
                <div class="col-3">
                    <label for="">Correo:</label>
                </div>
                <div class="col-9">
                    <input type="text" class="form-gota">
                </div>
                <div class="col-3">
                    <label for="">lugar:</label>
                </div>
                <div class="col-9 mb-1">
                    <textarea type="text" class="form-gota" rows="3"></textarea>
                </div>
                <div class="col-12 text-center">
                    <button class="btn btn-margin">Enviar</button>
                </div>
              </div>
            </div>
          </div>
        </div>     
      </div>
      <div class="bg-blue footer">
        <div class="container">
          <img src="logo-blanco.png" class="mb-3" alt="" height="45px">
          <div class="row">
            <div class="col-lg-1">
            </div>
            <div class="col-lg-11">
              <div class="row">
                <div class="col-sm-6 col-lg-5 mb-3">
                  <p class="text-blue2"><b>Dirección</b></p>
                  <p>Calle Atahualpa N° 1041</p> 
                  <p>La Esperanza - Reque</p>
                </div>
                <div class="col-sm-6 col-lg-5  mb-3">
                  <p class="text-blue2"><b>Escribenos</b></p>
                  <p>informes@perhinor.com</p> 
                  <p>perforacionesdelnorte@outlook.com</p>
                </div>
                <div class="col-sm-6 col-lg-5  mb-3">
                  <p class="text-blue2"><b>Llámanos</b></p>
                  <p>Oficina: 074 - 634 357</p>
                  <p>Móvil: 969 963 778 - 953 124 022 - 978 438 882</p> 
                </div>
              </div>
            </div>
            <!-- <div class="col-lg-1">
            </div> -->
            <div class="col-lg-1">
            </div>
            <div class="col-lg-10">
              <hr class="mb-3">
              <div class="row">
                <div class="col-sm-6">
                  <p>© 2020 All rights reserved</p> 
                </div>
                <div class="col-sm-6 text-right">
                  <p class="text-amarillo">Design: Look At Me - Studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="social">
        <a target="_blank" rel="noopener noreferrer" class="bg-facebook" href="https://www.facebook.com/PERHINOR"><i class="fa fa-facebook" aria-hidden="true"></i></a>
        <a target="_blank" rel="noopener noreferrer" class="bg-instagram" href="https://www.instagram.com/perhinor01/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        <a target="_blank" rel="noopener noreferrer" class="bg-youtube" href=""><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
      </div>
    </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      status_var: false
    }
  },
  methods: {
    abrir(){
      if (this.status_var) {
        this.status_var= false;  
      }else{
        this.status_var= true;  
      }
    }
  },

}
</script>
