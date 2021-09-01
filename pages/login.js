import { useState } from "react";
import Link from "next/link";
import { useAuthState } from "../providers/AuthStateProvider";
import { validateEmail } from "../utility/utility";
import { login } from "../actions/authActions";
import CustomTextInput from "../components/custom-inputs/CustomTextInput";
import CustomPasswordInput from "../components/custom-inputs/CustomPasswordInput";
import CustomCheckbox from "../components/custom-inputs/CustomCheckBox";
import CustomLoadButton from "../components/buttons/CustomLoadButton";
import Logo from "../components/Logo/Logo";
import Redirect from "../components/Redirect";
import styles from "../styles/Login.module.css";

function Login() {
  const date = new Date();
  const [{ isLoggedIn }, dispatchAuth] = useAuthState();
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [values, setValues] = useState({
    password: "",
    email: "",
  });

  const [validation, setValidation] = useState({
    email: {
      status: false,
      message: "",
    },
    password: {
      status: false,
      message: "",
    },
  });

  const [alert, setAlert] = useState({
    type: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    if (name === "rememberMe") {
      setRememberMe(checked);
    }
    setValidation((prevVal) => ({
      ...prevVal,
      [name]: {
        status: false,
        message: "",
      },
    }));

    setAlert({
      type: "",
      message: "",
    });

    return setValues((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const { email, password } = values;
    let valid = true;

    if (!email.length) {
      valid = false;
      setValidation((prevVal) => ({
        ...prevVal,
        email: {
          status: true,
          message: "*required field",
        },
      }));
    }

    if (!password.length) {
      valid = false;
      setValidation((prevVal) => ({
        ...prevVal,
        password: {
          status: true,
          message: "*required field",
        },
      }));
    }

    if (email.length && !validateEmail(email)) {
      valid = false;
      setValidation((prevVal) => ({
        ...prevVal,
        email: {
          status: true,
          message: "Enter a valid mail",
        },
      }));
    }

    if (valid) {
      login(
        { email, password, rememberMe },
        { setLoading, setValidation, setAlert, dispatchAuth }
      );
    }
  };

  if (isLoggedIn && typeof window !== 'undefined') return <Redirect to="/" />;

  return (
    <div className={styles["login"]}>
      <div className={styles["login__container"]}>
        <div className={styles["login__container__header"]}>
          <Link href="/">
            <a>
              <Logo classes={styles["no-border"]} />
            </a>
          </Link>
        </div>
        <div className={styles["login__container__body"]}>
          <form action="" className={styles["login-form"]}>
            <h2 className={styles["login-form__title"]}>Sign in</h2>
            <div
              className={`${styles["login-form__alert-box"]} ${
                styles[alert.type]
              }`}
            >
              {alert.message || ""}
            </div>
            <CustomTextInput
              label="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              containerClasses={styles["mb-1"]}
              error={validation.email}
            />
            <CustomPasswordInput
              label="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              containerClasses={styles["mb-1"]}
              error={validation.password}
            />
            <CustomCheckbox
              label="Remember me"
              name="rememberMe"
              checked={rememberMe}
              value={rememberMe}
              onChange={handleChange}
            />
            <CustomLoadButton
              classes={styles["login-form__button-wrapper"]}
              btnClasses={`btn_hz ${styles["login-form__button"]}`}
              loading={loading}
              onClick={submitHandler}
            />

            <div className={styles["login-form__link"]}>
              <Link href="">
                <a className="un-hv-l">Create an account</a>
              </Link>
              <Link href="">
                <a className="un-hv-r">Forgot password?</a>
              </Link>
            </div>
          </form>
        </div>
        <div className={styles["login__container__footer"]}>
          <p>Copyrights &copy; {date.getFullYear()}</p>
          <Logo classes={styles["footer-logo"]} />
          <p>All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
