import { Formik } from "formik";
import LoginForm from "../../components/Login/LoginForm";
import { useEffect, useState } from "react";

export default function Login () {
    
    const [emptyInputs, setEmptyInputs] = useState(false); //estado para saber si hay inputs vacios
    const [wrongLogin, setWrongLogin] = useState(false)
    
    const handleOnSubmit = (e) => {
        if (e.password === "react" && e.email === "challenge@alkemy.org") {
            window.sessionStorage.setItem("loggedIn", true)
        }else {
            window.sessionStorage.setItem("loggedIn", false)
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