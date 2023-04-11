<script setup>
import Swal from 'sweetalert2'
import estados from '@/_data/estados'
import { user, newLang, newHobbies, mostrarCard, mostrarForm } from '@/_data/user'

function validacao() {
  let mensagemErro = false
  let valido = true
  Object.keys(user.value).forEach((classe) => {
    if (Array.isArray(user.value[classe])) {
      if (user.value[classe].length === 0 && !mensagemErro) {
        Swal.fire({
          icon: 'error',
          title: 'Seu burro',
          text: 'Você não enviou algum hobbie ou linguagem'
        })
        mensagemErro = true
        valido = false
      }
    }
  })

  Object.keys(user.value).forEach((classe) => {
    if (typeof user.value[classe] === 'string') {
      if (user.value[classe] === '' && !mensagemErro) {
        Swal.fire({
          icon: 'error',
          title: 'Seu bobinho',
          text: 'Você esqueceu de preencher algum campo'
        })
        mensagemErro = true
        valido = false
      }
    }
  })

  if (user.value.confirma !== user.value.senha) {
    Swal.fire({
      icon: 'error',
      title: 'Erro de confirmação',
      text: 'Sua CONFIRMAÇÃO de senha esta errada.'
    })
  }

  if (valido) {
    mostrarCard.value = true
    mostrarForm.value = false
  }
}
</script>

<template>
<div class="bg-dark min-vh-100">
  <div v-if="mostrarForm" class="container p-5">
    <div class="form-row">
      <div class="col-sm-4">
        <label for="user.nome">Nome:</label>
        <input
          type="text"
          v-model="user.nome"
          class="form-control"
          placeholder="Digite seu nome"
        />{{ user.nome }}
      </div>
      <div class="col-sm-4">
        <label for="user.email">E-mail:</label>
        <input
          type="text"
          v-model="user.email"
          class="form-control"
          placeholder="Digite seu e-mail"
          required
        />
        <div class="valid-feedback">Validado</div>
        {{ user.email }}
      </div>
      <div class="col-sm-4">
        <label for="user.senha">Senha: </label>
        <input
          type="password"
          v-model="user.senha"
          class="form-control"
          placeholder="Digite sua senha"
        />
        {{ user.senha }}
      </div>
      <div class="col-sm-4">
        <label for="user.email">Confirmar senha:</label>
        <input
          type="password"
          v-model="user.confirma"
          class="form-control"
          placeholder="Confirme sua senha"
        />
        {{ user.confirma }}
      </div>
      <div class="col-sm-4">
        <label for="user.data">Data:</label>
        <input
          type="date"
          v-model="user.data"
          class="form-control"
          placeholder="Data de nascimento"
        />
      </div>
      <div class="col-sm-4">
        <label for="user.endereco">Endereço:</label>
        <input type="text" v-model="user.endereco" class="form-control" placeholder="Endereço" />
        {{ user.endereco }}
      </div>
      <div class="col-sm-4">
        <label for="user.estado">Estado:</label>
        <select class="form-select" v-model="user.estado">
          <option v-for="estado in estados" :key="estado.sigla" :value="estado">
            {{ estado.nome }}
          </option>
        </select>
      </div>
      <div class="col-sm-4">
        <label for="user.cidade">Cidade:</label>
        <select class="form-select" v-model="user.cidade" placeholder="Cidade">
          ]
          <option v-for="cidade in user.estado.cidades" :key="cidade" :value="cidade">
            {{ cidade }}
          </option>
        </select>
      </div>

      <div class="col-sm-4">
        <label for="user.hobbies">Coloque alguns dos seus hobbies:</label>
        <input
          type="text"
          class="form-control"
          v-model="newHobbies"
          @keypress.enter="
            user.hobbies.push(newHobbies);
            newHobbies = ''
          "
          placeholder="Cite alguns Hobbies"
        />
      </div>
      <div class="col-sm-4">
        <label for="user.linguagens">Coloque as linguagens de prog você que sabe:</label>
        <input
          type="text"
          class="form-control"
          v-model="newLang"
          @keypress.enter="
            user.linguagens.push(newLang);
            newLang = ''
          "
          placeholder="Linguagens prog"
        />
        {{ user.linguagens }}
      </div>
      <div class="col-sm-4">
        <label for="user.biografia">Faça a sua biografia:</label>
        <textarea v-model="user.biografia" class="form-control" rows="4"></textarea>
      </div>
      <div></div>
      <button type="submit" @click="validacao" class="btn btn-dark">Enviar</button>
    </div>
  </div>

  <div v-if="mostrarCard">
    {{ user.nome }}
    {{ user.email }}
    {{ user.senha }}
    {{ user.confirma }}
    {{ user.data }}
    {{ user.endereco }}
    {{ user.estado.sigla }}
    {{ user.estado.nome }}
    {{ user.cidade }}
    {{ user.hobbies.join(', ') }}
    {{ user.linguagens.join(', ') }}
    {{ user.biografia }}
  </div>
</div>
</template>

<style scoped>
label {
  color: #b9794d;
  font-weight: bold;
  display: block;
}

.btn-dark {
  color: #b67f5a;
}



</style>
