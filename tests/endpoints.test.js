const request = require('supertest')
const express = require('express')
const cors = require('cors')
const clienteRoutes = require('../routes/clienteRoutes')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', clienteRoutes)

const server = app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

describe('Rutas de la API', () => {
  afterEach(async () => {
    return new Promise((resolve) => {
      server.close(() => {
        resolve()
      })
    })
  })

  test('GET /clientes debe retornar una lista de clientes', async () => {
    const response = await request(app).get('/clientes').send()

    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
  })

  test('POST /create debe crear un nuevo cliente', async () => {
    const nuevoCliente = {
      nombre: 'Andrea Juliana',
      apellido: 'Bedoya Henao',
      correo: 'testJest14gmail.com'
    }

    const response = await request(app).post('/create').send(nuevoCliente)

    expect(response.status).toBe(201)
  })

  test('PUT /update debe actualizar un cliente', async () => {
    const cambiosCliente = {
      id: 2,
      nombre: 'María',
      apellido: 'Bedoya',
      correo: 'testJest15@gmail.com'
    }

    const response = await request(app).put('/update').send(cambiosCliente)

    expect(response.status).toBe(200)
  })

  test('DELETE /delete/:id debe eliminar un cliente', async () => {
    const idCliente = 27

    const response = await request(app).delete(`/delete/${idCliente}`)

    expect(response.status).toBe(200)
  })
})
