import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Formik } from 'formik'



export default function LoginForm({handleSubmit, handleChange, values, handleBlur}) {
    
    return(
            <Form className="form" onSubmit={handleSubmit}> 
                <h2 className="loginHeader">Login</h2>
                <FormGroup>
                    <Label for="email" hidden >Email</Label>
                    <Input
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        value= {values.email}
                        onChange={handleChange}
                        //onBlur={handleBlur}
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="password" hidden >Password</Label>
                    <Input
                        id="password"
                        name="password"
                        placeholder="Password"
                        type="password"
                        value= {values.password}
                        onChange={handleChange}
                        //onBlur={handleBlur}
                        
                        />
                </FormGroup>
                <Button type="submit" className="formButton" >
                Submit
                </Button>
            </Form>
    )   
}