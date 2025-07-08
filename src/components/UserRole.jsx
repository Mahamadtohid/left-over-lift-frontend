import {useNavigate} from 'react-router-dom'


function UserRole(){
    const navigate = useNavigate()

    function handleRole(role){

        navigate(`/sign-up/${role}`)

    }

    return (
        <div className="w-full h-screen bg-gray-200 flex justify-around items-center">

            <div>
                <button 
                 
                 onClick={() => handleRole("business")}
                
                className="bg-green-300 border-[1px] py-[1rem] px-[0.5rem] rounded-full" 
                >Business Account</button>
            </div>


            <div>
                <button 
                onClick={() => handleRole("consumer")}
                
                className="bg-green-300 border-[1px] py-[1rem] px-[0.5rem] rounded-full" 
                >Consumer Account</button>
            </div>

        </div>
    )
}

export default UserRole;