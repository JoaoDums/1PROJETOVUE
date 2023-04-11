import { ref } from 'vue'

export const user = ref({
    nome: '',
    email: '',
    senha: '',
    confirma: '',
    data: '',
    endereco: '',
    cidade: '',
    estado: '',
    hobbies: ([]),
    linguagens: ([]),
    biografia: '',
  })

  export const newLang = ref('')
  export const newHobbies = ref('')
  export const mostrarCard = ref(false)
export const mostrarForm = ref(true)
 
