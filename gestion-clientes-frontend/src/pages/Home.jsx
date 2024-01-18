import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      <h1>Bienvenido a la Plataforma de Gestión de Clientes</h1>
      <p>Descubre el poder de la gestión de clientes con esta plataforma desarrollada con la última tecnología. Esta página fue creada como parte de un proyecto para aprender React, Java SpringBoot y MySQL, y representa mi incursión en el mundo del desarrollo web full stack.</p>

      <h2>Características Principales:</h2>
      <ol>
        <li>
          <strong>Operaciones CRUD sin Esfuerzo:</strong>
          {' '}
          Gestión de clientes simple con operaciones CRUD intuitivas. Crea, actualiza, elimina y visualiza clientes con solo unos clicks.
        </li>
        <li>
          <strong>Tecnología de Vanguardia:</strong>
          {' '}
          Utilicé React para el desarrollo del frontend, Java SpringBoot para el backend y MySQL como base de datos. Este poderoso stack proporciona una experiencia de usuario sin igual.
        </li>
        <li>
          <strong>Axios para Llamadas a la API:</strong>
          {' '}
          Integré y utilicé <code>Axios</code> por primera vez para facilitar las llamadas a la API, asegurando una comunicación eficiente entre el frontend y el backend.
        </li>
      </ol>

      <h2>Desarrollo Full Stack:</h2>
      <p>Mi primera combinación en este stack. React, Java, MySQL... <code>se vienen cositas</code></p>

      <h2>Explora, Aprende y Disfruta:</h2>
      <p>Animate! No hay nada más lindo que aprender haciendo.</p>

      <p style={{marginBottom: '10px'}}>
          Ahora hacé click <Link to='/clientes' onClick={() => scrollToTop()}>acá</Link> o en la NavBar para vivir la experiencia!
        </p>
        <hr style={{marginTop: '10px'}}/>
    </div>
  )
}
