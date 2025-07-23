import { useParams } from "react-router";
function UserDashBoard() {

    const { id } = useParams();

    return (

        <div>
            <h1>
                Welcome User #{id}
            </h1>
        </div>
    )
}

export default UserDashBoard;