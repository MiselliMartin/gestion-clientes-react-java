import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { api } from '../service/api'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Alert } from 'react-bootstrap';



export const AddCliente = () => {

    const navigate = useNavigate();

    const { id } = useParams()

    const [showSuccessAlert, setShowSuccessAlert] = useState(false)
    const [showErrorAlert, setShowErrorAlert] = useState(false)

    const initialForm = {
        nombre: '',
        apellido: '',
        email: ''
    }

    const { nombre, apellido, email, onInputChange, setFormState } = useForm(initialForm)

    const saveOrUpdateCliente = (e) => {
        e.preventDefault()
        const cliente = { nombre, apellido, email }

        if (id) {
            api.actualizarCliente(id, cliente)
                .then((response) => {
                    console.log('Cliente actualizado exitosamente:', response);
                    setShowSuccessAlert(true)
                    navigate('/clientes');
                })
                .catch((error) => {
                    setShowErrorAlert(true)
                    console.error('Error al actualizar cliente:', error);
                })
        } else {
            api.crearCliente(cliente)
                .then((response) => {
                    console.log('Cliente creado exitosamente:', response);
                    setShowSuccessAlert(true)
                    navigate('/clientes');
                })
                .catch((error) => {
                    setShowErrorAlert(true)
                    console.error('Error al crear cliente:', error);
                })
        }
    }

    useEffect(() => {
        api.clientePorId(id)
            .then((response) => {
                try {
                    setFormState({
                        nombre: response.nombre,
                        apellido: response.apellido,
                        email: response.email,
                    });
                } catch (error) {
                    console.error('Error al establecer el estado del formulario:', error);
                }
            })
            .catch((error) => {
                console.error('Error al obtener cliente por ID:', error);
            });
    }, [id]);

    const title = () => {
        if (id) {
            return <h2 className='text-center'>Actualizar cliente</h2>
        } else {
            return <h2 className='text-center'>Agregar cliente</h2>
        }
    }

    return (
        <>
            {showSuccessAlert && (
                <Alert variant="success" onClose={() => setShowSuccessAlert(false)} dismissible>
                    <Alert.Heading>Éxito</Alert.Heading>
                    <p>El cliente se ha cargado con éxito.</p>
                </Alert>
            )}

            {showErrorAlert && (
                <Alert variant="danger" onClose={() => setShowErrorAlert(false)} dismissible>
                    <Alert.Heading>Error</Alert.Heading>
                    {id? <p>Ups... Se ha producido un error al actualizar al cliente.</p>:<p>Ups... Se ha producido un error al crear al cliente.</p>}
                </Alert>
            )}
            {title()}
            <form onSubmit={saveOrUpdateCliente}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" value={nombre} name='nombre' id='nombre' onChange={onInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control" value={apellido} name='apellido' id='apellido' onChange={onInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} name='email' id='email' aria-describedby="emailHelp" onChange={onInputChange} />
                </div>
                <button type="submit" className="btn btn-primary">{id? 'Actualizar':'Agregar'}</button>
                &nbsp;&nbsp;
                <Link to='/clientes' className='btn btn-danger'>Cancelar</Link>
            </form>
        </>
    )
}
