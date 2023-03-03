import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import { loadClientFromApi } from "../api/http";

const ClientDetailsPage = () => {

    const [client, setClient] = useState(null);

    const params = useParams();

    const id = +params.id;

    useEffect(() => {
        loadClientFromApi(id)
            .then(apiTask => setClient(apiTask));
    }, [id])

    // En fonction du state "task" (null ou pas), on retourne
    // un arbre JSX différent
    return client ?
        <>
            <h2>{client.name}</h2>
            <h3>{client.email}</h3>
            <br />
            <Link to="/">Retour </Link>
        </>
        :
        <p>Chargement en cours</p>
}

export default ClientDetailsPage;