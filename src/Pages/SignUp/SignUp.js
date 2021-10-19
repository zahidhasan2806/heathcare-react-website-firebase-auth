
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Button,
    Container,
    Form,
    FormControl,
    InputGroup,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";


const SignUp = () => {
    const { signInWithGoogle, handleSubmitForm, getNewUserEmail, getNewUserPassword, error, getNewUserName } = UseAuth();


    return (
        <Container className="d-flex align-items-center justify-content-center my-5">

            <Form className="border p-5" onSubmit={handleSubmitForm}>
                <h3>Welcome to MediHelp!</h3>
                <h6>Please SignUp!</h6>
                <hr />
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1" ><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></InputGroup.Text>
                    <FormControl onBlur={getNewUserName}
                        required placeholder="Enter Your Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1" required><FontAwesomeIcon icon={faEnvelope} ></FontAwesomeIcon></InputGroup.Text>
                    <FormControl onBlur={getNewUserEmail} required type="email"
                        placeholder="Enter Your Email"
                        aria-label="UserEmail"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faLock}></FontAwesomeIcon></InputGroup.Text>
                    <FormControl onBlur={getNewUserPassword} required type="password"
                        placeholder="Password" type="password"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <Button type="submit" className="w-100" variant="outline-dark">Log-In </Button>
                <p className="m-0">Or</p>
                <Button onClick={signInWithGoogle} className="w-100" variant="outline-dark">SingUp with <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></Button>
                <div className="text-danger">
                    <p>{error}</p>
                </div>
                <p className="mt-2">
                    <NavLink className="text-decoration-none" to="/login">
                        Already have an Account? Please Login!
                    </NavLink>
                </p>
            </Form>
        </Container>

    );
};

export default SignUp;