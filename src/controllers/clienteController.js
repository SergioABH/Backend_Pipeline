const db = require("../models/db");

const clienteController = {
    createCliente: (req, res) => {
        const { nombre, apellido, correo } = req.body;

        db.query(
            'INSERT INTO clientes(nombre, apellido, correo) VALUES ($1, $2, $3)', [nombre, apellido, correo],
            (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({ error: "Error al crear el cliente" });
                } else {
                    res.status(201).json({ message: "Cliente creado exitosamente", result });
                }
            }
        );
    },

    getClientes: (req, res) => {
        db.query('SELECT * FROM clientes', (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: "Error al obtener la lista de clientes" });
            } else {
                res.status(200).json(result.rows);
            }
        });
    },

    updateCliente: (req, res) => {
        const { id, nombre, apellido, correo } = req.body;

        db.query(
            'UPDATE clientes SET nombre=$1, apellido=$2, correo=$3 WHERE id=$4', [nombre, apellido, correo, id],
            (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({ error: "Error al actualizar el cliente" });
                } else {
                    res.status(200).json({ message: "Cliente actualizado exitosamente", result });
                }
            }
        );
    },

    deleteCliente: (req, res) => {
        const id = req.params.id;

        db.query(
            'DELETE FROM clientes WHERE id=$1', [id], 
            (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({ error: "Error al eliminar el cliente" });
                } else {
                    res.status(200).json({ message: "Cliente eliminado exitosamente", result });
                }
            });
        },
    };

module.exports = clienteController;
