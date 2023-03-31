<script setup>

import { ref, computed } from 'vue'
import estados from '@/_data/estados'

// transformar tudo isso em user e colocar o valor no user 


const user = ref({
  nome: '',
  email: '',
  senha: '',
  confirma: '',
  data: 0,
  endereco: '',
  cidade: '',
  cidade: '',
  estado: '',
  hobbies: '',
  linguagens: [],
  biografia:'',
})
const newLang = ref('')
//const nome = ref('')
//const email = ref('')
//const senha = ref('')
//const confirma = ref('')
const data = ref('')
//const endereco = ref('')
//const cidade = ref('')
const estado = ref([])
//const hobbies = ref('')
//const linguagens = ref('')
//const biografia = ref('')



</script>

<template>
  <div class="container-lg">
    <div><input type="text" v-model="user.name" placeholder="Digite seu nome" />{{ user.name }}</div>
    <div><input type="text" v-model="email" placeholder="Digite seu e-mail" />{{ email }}</div>
    <div><input type="password" v-model="senha" placeholder="Digite sua senha" /> {{ senha }}</div>
    <div><input type="password" v-model="confirma" placeholder="Confirme sua senha" /> {{ confirma }}</div>
    <div><input type="datetime-local" v-model="data" placeholder="Data de nascimento" /> {{ data }}</div>
    <div><input type="text" v-model="endereco" placeholder="Endereço" /> {{ endereco }}</div>
    <div><input type="text" v-model="cidade" placeholder="Cidade" /> {{ cidade }} </div>
    <div><input type="select" v-model="estado" placeholder="Qual seu estado?" /> Estados:
      <select v-model="estado">
        <option v-for="estado of estados" :key="estado.sigla" :value="estado.sigla">{{ estado.nome }}</option>
        <!-- <option value="AC">Acre</option>
        <option value="AL">Alagoas</option>
        <option value="AP">Amapá</option>
        <option value="AM">Amazonas</option>
        <option value="BA">Bahia</option>
        <option value="CE">Ceara</option>
        <option value="DF">Distrito Federal</option>
        <option value="ES">Espirito Santo</option>
        <option value="GO">Goias</option>
        <option value="MA">Maranhão</option>
        <option value="Mato Grosso">MT</option>
        <option value="Mato Grosso do Sul">MS</option>
        <option value="Minas Gerais">MG</option>
        <option value="Pará">PA</option>
        <option value="Paraíba">PB</option>
        <option value="Paraná">PR</option>
        <option value="Pernambuco">PE</option>
        <option value="Piauí">PI</option>
        <option value="Rio de Janeiro">RJ</option>
        <option value="Rio Grande do Norte">RN</option>
        <option value="Rio Grande do Sul">RS</option>
        <option value="Rondonia">RO</option>
        <option value="Roraima">RR</option>
        <option value="Santa Catarina">SC</option>
        <option value="São Paulo">SP</option>
        <option value="Sergipe">SE</option>
        <option value="Tocantins">TO</option> -->
      </select>
    </div>
    <div>
      <h3>Site alguns hobbies</h3>
      <textarea v-model="hobbies" />
      {{ hobbies }}
    </div>
    <div>
      <input type="text" v-model="newLang" @keypress.enter="user.linguagens.push(newLang); newLang=''" placeholder="Linguagens prog" /> 
      {{ user.linguagens }}
    </div>
    <div>
      <h3>Faça uma autobiografia</h3>
      <textarea v-model="biografia" />
      {{ biografia }}
    </div>

  </div>
</template>

<style scoped></style>
