// L'URL sur laquelle votre application web est visitable (à changer si nécessaire)
export const BASE_URL = "http://localhost:4200/";
// L'URL de l'API Supabase à mettre à jour absolument
export const API_URL = "https://IDENTIFANT_SUPABASE.supabase.co/rest/v1";
// La clé d'API de votre compte Supabase à mettre à jour absolument
export const API_KEY = "CLE_API_SUPABASE";

/**
 * Petite fonction utilitaire qui permet de supprimer tout ce qui se trouve dans les tables customers et invoices
 * de l'API SupaBase
 */
export const resetDatabase = () => {
  cy.request({
    method: "DELETE",
    url: API_URL + "/invoices",
    headers: {
      apiKey: API_KEY,
    },
  });

  cy.request({
    method: "DELETE",
    url: API_URL + "/customers",
    headers: {
      apiKey: API_KEY,
    },
  });
};
