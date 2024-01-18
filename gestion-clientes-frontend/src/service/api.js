import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1'

export const api = {

  obtenerClientes: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/clientes`);
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener clientes', error);
    }
  },

  crearCliente: async (cliente) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/clientes`, cliente);
      return response.data;
    } catch (error) {
      throw new Error('Error al crear cliente', error);
    }
  },

  clientePorId: async (clienteId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/clientes/${clienteId}`)
      return response.data
    } catch (error) {
      throw new Error('Error al crear cliente', error);
    }
  },

  actualizarCliente: async (clienteId, cliente) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/clientes/${clienteId}`, cliente)
      return response.data
    } catch (error) {
      throw new Error('Error al actualizar cliente', error);
    }
  },

  eliminarCliente: async (clienteId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/clientes/${clienteId}`)
      return response.data
    } catch (error) {
      throw new Error('Error al actualizar cliente', error);
    }
  }
}