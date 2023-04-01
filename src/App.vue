<script setup>

import { ref, } from 'vue'
import estados from '@/_data/estados'

const user = ref({
  nome: '',
  email: '',
  senha: '',
  confirma: '',
  data: 0,
  endereco: '',
  cidade: '',
  estado: '',
  hobbies: '',
  linguagens: ([]),
  biografia: '',
})
const newLang = ref('')

</script>

<template>
  <div class="container-fluid">
  <form>
    <div class="form-row">
      <div class="col-sm-4">
        <input type="text" v-model="user.name" class="form-control" placeholder="Digite seu nome" />{{
          user.name }}
      </div>
      <div class="col-sm-4">
        <input type="text" v-model="user.email" class="form-control" placeholder="Digite seu e-mail" />{{
          user.email }}
      </div>
      <div class="col-sm-4">
        <input type="password" v-model="user.senha" class="form-control" placeholder="Digite sua senha" />  
        {{ user.senha }}
      </div>
      <div class="col-sm-4">
        <input type="password" v-model="user.confirma" class="form-control" placeholder="Confirme sua senha" /> 
       {{ user.confirma }}
      </div>
      <div class="col-sm-4">
        <input type="datetime-local" v-model="user.data" class="form-control"  placeholder="Data de nascimento" />
         </div>
        <div class="col-sm-4">
          <input type="text" v-model="user.endereco" class="form-control" placeholder="Endereço" /> {{
          user.endereco }}
          </div>
        <div class="col-sm-4">
          <input type="text" v-model="user.cidade" class="form-control" placeholder="Cidade" /> 
          {{ user.cidade }} 
        </div>
        <div> Estados:
          <select class="form-select " v-model="estado">
            <option v-for="estado of estados" :key="estado.sigla" :value="estado.sigla">{{ estado.nome }}</option>
          </select>
        </div>
        <div>
          <h3>Site alguns hobbies</h3>
          <textarea v-model="user.hobbies" />
          {{ user.hobbies }}
        </div>
        <div>
          <input type="text" v-model="newLang" @keypress.enter="user.linguagens.push(newLang); newLang = ''"
            placeholder="Linguagens prog" />
          {{ user.linguagens }}
        </div>
        <div>
          <h3>Faça uma autobiografia</h3>
          <textarea v-model="user.biografia" />
          {{ user.biografia }}
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>
