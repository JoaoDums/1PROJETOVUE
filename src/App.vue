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

// PRIMEIRA VERSÃO MANDITA PARA ESTUDOS--
//const nome = ref('')
//const email = ref('')
//const senha = ref('')
//const confirma = ref('')
// const data = ref('')
//const endereco = ref('')
//const cidade = ref('')
//const estado = ref([])
//const hobbies = ref('')
//const linguagens = ref('')
//const biografia = ref('')


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

            <!-- PRIMEIRA VERSÃO MANDITA PARA ESTUDOS-- 
                <option value="AC">Acre</option>
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
