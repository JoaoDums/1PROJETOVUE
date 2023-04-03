<script setup>
import estados from '@/_data/estados'
import { user, newLang, newHobbies } from '@/_data/user'
</script>

<template>
  <div class="container p-5">
    <form @submit.prevent="">
      <div class="form-row">
        <div class="col-sm-4">
          <input type="text" v-model="user.name" class="form-control" placeholder="Digite seu nome" />{{
            user.name }}
        </div>
        <div class="col-sm-4">
          
          <input type="text" v-model="user.email" class="form-control" placeholder="Digite seu e-mail" required />
          <div class="valid-feedback"> Validado </div>{{
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
          <input type="datetime-local" v-model="user.data" class="form-control" placeholder="Data de nascimento" />
        </div>
        <div class="col-sm-4">
          <input type="text" v-model="user.endereco" class="form-control" placeholder="Endereço" /> {{
            user.endereco }}
        </div>
        <div class="col-sm-4">
          <input type="text" v-model="user.cidade" class="form-control" placeholder="Cidade" />
          {{ user.cidade }}
        </div>
        <div class="col-sm-4">
          <select class="form-select " v-model="user.estado">
            <option v-for="estado in estados" :key="estado.sigla" :value="estado.sigla">{{ estado.nome }}</option>
          </select>
        </div>
        <div class="col-sm-4">
          <input type="text" class="form-control" v-model="newHobbies"
            @keypress.enter="user.hobbies.push(newHobbies); newHobbies = ''" placeholder="Cite alguns Hobbies" />
        </div>
        <div class="col-sm-4">
          <input type="text" class="form-control" v-model="newLang"
            @keypress.enter="user.linguagens.push(newLang); newLang = ''" placeholder="Linguagens prog" />
          {{ user.linguagens }}
        </div>
        <div class="form-outline mb-4">
          <h5>Faça aqui a sua biografia</h5>
          <textarea class="form-control" rows="4" placeholder="Faça sua biografia aqui"> </textarea>
        </div>
      </div>
    </form>
  </div>



  
</template>

<style scoped></style>
