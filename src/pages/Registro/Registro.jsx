import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import { useState } from "react";
import styles from "./Registro.module.css";
import axios from "axios";
import Swal from "sweetalert2";

import {
  User,
  Mail,
  Lock,
  Eye,
} from "lucide-react";

export default function Register() {

  const API_USUARIOS = import.meta.env.VITE_API_USUARIOS;
  const [loading, setLoading] = useState(false);
  // Expresiones regulares
  const soloLetras = /^[a-zA-ZÀ-ÿ\s]+$/;

  const emailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  const contraseñaRegex =
    /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

  // Yup
  const esquemaRegistro = Yup.object().shape({
    Nombre: Yup.string()
      .required("El nombre es requerido")
      .matches(
        soloLetras,
        "El nombre solo debe contener letras"
      )
      .min(3, "Debe contener al menos 3 caracteres")
      .max(25, "Debe contener menos de 25 caracteres"),

    Apellido: Yup.string()
      .required("El apellido es requerido")
      .matches(
        soloLetras,
        "El apellido solo debe contener letras"
      )
      .min(3, "Debe contener al menos 3 caracteres")
      .max(25, "Debe contener menos de 25 caracteres"),

    Email: Yup.string()
      .required("El email es requerido")
      .matches(
        emailRegex,
        "Ingrese un email válido"
      ),

    Contraseña: Yup.string()
      .required("La contraseña es requerida")
      .matches(
        contraseñaRegex,
        "Debe contener entre 8 y 16 caracteres, una mayúscula, una minúscula y un número"
      ),

    ConfirmarContraseña: Yup.string()
      .required("Debe repetir la contraseña")
      .oneOf(
        [Yup.ref("Contraseña")],
        "Las contraseñas deben coincidir"
      ),
  });

  // Formik
  const formik = useFormik({
    initialValues: {
      Nombre: "",
      Apellido: "",
      Email: "",
      Contraseña: "",
      ConfirmarContraseña: "",
    },

    validationSchema: esquemaRegistro,

    validateOnBlur: true,
    validateOnChange: true,

    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);

        const nuevoUsuario = {
          nombre: values.Nombre,
          apellido: values.Apellido,
          email: values.Email,
          password: values.Contraseña,
        };

        await axios.post(
          API_USUARIOS,
          nuevoUsuario
        );

        Swal.fire({
          icon: "success",
          title: "Cuenta creada",
          text: "Tu usuario fue registrado correctamente",
          confirmButtonColor: "#8bc218",
        });

        resetForm();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text:
            error?.response?.data?.message ||
            "No fue posible crear la cuenta",
        });
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.formCard}>
          <span className={styles.preTitle}>
            CREÁ TU CUENTA
          </span>

          <h1>Registrate</h1>

          <p>
            Completá tus datos para crear tu cuenta y
            comenzar tu camino en el Instituto Superior
            de Arte Guaipa.
          </p>

          <form
            className={styles.form}
            onSubmit={formik.handleSubmit}
            noValidate
          >
            {/* NOMBRE */}
            <div>
              <div
                className={clsx(styles.inputGroup, {
                  [styles.inputError]:
                    formik.touched.Nombre &&
                    formik.errors.Nombre,

                  [styles.inputSuccess]:
                    formik.touched.Nombre &&
                    !formik.errors.Nombre,
                })}
              >
                <User size={20} />

                <input
                  type="text"
                  placeholder="Ingresá tu nombre"
                  {...formik.getFieldProps("Nombre")}
                />
              </div>

              {formik.touched.Nombre &&
                formik.errors.Nombre && (
                  <span className={styles.error}>
                    {formik.errors.Nombre}
                  </span>
                )}
            </div>

            {/* APELLIDO */}
            <div>
              <div
                className={clsx(styles.inputGroup, {
                  [styles.inputError]:
                    formik.touched.Apellido &&
                    formik.errors.Apellido,

                  [styles.inputSuccess]:
                    formik.touched.Apellido &&
                    !formik.errors.Apellido,
                })}
              >
                <User size={20} />

                <input
                  type="text"
                  placeholder="Ingresá tu apellido"
                  {...formik.getFieldProps(
                    "Apellido"
                  )}
                />
              </div>

              {formik.touched.Apellido &&
                formik.errors.Apellido && (
                  <span className={styles.error}>
                    {formik.errors.Apellido}
                  </span>
                )}
            </div>

            {/* EMAIL */}
            <div>
              <div
                className={clsx(styles.inputGroup, {
                  [styles.inputError]:
                    formik.touched.Email &&
                    formik.errors.Email,

                  [styles.inputSuccess]:
                    formik.touched.Email &&
                    !formik.errors.Email,
                })}
              >
                <Mail size={20} />

                <input
                  type="email"
                  placeholder="Ingresá tu correo electrónico"
                  {...formik.getFieldProps("Email")}
                />
              </div>

              {formik.touched.Email &&
                formik.errors.Email && (
                  <span className={styles.error}>
                    {formik.errors.Email}
                  </span>
                )}
            </div>

            {/* CONTRASEÑA */}
            <div>
              <div
                className={clsx(styles.inputGroup, {
                  [styles.inputError]:
                    formik.touched.Contraseña &&
                    formik.errors.Contraseña,

                  [styles.inputSuccess]:
                    formik.touched.Contraseña &&
                    !formik.errors.Contraseña,
                })}
              >
                <Lock size={20} />

                <input
                  type="password"
                  placeholder="Creá una contraseña"
                  {...formik.getFieldProps(
                    "Contraseña"
                  )}
                />

                <Eye size={20} />
              </div>

              {formik.touched.Contraseña &&
                formik.errors.Contraseña && (
                  <span className={styles.error}>
                    {formik.errors.Contraseña}
                  </span>
                )}
            </div>

            {/* CONFIRMAR CONTRASEÑA */}
            <div>
              <div
                className={clsx(styles.inputGroup, {
                  [styles.inputError]:
                    formik.touched
                      .ConfirmarContraseña &&
                    formik.errors
                      .ConfirmarContraseña,

                  [styles.inputSuccess]:
                    formik.touched
                      .ConfirmarContraseña &&
                    !formik.errors
                      .ConfirmarContraseña,
                })}
              >
                <Lock size={20} />

                <input
                  type="password"
                  placeholder="Repetí tu contraseña"
                  {...formik.getFieldProps(
                    "ConfirmarContraseña"
                  )}
                />

                <Eye size={20} />
              </div>

              {formik.touched
                .ConfirmarContraseña &&
                formik.errors
                  .ConfirmarContraseña && (
                  <span className={styles.error}>
                    {
                      formik.errors
                        .ConfirmarContraseña
                    }
                  </span>
                )}
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={!formik.isValid || loading}
            >
              {loading
                ? "CREANDO CUENTA..."
                : "CREAR CUENTA"}
            </button>
          </form>

          <div className={styles.loginLink}>
            ¿Ya tenés una cuenta?
            <p to="/login">
              {" "}
              Iniciá sesión
            </p>
          </div>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.greenCircle}></div>

          <img
            alt="Danza folklórica"
            className={styles.heroImage}
          />
        </div>
      </section>
    </div>
  );
}