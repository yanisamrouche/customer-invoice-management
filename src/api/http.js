const SUPABASE_URL = "https://fdezozztgafhxkllqbnh.supabase.co/rest/v1";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkZXpvenp0Z2FmaHhrbGxxYm5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1MDc4NDQsImV4cCI6MTk5MzA4Mzg0NH0.rpOybLjWOaGD-ArHkP_RYv0SXZNPfjaGDStddH7vXeI";

export const loadClientsFromApi = () => {
    return fetch(`${SUPABASE_URL}/customers?order=created_at`, {
        headers: {
            apiKey: SUPABASE_API_KEY,
        },
    }).then((response) => response.json())
}

export const addClientToApi = (client) => {
    return fetch(`${SUPABASE_URL}/customers`, {
        method: "POST",
        body: JSON.stringify(client),
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        },
    })
        .then((response) => response.json())
        .then(items => items[0]);
}
export const addInvoiceToApi = (invoice) => {
    return fetch(`${SUPABASE_URL}/invoices`, {
        method: "POST",
        body: JSON.stringify(invoice),
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        },
    })
        .then((response) => response.json())
        .then(items => items[0]);
}

export const loadClientFromApi = (id) => {
    return fetch(`${SUPABASE_URL}/customers?id=eq.${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        }
    })
        .then(response => response.json())
        // La réponse contenant un tableau des tâches correspondantes
        // Nous ne retournons que la première (et la seule)
        .then(tasks => tasks[0]);
}

export const loadInvoicesFromApi = (id) => {
    return fetch(`${SUPABASE_URL}/invoices?clientid=eq.${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        }
    })
        .then(response => response.json())
        // La réponse contenant un tableau des tâches correspondantes
        // Nous ne retournons que la première (et la seule)
        .then(tasks => tasks);
}
