import { createClient } from "@supabase/supabase-js";

// L'URL sur laquelle votre application web est visitable (à changer si nécessaire)
export const BASE_URL = "http://localhost:4200/";
// L'URL de l'API Supabase à mettre à jour absolument
export const API_URL = "https://gdzprwugmxdxnpgztbwt.supabase.co/rest/v1";
// La clé d'API de votre compte Supabase à mettre à jour absolument
export const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDUyMjE4MCwiZXhwIjoxOTU2MDk4MTgwfQ.bs4zHK_Hor5Z1ojmZ9MBF_jTvZpiye_DpiUPZcq209A";

/**
 * Petite fonction utilitaire qui permet de supprimer tout ce qui se trouve dans les tables customers et invoices
 * de l'API SupaBase
 */
export const resetDatabase = async () => {
  const supabase = createClient(API_URL, API_KEY);

  await supabase.from("invoices").delete();
  await supabase.from("customers").delete();
  // cy.request({
  //   method: "DELETE",
  //   url: API_URL + "/invoices",
  //   headers: {
  //     apiKey: API_KEY,
  //   },
  // });

  // cy.request({
  //   method: "DELETE",
  //   url: API_URL + "/customers",
  //   headers: {
  //     apiKey: API_KEY,
  //   },
  // });
};
