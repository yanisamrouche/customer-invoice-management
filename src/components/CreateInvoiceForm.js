import React , { useState } from "react";
import Select from "react-select";
import {Link, useParams, useNavigate} from "react-router-dom";

const CreateInvoiceForm = (props) => {
    // état
    const [price, setPrice] = useState('');
    const options = [
        { value: "PAID", label: "Payée" },
        { value: "SEND", label: "Envoyée" },
    ];
    const [selected, setSelected] = useState(null);

    const params = useParams();

    const id = +params.id;
    // traitement
    const handleSubmit = (event) => {
        // Annulons le comportement par défaut de l'événement
        // qui serait de recharger la page
        event.preventDefault();
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
    <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                    <div>
                        <h3 className="text-center my-4"> Créer une facture </h3>
                        <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                name="fullName"
                                placeholder="Montant de la facture"
                                value={price}
                                onChange={handlePriceChange}
                            />
                        </div>
                        <div className="form-group">
                            <Select options={options} onChange={handleChange} autoFocus={true} />
                        </div>
                        <button  class="btn btn-primary">Enregistrer la facture</button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
    </>
}

export default CreateInvoiceForm;