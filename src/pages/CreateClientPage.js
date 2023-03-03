import React  from "react";
import ClientListPage from "./ClientListPage";
import CreateClientForm from "../components/CreateClientForm";
import {addClientToApi} from "../api/http";

const CreateClientPage = () => {

    // état


    // traitement
    const addNewClient = (name, email) => {
        // Créons une nouvelle tâche avec le text tapé dans l'input
        const client = {
            name: name,
            email: email,
        };
        // Appel HTTP vers Supabase en method POST
        addClientToApi(client).then(() => {
        })
    }

    // affichage
    return <>
        <CreateClientForm onClientAdded = {addNewClient} />
    </>
}
export default CreateClientPage;