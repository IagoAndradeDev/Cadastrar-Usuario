import "./styles.css"
import Users from "../../assets/users.png"


function Imagem(){

    return (
        <div className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md m-4">
            <img className="" src={Users} alt='imagem-users'/>
        </div>
    )
}

export default Imagem