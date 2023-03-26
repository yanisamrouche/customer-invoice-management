import React , { useState } from "react";
import Select from "react-select";
import {Link, useParams, useNavigate} from "react-router-dom";

const CreateInvoiceForm = (props) => {
    // état
    const [price, setPrice] = useState('');
    const [selected, setSelected] = useState(null);

    const params = useParams();

    const id = +params.id;
    // traitement
    const handleSubmit = (event) => {
        // Annulons le comportement par défaut de l'événement
        // qui serait de recharger la page
        event.preventDefault();
        console.log("selected -->", selected)
        props.onInvoiceAdded(price, selected, id)
        setPrice('')


    }
    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    }
    const handleChange = (event) => {
        const option = event.target.options[event.target.selectedIndex];
        const text = option.dataset.text;
        console.log('option =>>>', text);
        setSelected(text);
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
                                name="amount"
                                placeholder="Montant de la facture"
                                value={price}
                                onChange={handlePriceChange}
                            />
                        </div>
                        <div className="form-group">
                        <select name="status" onChange={handleChange} >
                            <option value="PAID" data-text="Payée">Payée</option>
                            <option value="SENT" data-text="Envoyée">Envoyée</option>
                        </select>
                        </div>
                        <button  className="btn btn-primary">Enregistrer la facture</button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
    </>
}

export default CreateInvoiceForm;