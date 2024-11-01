import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const navigate = useNavigate();


    const{name, website} = user;
    const handleGoBack = () =>{
        navigate(-1)
    }

    return (
        <div>
            <h2>Details about users: {name}</h2>
            <p>Visit us: {website}</p>
            <button onClick={handleGoBack}>Back</button>
        </div>
    );
};

export default UserDetails;