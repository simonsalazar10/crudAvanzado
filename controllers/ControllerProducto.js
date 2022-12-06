import Producto from '../models/ModelProducto.js'

const crearProducto = async(req, res) => {
  try {
    await Producto.create(req.body)
    res.json({
      message: 'Usuario creado correctamente'
    })
  } catch (error) {
    res.json({
      message: `No se pudo registrar el usuario: ${error}`
    })
  }
}

export {
  crearProducto
}
