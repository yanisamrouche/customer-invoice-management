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
        <h3> Créer un client </h3>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="fullName"
                placeholder="Nom complet"
                value={name}
                onChange={handleNameChange}
            />
            <input
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={handleEmailChange}
            />
            <button>Enregistrer</button>
        </form>
    </>
}

export default CreateClientForm;