import React  from "react";
import CreateClientForm from "../components/CreateClientForm";
import {addClientToApi} from "../api/http";
import { useNavigate } from "react-router-dom"
const CreateClientPage = (props) => {

    // état
    const navigate = useNavigate() // useHistory

    // traitement
    const addNewClient = (name, email) => {
        const client = {
            fullName: name,
            email: email,
        };
        // Appel HTTP vers Supabase en method POST
        addClientToApi(client).then(() => {
            navigate('/')
        })
    }

    // affichage
    return <>
        <CreateClientForm onClientAdded = {addNewClient} />
    </>
}
export default CreateClientPage;