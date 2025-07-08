import { Link } from 'react-router-dom'


function NavBar(){
    return(

        <div>


            <div className="flex justify-between w-full items-center py-2 bg-gray-100">
            <div className="flex gap-[1.2rem]">

                <div>
                    <Link className="" to="#">Home</Link>
                </div>

                <div>
                    <Link className="" to="#">Contact</Link>
                </div>

                <div>
                    <Link className="" to="#">About</Link>
                </div>

                <div>
                    <Link className="" to="#">About</Link>
                </div>


            </div>

            <div className="flex gap-[1.2rem]">

            <div>
                <Link className="" to="/sign-in">Sign In</Link>
            </div>

            <div>
                <Link className="" to="/select-role">Sign Up</Link>
            </div>

            


            </div>
        </div>
        </div>
    )
}

export default NavBar;