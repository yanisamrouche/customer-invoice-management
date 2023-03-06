import React  from "react";
import CreateInvoiceForm from "../components/CreateInvoiceForm";
import {addInvoiceToApi} from "../api/http";
import { useNavigate } from "react-router-dom"
const CreateInvoicePage = () => {

    // état
    const navigate = useNavigate() // useHistory

    // traitement
    const addNewInvoice = (price, status) => {
        const invoice = {
            price: price,
            status: status,
        };
        // Appel HTTP vers Supabase en method POST
        addInvoiceToApi(invoice).then(() => {
            navigate('/')
        })
    }

    // affichage
    return <>
        <CreateInvoiceForm onInvoiceAdded = {addNewInvoice} />
    </>
}
export default CreateInvoicePage;