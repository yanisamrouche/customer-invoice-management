import React from "react";
import {Link} from "react-router-dom";

const ClientList = ({ clients }) => {

    console.log(clients)

    // Affichage
    return <>
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                        <h1  className="text-center my-4">Liste des clients</h1> 
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                <Link id="create-client-btn" className="btn btn-outline-dark" to={"/create"}>Créer un client</Link>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center" >
                    
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
                                    <td><Link className="badge badge-dark badge-pill" to={"/"+client.id}>{client.fullName}</Link> </td>
                                    <td><Link className="badge badge-dark badge-pill" to={"/"+client.id}>{client.email}</Link></td>
                                    <td><Link className="badge badge-dark badge-pill" to={"/"+client.id}>Détails</Link></td>
                                </tr>
                                )
                            )
                            }
                            </tbody>
                        </table>
                </div>
            </div>
        </div>
    </>
}

export default ClientList;