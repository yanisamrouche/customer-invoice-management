import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import {loadClientFromApi, loadInvoicesFromApi} from "../api/http";

const ClientDetailsPage = () => {

    const [client, setClient] = useState(null);
    const [invoices, setInvoices] = useState([]);

    const params = useParams();

    const id = +params.id;

    useEffect(() => {
        loadClientFromApi(id)
            .then(apiTask => setClient(apiTask));
        loadInvoicesFromApi(id)
            .then((items) => {
            setInvoices(items);
        
        })
    }, [id])

    // En fonction du state "task" (null ou pas), on retourne
    // un arbre JSX différent
    return client ?
        <>
         <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                    <h2 className="text-center my-4">{client.fullName} </h2>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                <h3 className="text-center my-4">{client.email}</h3>

                </div>

            </div>
            <div className="row">
              <div className="col d-flex justify-content-center align-items-center">
                      <Link  className="btn btn-outline-secondary" to="/">Retour aux clients</Link>
                      <Link id="client-register"  className="btn btn-outline-primary" to={`/${client.id}/invoices/add`}>Créer une facture</Link>
                </div>
            </div>
   
            <div className="row" >
            <table>
                <thead>
                <tr>
                    <td>Prix</td>
                    <td>Status</td>
                </tr>
                </thead>
                <tbody>

                {invoices.map(invoice => (
                        <tr key={invoice.id}>
                                <td><Link className="badge badge-dark badge-pill">{invoice.price} €</Link></td> 
                                <td><Link className="badge badge-dark badge-pill">{invoice.status}</Link></td>
                        </tr>
                    )
                )
                }
                </tbody>
            </table>
            </div>
         </div>
        </>
        :
        <p>Chargement en cours</p>
}

export default ClientDetailsPage;