<script setup>
import Swal from 'sweetalert2'
import estados from '@/_data/estados'
import { user, newLang, newHobbies, mostrarForm, mostrar, mostrarConfirma  } from '@/_data/user'

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
    valido = false
    Swal.fire({
      icon: 'error',
      title: 'Erro de confirmação',
      text: 'Sua CONFIRMAÇÃO de senha esta errada.'
    })
  }

  const regexEmail = /^\S+@\S+\.\S+$/;
      if(!regexEmail.test(user.value.email) && !mensagemErro){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Insira um email valido.',
        });
        mensagemErro = true;
        valido = false;
      }

  if (valido) {
    mostrarForm.value = false
  }
}

function handleFileUpload(e) {
    const target = e.target
    if (target && target.files) {
      const file = target.files[0]
      user.value.avatar = URL.createObjectURL(file)
    }
  }


</script>

<template>
<div class="bg-dark min-vh-100">
  <div v-if="mostrarForm" class="container p-5">
    <div class="form-row">
      <div class="col-sm-4">
        <label for="user.avatar">Foto</label>
        <input type="file"
        id="user.avatarField"
        @change="handleFileUpload($event)"
        />
      </div>
      <div class="col-sm-4">
        <label for="user.nome">Nome:</label>
        <input
    
          type="text"
          v-model="user.nome"
          class="form-control"
          placeholder="Digite seu nome"
        />
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
        
      </div>
      <div class="col-sm-4">
        <label for="user.senha">Senha: </label>
        <div class="input-group">
        <input
          :type="mostrar ? 'text' : 'password'"
          v-model="user.senha"
          class="form-control icon"
          placeholder="Digite sua senha"
        />
        <button @click="mostrar = !mostrar" class="btn btn-dark" >&#128064;</button>
      </div>
      </div>
      <div class="col-sm-4">
        <label for="user.email">Confirmar senha:</label>
        <div class="input-group">
      <input
          :type="mostrarConfirma ? 'text' : 'password'"
          v-model="user.confirma"
          class="form-control "
          placeholder="Confirme sua senha"
        /> 

        <button @click="mostrarConfirma = !mostrarConfirma" class="btn btn-dark ">&#128064;</button>
      </div>
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


  <div class="d-flex justify-content-center " v-else>
   <div class="card text-gold bg-dark shadow-lg border-gold" style="width: 18rem;">
  <img :src="user.avatar" class="rounded-circle " alt="..." >
  <div  class="card-body bg-dark">
    <h5 class="card-title text-gold">{{ user.nome }}</h5>
    <p class="card-text my-0">{{ user.estado.nome }} ({{ user.estado.sigla }}) {{ user.cidade }} </p>
    <p class="card-text">{{ user.endereco }} </p> 
  </div>
  <div>
  <ul class="list-group list-group-flush ">
    <li class="list-group-item text-gold bg-dark text-center border-gold">{{ user.email }}</li>
    <li class="list-group-item text-gold bg-dark text-center border-gold" >{{ user.senha }}</li>
    <li class="list-group-item text-gold bg-dark text-center border-gold">{{ user.data }}</li>
    <li class="list-group-item text-gold bg-dark text-center border-gold" >{{ user.endereco }}</li>
    <li class="list-group-item text-gold bg-dark text-center border-gold">{{ user.cidade }}</li>
    <li class="list-group-item text-gold bg-dark text-center border-gold">{{ user.estado.nome }} ({{ user.estado.sigla }})</li>
    <li class="list-group-item text-gold bg-dark text-center border-gold">{{ user.hobbies.join(", ") }}</li>
    <li class="list-group-item text-gold bg-dark text-center border-gold">{{ user.linguagens.join(", ") }}</li>
  </ul>
  <hr>
  </div>
  <p class="card-text text-center">Biografia: {{ user.biografia }}</p>
  <div class="card-body">
   <button @click="mostrarForm = !mostrarForm" class="btn btn-dark">Editar Informaçoẽs</button>
  </div>
</div>
  </div>
</div>
</template>

<style scoped>
label {
  color: #ce9137;
  font-weight: bold;
  display: block;
}

.btn-dark {
  color: #ce9137;
}

.text-gold{
  color: #ce9137;
}

.border-gold{
  color: #ce9137;
  border-color: #ce9137;
}

img{
  border: 1px solid #ce9137;
}


</style>
