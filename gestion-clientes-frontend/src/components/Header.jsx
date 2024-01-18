import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom"

export const Header = () => {

    const [modoOscuro, setModoOscuro] = useState(false);
    const htmlElementRef = useRef(document.documentElement);

    const toggleModoOscuro = () => {
        setModoOscuro((prevModoOscuro) => !prevModoOscuro);
    };

    useEffect(() => {
        htmlElementRef.current.setAttribute('data-bs-theme', modoOscuro ? 'dark' : 'light');
    }, [modoOscuro])

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink to='/' className="navbar-brand" href="#">Gestión de clientes</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/clientes' className="nav-link active" aria-current="page" href="#">Gestionar clientes</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/add-cliente' className="nav-link active" aria-current="page" href="#">Agregar cliente</NavLink>
                            </li>
                        </ul>
                        <span style={{ marginRight: '5px', cursor: 'pointer' }} onClick={() => toggleModoOscuro()}>{modoOscuro ? '☀️' : '🌑'}</span>
                    </div>
                </ div>
            </nav>
        </header>

    )
}
