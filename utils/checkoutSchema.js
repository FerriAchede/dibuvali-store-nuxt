import * as yup from "yup";

export const checkoutSchema = yup.object({
  name: yup
    .string()
    .required("El nombre es obligatorio")
    .min(2, "El nombre debe tener al menos 2 caracteres"),

  surname: yup
    .string()
    .required("El apellido es obligatorio")
    .min(2, "El apellido debe tener al menos 2 caracteres"),

  email: yup
    .string()
    .required("El correo es obligatorio")
    .email("El correo electrónico no es válido"),

  phone: yup
    .string()
    .required("El teléfono es obligatorio")
    .matches(/^[0-9\s\-()+]{9,16}$/, "El teléfono no es válido"),

  address: yup
    .string()
    .required("La dirección es obligatoria")
    .min(5, "La dirección debe tener al menos 5 caracteres"),

  city: yup
    .string()
    .required("La ciudad es obligatoria")
    .min(2, "La ciudad debe tener al menos 2 caracteres"),

  province: yup
    .string()
    .required("El estado o provincia es obligatorio")
    .min(2, "La provincia debe tener al menos 2 caracteres"),

  zipCode: yup
    .string()
    .required("El código postal es obligatorio")
    .matches(
      /^\d{4,6}$/,
      "El código postal debe tener entre 4 y 6 dígitos"
    ),
    
  termsAccepted: yup
    .boolean()
    .oneOf([true], "Debes aceptar los términos y condiciones")
    .required("Debes aceptar los términos y condiciones"),
});
