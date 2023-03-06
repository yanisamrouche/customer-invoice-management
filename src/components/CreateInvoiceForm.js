import React , { useState } from "react";
import {Link} from "react-router-dom";

const CreateInvoiceForm = (props) => {
    // état
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState('');

    // traitement
    const handleSubmit = (event) => {
        // Annulons le comportement par défaut de l'événement
        // qui serait de recharger la page
        event.preventDefault();
        console.log(price, status)
        props.onInvoiceAdded(price, status)
        setPrice('')

    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    }
    const handleStatusChange = (event) => {
        setStatus(event.target.value)
    }
    // Affichage
    return <>
        <h3> Créer une facture </h3>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="fullName"
                placeholder="Montant de la facture"
                value={price}
                onChange={handlePriceChange}
            />
            <select name="invoices" id="invoices" onChange={handleStatusChange}  autoFocus={true}>
                <option value={status}>Envoyée</option>
                <option value={status}>Payée</option>
            </select>
            <button>Enregistrer la facture</button>
        </form>
    </>
}

export default CreateInvoiceForm;