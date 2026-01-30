import { createContext, useState } from "react";

// Creiamo il context
export const BudgetContext = createContext();

// Provider che wrappa tutta l'app e fornisce lo stato globale
export function BudgetProvider({ children }) {

  // Stato globale: true/false per modalità budget
  const [budgetMode, setBudgetMode] = useState(false);

  return (

    // Forniamo budgetMode e la funzione per modificarlo a tutti i componenti figli
    <BudgetContext.Provider value={{ budgetMode, setBudgetMode }}>
      {children}
    </BudgetContext.Provider>
  );
}