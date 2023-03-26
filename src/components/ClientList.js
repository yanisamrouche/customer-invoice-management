import React from "react";
import {Link} from "react-router-dom";

const ClientList = ({ clients }) => {

    console.log(clients)

    // Affichage
    return <>
        <div className="jumbotron">
            <h1  className="text-center my-4">Liste des clients</h1>
            <Link className="btn btn-outline-dark" to={"/create"}>Créer un client</Link>
        
            <table>
                <thead>
                <tr>
                    <td>Nom</td>
                    <td>Email</td>
                    <td>Détails</td>
                </tr>
                </thead>
                <tbody>

                {
                clients.map(client => (
                    <tr key={client.id}>
                        <td><Link className="badge badge-dark badge-pill" to={client.id + "/details"}>{client.fullName}</Link> </td>
                        <td><Link className="badge badge-dark badge-pill" to={client.id + "/details"}>{client.email}</Link></td>
                        <td><Link className="badge badge-dark badge-pill" to={client.id + "/details"}>Détails</Link></td>
                    </tr>
                    )
                )
                }
                </tbody>
            </table>
        </div>
    </>
}

export default ClientList;