import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import axios from "axios";
import Swal from "sweetalert2";
import { jwtDecode } from "jwt-decode";

import styles from "./InicioSesion.module.css";

import {
  Mail,
  Lock,
  Eye,
} from "lucide-react";

export default function InicioSesion() {
  const API_USUARIOS = import.meta.env.VITE_API_USUARIOS;

  const [loading, setLoading] = useState(false);

  const [usuarioLogueadoError, setUsuarioLogueadoError] =
    useState(false);

  const emailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  const esquemaLogin = Yup.object().shape({
    Email: Yup.string()
      .required("El email es requerido")
      .matches(
        emailRegex,
        "Ingrese un email válido"
      ),

    Contraseña: Yup.string().required(
      "La contraseña es requerida"
    ),
  });

  const formik = useFormik({
    initialValues: {
      Email: "",
      Contraseña: "",
    },

    validationSchema: esquemaLogin,

    validateOnBlur: true,
    validateOnChange: true,

    onSubmit: async (values) => {
      try {
        setLoading(true);
        setUsuarioLogueadoError(false);

        const usuarioLogueado = {
          Email: values.Email,
          Contrasena: values.Contraseña,
        };

        const response = await axios.post(
          `${API_USUARIOS}/login`,
          usuarioLogueado
        );

        Swal.fire({
          icon: "success",
          title: "Usuario logueado con éxito",
          text: "Tus datos fueron ingresados correctamente",
          confirmButtonColor: "#8bc218",
        });

        const token = response.data.data.token;

        localStorage.setItem("token", token);

        const decode = jwtDecode(token);

        if (decode.Rol === "administrador") {
          window.location.href = "/administrador";
        } else {
          window.location.href = "/campus";
        }
      } catch (error) {
        console.error(error);

        setUsuarioLogueadoError(true);

        Swal.fire({
          icon: "warning",
          title: "Datos incorrectos",
          text: "Email o contraseña inválidos",
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
            BIENVENIDO NUEVAMENTE
          </span>

          <h1>Iniciar Sesión</h1>

          <p>
            Ingresá tus credenciales para acceder
            al campus y continuar tu formación en
            el Instituto Superior de Arte Guaipa.
          </p>

          {usuarioLogueadoError && (
            <span className={styles.errorLogin}>
              Email o contraseña incorrectos
            </span>
          )}

          <form
            className={styles.form}
            onSubmit={formik.handleSubmit}
            noValidate
          >
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
                  placeholder="Ingresá tu contraseña"
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

            <div className={styles.forgotPassword}>
              <a href="#">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={!formik.isValid || loading}
            >
              {loading
                ? "INGRESANDO..."
                : "INGRESAR"}
            </button>
          </form>

          <div className={styles.loginLink}>
            ¿No tenés una cuenta?
            <p> Registrate</p>
          </div>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.greenCircle}></div>

          <img
            alt="Instituto Guaipa"
            className={styles.heroImage}
          />
        </div>
      </section>
    </div>
  );
}