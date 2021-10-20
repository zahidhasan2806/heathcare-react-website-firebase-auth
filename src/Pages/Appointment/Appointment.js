import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Appointment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        alert("submited")
    };

    return (
        <Container className="d-flex align-items-center justify-content-center my-5">

            <Form className="border p-5" onSubmit={handleSubmit(onSubmit)}>
                <h3>Welcome to MediHelp!</h3>
                <h6>Fil up the form below</h6>
                <hr />
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        className={errors.name && 'is-invalid'}
                        {...register("name", {
                            required: true,
                            minLength: 3,
                            maxLength: 50
                        })} />
                    {
                        errors.name &&
                        <span className="text-danger">
                            {errors.name.type === 'required' && 'Please give name'}
                            {errors.name.type === 'minLength' && 'Please give name minimum of 3 characters'}
                            {errors.name.type === 'maxLength' && 'Please give name maximum of 50 characters'}
                        </span>
                    }
                </Form.Group>
                <Form.Group controlId="number">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter Age"
                        className={errors.number && 'is-invalid'}
                        {...register("number", {
                            required: true,
                            minLength: 2,
                            maxLength: 2
                        })} />
                    {
                        errors.number &&
                        <span className="text-danger">
                            {errors.number.type === 'required' && 'Please give number'}
                            {errors.number.type === 'minLength' && 'Please give name minimum of 1 characters'}
                            {errors.number.type === 'maxLength' && 'Please give name maximum of 2 characters'}
                        </span>
                    }
                </Form.Group>
                <Button type="submit" className="w-100 mt-3" variant="outline-dark">Submit </Button>
            </Form>
        </Container >
    );
};

export default Appointment;