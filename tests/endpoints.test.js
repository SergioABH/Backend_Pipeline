const request = require('supertest')
const app = require('../server.js')

describe('Rutas de la API', () => {
  test('GET /clientes debe retornar una lista de clientes', async () => {
    const response = await request(app).get('/clientes').send()

    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
  })

  test('POST /create debe crear un nuevo cliente', async () => {
    const nuevoCliente = {
      nombre: 'jsdfg',
      apellido: 'dksuig',
      correo: 'testJest12gmail.com'
    }

    const response = await request(app).post('/create').send(nuevoCliente)

    expect(response.status).toBe(201)
  })

  test('PUT /update debe actualizar un cliente', async () => {
    const cambiosCliente = {
      id: 16,
      nombre: 'Sergio',
      apellido: 'Bedoya',
      correo: 'testJest2@gmail.com'
    }

    const response = await request(app).put('/update').send(cambiosCliente)

    expect(response.status).toBe(200)
  })

  test('DELETE /delete/:id debe eliminar un cliente', async () => {
    const idCliente = 17

    const response = await request(app).delete(`/delete/${idCliente}`)

    expect(response.status).toBe(200)
  })
  afterAll(() => {
    app.close()
  })
})
