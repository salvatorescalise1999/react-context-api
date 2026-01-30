import { useContext } from "react";
import { BudgetContext } from "../contexts/BudgetContext";


import { NavLink } from "react-router-dom";

function NavBar() {

    // dati per generazione voci menù
    const links = [
        { path: '/', label: 'HomePage' },
        { path: '/chisiamo', label: 'Chi siamo' },
        { path: '/prodotti', label: 'Prodotti' }
    ]


    // Recuperiamo stato globale e funzione per modificarlo
    const { budgetMode, setBudgetMode } = useContext(BudgetContext);


    return (
        <nav className="mainNav">
            <ul>
                {links.map((link, i) => (
                    <li key={i}>
                        <NavLink to={link.path}>
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* Bottone che togglea budgetMode */}
            <button
                onClick={() => setBudgetMode(!budgetMode)} // invertiamo il valore corrente
            >
                {/* Testo dinamico in base allo stato */}
                {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
            </button>
        </nav>
    )
}

export default NavBar