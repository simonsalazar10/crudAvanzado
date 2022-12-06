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

const mostrarProductos = async(req, res) =>{

    try {
      const productos = await Producto.findAll()
      res.json(productos)
    } catch (error) {
      res.json({
        message: "base de datos vacia"
      })
      
    }

}

const mostrarProducto = async (req, res) => {
  try {
    const producto = await Producto.findOne({where: {id: req.params.id}})
    res.json(producto)
  } catch (error) {
    res.json({
      message: "producto no existe: "+ error
  })

  }
}

const editarProducto = async (req, res) => {
  
}
const eliminarProducto = async (req, res) => {
  
}

export {
  crearProducto,
  mostrarProductos,
  mostrarProducto
}
