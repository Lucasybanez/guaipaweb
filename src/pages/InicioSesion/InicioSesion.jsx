import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";

import styles from "./InicioSesion.module.css";

import {
  Mail,
  Lock,
  Eye,
} from "lucide-react";

export default function InicioSesion() {
  const emailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  const contraseñaRegex =
    /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

  const esquemaLogin = Yup.object().shape({
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
  });

  const formik = useFormik({
    initialValues: {
      Email: "",
      Contraseña: "",
    },

    validationSchema: esquemaLogin,

    validateOnBlur: true,
    validateOnChange: true,

    onSubmit: (values) => {
      console.log(values);

      // Login endpoint después
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
              disabled={!formik.isValid}
            >
              INGRESAR
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