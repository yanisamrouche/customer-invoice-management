import React from "react";
import {Link} from "react-router-dom";

const ClientList = ({ clients }) => {

    console.log(clients)

    // Affichage
    return <>
        <h1>Liste des clients</h1>
        <Link to={"/create"}>Créer un client</Link>
        <ul>
            {clients.map(item => (
                <li key={item.id}>
                    {item.name} | {item.email}
                    <Link to={item.id + "/details"}>Details</Link>
                </li>
                )
            )
            }

        </ul>
    </>
}

export default ClientList;