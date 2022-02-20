import { Formik } from "formik";
import LoginForm from "../../components/Login/LoginForm";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/Context"
import { useNavigate } from 'react-router-dom'

export default function Login () {

    const navigate = useNavigate()
    
    const [emptyInputs, setEmptyInputs] = useState(false); //estado para saber si hay inputs vacios
    const [wrongLogin, setWrongLogin] = useState(false); // este estado es para el mensaje de error
    const { loggedIn, setLoggedIn } = useAppContext()

    useEffect(() => {
        if (loggedIn) {
            navigate("/home")
        }
    }, [loggedIn])

    const handleOnSubmit = (e) => {
        if (e.password === "react" && e.email === "challenge@alkemy.org") {
            window.sessionStorage.setItem("loggedIn", true)
            setLoggedIn(true)
            setWrongLogin(false)
        }else {
            window.sessionStorage.setItem("loggedIn", false)
            setWrongLogin(true)
        }
    }

    return(
        <div className="container-fluid">
            <div className="container">
                <div className="loginContainer">
                    <Formik
                        validateOnChange={false} 
                        validateOnBlur={false}
                        initialValues={{
                            password: "",
                            email: ""
                        }}
                        validate={(value) => {
                            if (!value.email || !value.password) {
                                setEmptyInputs(true)
                            }else {
                                setEmptyInputs(false)
                            }
                            return emptyInputs;
                        }}
                        onSubmit={ (e) => 
                        //Llamada a API. Conectarse y enviar valores.
                        handleOnSubmit(e)
                        }>
                            {({handleSubmit, values, handleChange })=> (
                                <LoginForm handleSubmit={handleSubmit} values={values} handleChange={handleChange} />
                            )}
                        </Formik>
                        {
                            emptyInputs ? <div className="errorsConainer">Please enter a valid email and password</div> :
                            wrongLogin && <div className="errorsConainer">Incorrect user or password</div>
                        }
                        
                </div>
            </div>
        </div>
    )
}