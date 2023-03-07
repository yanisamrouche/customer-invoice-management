import React from "react";
import {Link} from "react-router-dom";

const ClientList = ({ clients }) => {

    console.log(clients)

    // Affichage
    return <>
        <div className="jumbotron">
            <h1  className="text-center my-4">Liste des clients</h1>
            <Link className="btn btn-outline-primary" to={"/create"}>Créer un client</Link>
        
            <ul className="list-group">
                {
                clients.map(client => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={client.id}>
                        <span>{client.name}</span>
                        <span>{client.email}</span>
                        <Link className="badge badge-primary badge-pill" to={client.id + "/details"}>Détails</Link>
                    </li>
                    )
                )
                }
            </ul>
        </div>
    </>
}

export default ClientList;