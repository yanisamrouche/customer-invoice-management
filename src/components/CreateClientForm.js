import React , { useState } from "react";
import {Link} from "react-router-dom";

const CreateClientForm = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        // Annulons le comportement par défaut de l'événement
        // qui serait de recharger la page
        event.preventDefault();
        if (name !== '' && email !== ''){
            props.onClientAdded(name, email)
            setName('')
            setEmail('')
        }
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    // Affichage
    return <>
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                    <div>
                        <h3 className="text-center my-4"> Créer un client </h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="fullName"
                                    placeholder="Nom complet"
                                    value={name}
                                    onChange={handleNameChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>
                            <button id="client-register" className="btn btn-primary">Enregistrer</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default CreateClientForm;