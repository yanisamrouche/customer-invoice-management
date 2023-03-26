import { 
    // Permet de déclencher le rendu d'un composant
    render, 
    // Permet de déclencher un événement dans l'interface
    fireEvent, 
    // Permet d'aller chercher des éléments sur un "écran" virtuel
    screen 
} from '@testing-library/react'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ClientList from '../src/components/ClientList';

describe("ClientList Component", () => {
    
    it("should render clients given in props", async () => {
        // On créé un tableau arbitraire de tâches
        const clients = [
            { fullName: 'MOCK_CUSTOMER_1', email: 'MOCK_1@mail.fr' },
            { fullName: 'MOCK_CUSTOMER_2', email: 'MOCK_2@mail.fr' },
        ];


        render(<BrowserRouter>
            <ClientList clients={clients} />
        </BrowserRouter>);


        const items = await screen.getAllByText("MOCK_CUSTOMER", { exact: false });

        expect(items).toHaveLength(clients.length);
    })

})