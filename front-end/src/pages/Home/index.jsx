import { useRef } from 'react'
import '../Home/styles.css'
import Users from "../../assets/users.png"
import api from '../../services/api'
import Button from '../../components/Button'
import Imagem from '../../components/Imagem'
import { useNavigate } from 'react-router'



function Home() {
  const inputNome = useRef()
  const inputIdade = useRef()
  const inputEmail = useRef()
  const navigate = useNavigate()
  
  async function newRegister(){
    if (inputNome.current.value == '' || inputIdade.current.value == '' || inputEmail.current.value == '') {
      alert('Preencha as informações antes de prosseguir!')
      return
    }
    
    const data = await api.post("/usuarios", {
      name: inputNome.current.value,
      idade: parseInt(inputIdade.current.value),
      email: inputEmail.current.value
    })

    navigate('/users')
  }

  return (
    <div className="bg-[#10141E] w-100 h-150 rounded-md flex flex-col justify-evenly items-center gap-2.5">
        <h1 className="font-semibold text-white">Cadastrar Usuarios</h1>
        <Imagem></Imagem>
      <form className="flex flex-col justify-center items-center gap-1.25">
        <div className="flex gap-2.5">
          <div className="h-20 flex flex-col ">
            <label className="text-[15px] text-[#b6b4b4] font-semibold">Nome<span className="text-[#ff0000]"> *</span></label>
            <input ref={inputNome} type="text" placeholder="Nome do usuario" className="bg-[#1C2029] rounded-sm text-[14px] text-[#707A82] pl-1.25 h-10 focus-within:outline-2 focus-within:outline-indigo-600 "/>
          </div>
          <div className="h-20 flex flex-col">
            <label className="text-[15px] text-[#b6b4b4] font-semibold">Idade<span className="text-[#ff0000]"> *</span></label>
            <input ref={inputIdade} type="number" placeholder="Idade do usuario" className="bg-[#1C2029] rounded-sm text-[14px] text-[#707A82] pl-1.25 h-10 focus-within:outline-2 focus-within:outline-indigo-600"/>
          </div>
        </div>
          <div className="w-full h-20 flex flex-col">
            <label className="text-[15px] text-[#b6b4b4] font-semibold">Email<span className="text-[#ff0000]"> *</span></label>
            <input ref={inputEmail} type="email" placeholder='Email do usuario' className="bg-[#1C2029] rounded-sm text-[14px] text-[#707A82] pl-1.25 h-10 focus-within:outline-2 focus-within:outline-indigo-600"/>
          </div>
          <Button onClick={newRegister} thema="bn-option1">Cadastrar Usuario</Button>
          <Button onClick={() => navigate('/users')}>Ver Lista de Usuarios</Button>
      </form>

    </div>
  )
}

export default Home
