import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import {loadClientFromApi} from "../api/http";
import { supabase } from '../api/supabaseClient';

const ClientDetailsPage = () => {

    const [client, setClient] = useState(null);
    const [invoices, setInvoices] = useState([]);

    const params = useParams();

    const id = +params.id;

    useEffect(() => {
        loadClientFromApi(id)
            .then(apiTask => setClient(apiTask));
        async function fetchInvoices() {
            try {
                // Fetch all invoices for the specified client_id
                const { data, error } = await supabase
                    .from('invoices')
                    .select('*')
                    .eq('client_id', id);

                setInvoices(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchInvoices().then(r => console.log(r));
    }, [id])

    // En fonction du state "task" (null ou pas), on retourne
    // un arbre JSX différent
    return client ?
        <>
            <h2>{client.name}</h2>
            <h3>{client.email}</h3>
            <br />
            <Link to={`/${client.id}/invoices/add`}>Créer une facture</Link>
            <br />
            <div>
                <ul>
                    {invoices.map(invoice => (
                            <li key={invoice.id}>
                                {invoice.price} | {invoice.status}
                            </li>
                        )
                    )
                    }

                </ul>
            </div>
            <Link to="/">Retour </Link>
        </>
        :
        <p>Chargement en cours</p>
}

export default ClientDetailsPage;