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
         <div className="jumbotron">
            <h2 className="text-center my-4">{client.fullName}</h2>
            <h3 className="text-center my-4">{client.email}</h3>
            <br />
            <Link className="btn btn-outline-primary" to={`/${client.id}/invoices/add`}>Créer une facture</Link>
            <br />
            
            <table>
                <tr>
                    <td>Prix</td>
                    <td>Status</td>
                </tr>
                {invoices.map(invoice => 
                    (
                        <tr key={invoice.id}>
                                <td> {invoice.price} € </td> 
                                <td> {invoice.status} </td>
                        </tr>
                    )
                )
                }
            </table>
            
            <Link className="btn btn-outline-secondary" to="/">Retour </Link>
         </div>
        </>
        :
        <p>Chargement en cours</p>
}

export default ClientDetailsPage;