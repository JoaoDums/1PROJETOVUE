<script setup>

import { ref, computed } from 'vue'

const nome = ref('')
const email = ref('')
const senha = ref('')
const confirma = ref('')
const data = ref('')
const endereco = ref('')
const cidade = ref('')
const estado = ref([])
const hobbies = ref('')
const linguagens = ref('')
const biografia = ref('')



</script>

<template>

<div class="container-lg">
  <div><input type="text" v-model="nome" placeholder="Digite seu nome" />{{ nome }}</div>
  <div><input type="text" v-model="email" placeholder="Digite seu e-mail" />{{ email }}</div>
  <div><input type="password" v-model="senha" placeholder="Digite sua senha"/> {{ senha }}</div>
  <div><input type="password" v-model="confirma" placeholder="Confirme sua senha"/> {{ confirma }}</div>
  <div><input type="number" v-model="data" placeholder="Data de nascimento"/> {{ data }}</div>
  <div><input type="text" v-model="endereco" placeholder="Endereço"/> {{ endereco }}</div>
  <div><input type="text" v-model="cidade" placeholder="Cidade"/> {{ cidade }} </div>
  <div><input type="select" v-model="estado" placeholder="Qual seu estado?"/> Estados:
  <select v-model="estado" multiple>
    <option value="AC">AC</option>
    <option value="AL">AL</option>
    <option value="AP">AP</option>
    <option value="AC">AM</option>
    <option value="AL">BA</option>
    <option value="AP">CE</option>
    <option value="AC">DF</option>
    <option value="AL">ES</option>
    <option value="AP">GO</option>
    <option value="AC">MA</option>
    <option value="AL">MT</option>
    <option value="AP">MS</option>
    <option value="AC">MG</option>
    <option value="AL">PA</option>
    <option value="AP">PB</option>
    <option value="AC">PR</option>
    <option value="AL">PE</option>
    <option value="AP">PI</option>
    <option value="AC">RJ</option>
    <option value="AL">RN</option>
    <option value="AP">RS</option>
    <option value="AC">RO</option>
    <option value="AL">RR</option>
    <option value="AP">SC</option>
    <option value="AC">SP</option>
    <option value="AL">SE</option>
    <option value="AP">TO</option>
  </select>
 </div>
 <div>
  <h3>Site alguns hobbies</h3>
  <textarea v-model="hobbies"/>
  {{ hobbies }}
  </div>
  <div><input type="text" v-model="linguagens" placeholder="Linguagens prog"/> {{ linguagens }}</div>
  <div><h3>Faça uma autobiografia</h3>
  <textarea v-model="biografia"/>
  {{ biografia }}</div>

</div>



</template>

<style scoped>

</style>
