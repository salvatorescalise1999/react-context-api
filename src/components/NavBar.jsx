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

            <button onClick={() => setBudgetMode(!budgetMode)}>
                {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
            </button>
        </nav>
    )
}

export default NavBar