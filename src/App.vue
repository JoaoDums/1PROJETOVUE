<script setup>
import estados from '@/_data/estados'
import { user, newLang, newHobbies } from '@/_data/user'
</script>

<template>
  <body>
    <div class="container p-5">
      <form @submit.prevent="">
        <div class="form-row">
          <div class="col-sm-4">
            <label for="user.name">Nome:</label>
            <input type="text" v-model="user.name" class="form-control" placeholder="Digite seu nome" />{{
              user.name }}
          </div>
          <div class="col-sm-4">
            <label for="user.email">E-mail:</label>
            <input type="text" v-model="user.email" class="form-control" placeholder="Digite seu e-mail" required />
            <div class="valid-feedback"> Validado </div>{{
              user.email }}
          </div>
          <div class="col-sm-4">
            <label for="user.senha">Senha: </label>
            <input type="password" v-model="user.senha" class="form-control" placeholder="Digite sua senha" />
            {{ user.senha }}
          </div>
          <div class="col-sm-4">
            <label for="user.email">Confirmar senha:</label>
            <input type="password" v-model="user.confirma" class="form-control" placeholder="Confirme sua senha" />
            {{ user.confirma }}
          </div>
          <div class="col-sm-4">
            <label for="user.data">Data:</label>
            <input type="date" v-model="user.data" class="form-control" placeholder="Data de nascimento" />
          </div>
          <div class="col-sm-4">
            <label for="user.endereco">Endereço:</label>
            <input type="text" v-model="user.endereco" class="form-control" placeholder="Endereço" /> {{
              user.endereco }}
          </div>
          <div class="col-sm-4">
            <label for="user.estado">Estado:</label>
            <select class="form-select " v-model="user.estado">
              <option v-for="estado in estados" :key="estado.sigla" :value="estado"> {{ estado.nome }} </option>
            </select>
          </div>
          <div class="col-sm-4">
            <label for="user.cidade">Cidade:</label>
            <select class="form-select" v-model="user.cidade" placeholder="Cidade"> ]
              <option v-for="cidade in user.estado.cidades" :key="cidade" :value="cidade"> {{ cidade }} </option>
            </select>          
          </div>

          <div class="col-sm-4">
            <label for="user.hobbies">Coloque alguns dos seus hobbies:</label>
            <input type="text" class="form-control" v-model="newHobbies"
              @keypress.enter="user.hobbies.push(newHobbies); newHobbies = ''" placeholder="Cite alguns Hobbies" />
          </div>
          <div class="col-sm-4">
            <label for="user.linguagens">Coloque as linguagens de prog você que sabe:</label>
            <input type="text" class="form-control" v-model="newLang"
              @keypress.enter="user.linguagens.push(newLang); newLang = ''" placeholder="Linguagens prog" />
            {{ user.linguagens }}
          </div>
          <div class="form-outline mb-4">
            <label for="user.biografia">Faça a sua biografia:</label>
            <textarea class="form-control" rows="4" placeholder="Faça sua biografia aqui"> </textarea>
          </div>
          <div></div>
          <button type="submit" class="btn btn-dark">Enviar</button>
          
        </div>
      </form>
    </div>
  </body>
</template>

<style scoped>
label {
  color: #b9794d;
  font-weight: bold;
  display: block;

}

body {
  background-color: #003840;
  height: 100vh;
}

.btn-dark {
  color: #b67f5a;
}
</style>
