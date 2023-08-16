import { object, number } from "yup";

const simuladorSchema = object({
  camiones: number()
    .min(1)
    .default(1)
    .positive("Camiones debe ser positivo")
    .required("Camiones debe tener un valor"),
  palas: number()
    .min(1)
    .default(0)
    .positive("Palas debe ser positivo")
    .required("Palas debe tener un valor"),
  stock_piles: number()
    .min(1)
    .default(0)
    .positive("Stock piles debe ser positivo")
    .required("Stock piles debe tener un valor"),
  tiempo_simulacion: number()
    .moreThan(30, "El tiempo no puede ser menor a 30 minutos")
    .default(30)
    .min(30)
    .positive("El tiempo debe ser positivo")
    .required("Tiempo debe tener un valor"),
});

export default simuladorSchema;
