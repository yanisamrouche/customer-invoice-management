import React , { useState } from "react";
import Select from "react-select";
import {Link, useParams} from "react-router-dom";

const CreateInvoiceForm = (props) => {
    // état
    const [price, setPrice] = useState('');
    const options = [
        { value: "Envoyée", label: "Envoyée" },
        { value: "Payée", label: "Payée" },
    ];
    const [selected, setSelected] = useState(null);
    const params = useParams();

    const id = +params.id;
    // traitement
    const handleSubmit = (event) => {
        // Annulons le comportement par défaut de l'événement
        // qui serait de recharger la page
        event.preventDefault();
        console.log("==>",price, selected.value)
        props.onInvoiceAdded(price, selected.value, id)
        setPrice('')

    }
    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    }
    const handleChange = (selectedOption) => {
        setSelected(selectedOption);
        console.log(`Option selected:`, selectedOption);
    };
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
            <Select options={options} onChange={handleChange} autoFocus={true} />
            <button>Enregistrer la facture</button>
        </form>
    </>
}

export default CreateInvoiceForm;