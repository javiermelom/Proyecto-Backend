import initModels from "../models/init-models.js";
import conexion from "../config/database.js";
const tablas = initModels(conexion);

// export function hola(req, res) {
//   res.send("Hola Javier");
// }

// export function adios(req, res) {
//   res.send("Chao Javier");
// }

export async function propietario(req, res) {
  let consulta = await tablas.propietario.findAll();
  res.status(200).json(consulta);
}

export async function granja(req, res) {
  let consulta = await tablas.granja.findAll();
  res.json(consulta);
}

export async function ganado(req, res) {
  let consulta = await tablas.ganado.findAll();
  res.json(consulta);
}

export async function caracteristicas_ganado(req, res) {
  let consulta = await tablas.caracteristicas_ganado.findAll();
  res.json(consulta);
}

export async function distribucion(req, res) {
  let consulta = await tablas.distribucion.findAll();
  res.json(consulta);
}

export async function proveedor(req, res) {
  let consulta = await tablas.proveedor.findAll();
  res.json(consulta);
}

export async function addpropietario(req, res) {
  try {
    let resultado = await tablas.propietario.create(req.body);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json("Error");
  }
}
export async function addgranja(req, res) {
  try {
    let resultado = await tablas.granja.create(req.body);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json("Error");
  }
}
export async function addganado(req, res) {
  try {
    let resultado = await tablas.ganado.create(req.body);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json("Error");
  }
}
export async function addcaracterisiticas_ganado(req, res) {
  try {
    let resultado = await tablas.caracteristicas_ganado.create(req.body);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json("Error");
  }
}
export async function adddistribucion(req, res) {
  try {
    let resultado = await tablas.distribucion.create(req.body);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json("Error");
  }
}
export async function addproveedor(req, res) {
  try {
    let resultado = await tablas.proveedor.create(req.body);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json("Error");
  }
}

export async function deletepropietario(req, res) {
  try {
    let resultado = await tablas.propietario.destroy({
      where: { idpropietario: req.params.id },
    });
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json("Error");
  }
}
export async function deletegranja(req, res) {
  try {
    let resultado = await tablas.granja.destroy({
      where: { idgranja: req.params.id },
    });
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json("Error");
  }
}
export async function deleteganado(req, res) {
  try {
    let resultado = await tablas.ganado.destroy({
      where: { idganado: req.params.id },
    });
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json("Error");
  }
}
export async function deletecaracteristicas_ganado(req, res) {
  try {
    let resultado = await tablas.caracteristicas_ganado.destroy({
      where: { idcaracteristicas_ganado: req.params.id },
    });
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json("Error");
  }
}
export async function deletedistribucion(req, res) {
  try {
    let resultado = await tablas.distribucion.destroy({
      where: { iddistribucion: req.params.id },
    });
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json("Error");
  }
}
export async function deleteproveedor(req, res) {
  try {
    let resultado = await tablas.proveedor.destroy({
      where: { idproveedor: req.params.id },
    });
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json("Error");
  }
}
