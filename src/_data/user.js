import { ref } from 'vue'

export const user = ref({
  avatar: null,
  nome: '',
  email: '',
  senha: '',
  confirma: '',
  data: '',
  endereco: '',
  cidade: '',
  estado: '',
  hobbies: [],
  linguagens: [],
  biografia: ''
})

export const mostrar = ref(false)
export const mostrarConfirma = ref(false)
export const newLang = ref('')
export const newHobbies = ref('')
export const mostrarForm = ref(true)
