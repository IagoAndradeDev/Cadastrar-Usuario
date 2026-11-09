import { useRef, useEffect, useState } from 'react'
import '../Users/styles.css'
import api from '../../services/api'
import Button from '../../components/Button'
import Imagem from '../../components/Imagem'
import { useNavigate } from 'react-router'

import Trash from '../../assets/trash.svg'

function Users() {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])

    useEffect(() => {

        async function getUsers(){
            const data = await api.get('usuarios')
            setUsers(data.data.resultado)
        }

    getUsers()
    }, [])

   
    async function deleteUser(id){
        await api.delete('usuarios', {
            data:{
                id: id
            }
        })
        
        const updatedUser = users.filter(user => user.id !== id)
        setUsers(updatedUser)
    }
   


    return (
        <div className="bg-[#10141E] w-100 h-150 rounded-md flex flex-col items-center gap-2.5">
            <Imagem></Imagem>

            <div className="w-full flex flex-col gap-1.5 p-[20px] flex-1 min-h-0">
                <h1 className="font-semibold text-white">Lista de Usuarios</h1>

                <div className="w-full flex flex-col gap-2 overflow-y-auto flex-1 min-h-0 pr-2 scroll-custom">
                    {users.map((user) => (
                        <div key={user.id} className="w-full min-h-10 shrink-0 flex justify-between items-center p-[10px] gap-[25px] bg-[#353536] rounded-[8px]">
                            <img className="h-14 rounded-[8px]" src={`https://api.dicebear.com/10.x/bottts-neutral/svg?textureProbability=0&seed=${user.id}`} />

                            <div className="w-full flex flex-col gap-0.5">
                                <p className="text-[14px] text-[#ffffff] font-bold">{user.name}</p>
                                <p className="text-[12px] text-[#0e5ed6]">{user.idade}</p>
                                <p className="text-[12px] text-[#ffffffa1]">{user.email}</p>
                            </div>

                            <img className="h-6 hover:cursor-pointer hover:opacity-80 active:opacity-50" src={Trash} onClick={() => deleteUser(user.id)} />
                        </div>
                    ))}
                </div>

                <Button onClick={() => navigate('/')} thema="bn-option1">Voltar</Button>
            </div>
        </div>

    )
}

export default Users