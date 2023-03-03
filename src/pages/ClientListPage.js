// src/pages/ClientListPage.js

import React, {useEffect, useState} from "react";
import ClientList from "../components/ClientList";
import CreateClientForm from "../components/CreateClientForm";
import {addClientToApi, loadClientsFromApi} from "../api/http";

const ClientListPage = () => {
    // état
    const [clients, setClients] = useState([]);
    useEffect(() => {
        loadClientsFromApi().then((items) => {
            console.log("ITEMS:", items)
            // On remplace la valeur actuel de state
            // par le tableau d'items venant de l'API
            setClients(items);
        });
    }, []);

    // traitement


    // affichage
    return <>
        <ClientList clients={clients}/>
    </>
}

export default ClientListPage;