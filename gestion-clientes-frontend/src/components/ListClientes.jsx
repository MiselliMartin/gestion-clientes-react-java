import axios from "axios"
import { useEffect, useState } from "react"
import { Alert, Container } from "react-bootstrap"
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom"
import { api } from "../service/api"

export const ListClientes = () => {

    const [clientes, setClientes] = useState([])
    const [errors, setErrors] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [cambios, setCambios] = useState(false)
    const [showSuccessAlert, setShowSuccessAlert] = useState(false)
    const [showErrorAlert, setShowErrorAlert] = useState(false)

    useEffect(() => {
        fetchClientes()
    }, [cambios])

    const fetchClientes = async () => {
        setIsLoading(true)
        try {
            const clientes = await api.obtenerClientes();
            setClientes(clientes)
        } catch (error) {
            console.error('Error: ', error)
            setErrors(error)
        } finally {
            setIsLoading(false)
        }
    }

    const eliminarCliente = (id) => {
        api.eliminarCliente(id)
            .then((response) => {
                console.log('Cliente eliminado exitosamente:', response);
                setShowSuccessAlert(true)
                setCambios((cam) => !cam)
            })
            .catch((error) => {
                setShowErrorAlert(true)
                console.error('Error al eliminar cliente:', error);
            })
    }

    return (
        <>{showSuccessAlert && (
            <Alert variant="success" onClose={() => setShowSuccessAlert(false)} dismissible>
                <Alert.Heading>Éxito</Alert.Heading>
                <p>El cliente se ha eliminado con éxito.</p>
            </Alert>
        )}

            {showErrorAlert && (
                <Alert variant="danger" onClose={() => setShowErrorAlert(false)} dismissible>
                    <Alert.Heading>Error</Alert.Heading>
                    <p>Ups... Se ha producido un error al eliminado al cliente.</p>
                </Alert>
            )}
            {
                isLoading ?
                    <>
                        <div className='text-center'>
                            <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <p>Cargando...</p>
                        </div>
                    </>
                    : errors ? <p>Ups... Se ha producido un error...</p> :
                        <div className="container">
                            <h2 className="text-center">Lista de clientes</h2>
                            <Link to='/add-cliente' className={`btn  mb-2 btn-primary`}>Agregar cliente</Link>
                            <Table responsive striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Email</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        clientes.map((cliente) => {
                                            return (
                                                <tr key={cliente.id}>
                                                    <td>{cliente.id}</td>
                                                    <td>{cliente.nombre}</td>
                                                    <td>{cliente.apellido}</td>
                                                    <td>{cliente.email}</td>
                                                    <td>
                                                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                                            <Link className="btn btn-secondary" to={`/edit-cliente/${cliente.id}`}>Actualizar</Link>
                                                            <button style={{ marginLeft: '5px' }} className="btn btn-danger" onClick={() => eliminarCliente(cliente.id)}>Eliminar</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
            }
        </>
    )
}
