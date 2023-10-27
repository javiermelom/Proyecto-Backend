import { Router } from "express";
import { propietario, granja, ganado, caracteristicas_ganado, distribucion, proveedor,
    addpropietario, addgranja, addganado, addcaracterisiticas_ganado, adddistribucion, addproveedor,
    deletepropietario, deletegranja, deleteganado, deletecaracteristicas_ganado, deletedistribucion, deleteproveedor } 
    from "../controllers/controllers.js";
// import initModels from "../models/init-models.js";

const router = Router();

router.get("/consultaPropietario", propietario);
router.get("/consultaGranja", granja);
router.get("/consultaGanado", ganado);
router.get("/consultaCaracteristicas_ganado", caracteristicas_ganado);
router.get("/consultaDistribucion", distribucion);
router.get("/consultaproveedor", proveedor);
router.post("/agregarPropietario", addpropietario);
router.post("/agregarGranja", addgranja);
router.post("/agregarGanado", addganado);
router.post("/agregarCaracteristicas_ganado", addcaracterisiticas_ganado);
router.post("/agregarDistribucion", adddistribucion);
router.post("/agregarProveedor", addproveedor);
router.delete("/borrarPropietario/:id", deletepropietario);
router.delete("/borrarGranja/:id", deletegranja);
router.delete("/borrarGanado/:id", deleteganado);
router.delete("/borrarCaracteristicas_ganado/:id", deletecaracteristicas_ganado);
router.delete("/borrarDistribuicion/:id", deletedistribucion);
router.delete("/borrarProveedor/:id", deleteproveedor);


export default router;
