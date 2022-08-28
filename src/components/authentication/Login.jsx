import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionLogin from "../../redux/actions/actionLogin";
import { bindActionCreators } from "redux";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userList = useSelector((state) => state.userList);
  const { loginUser } = bindActionCreators(actionLogin, useDispatch());

  // validation
  const [invalidUser, setInvalidUser] = useState(false);

  const checkIfValid = () => {
    let isValid = false;

    // check if user exist
    userList.forEach((user) => {
      if (user.email === email && user.password === password) {
        setInvalidUser(false);
        isValid = true;
        console.log("success");
      } else {
        setInvalidUser(true);
        console.log("failed");
      }
    });
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkIfValid()) {
      loginUser({ email, password });
    }
  };
  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <h2>LOGIN</h2>

        <Form.Group className="mb-4" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            size="sm"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={invalidUser}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">invalid</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            size="sm"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={invalidUser}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">invalid</Form.Control.Feedback>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="btn btn-success btn-md"
        >
          Log in
        </Button>
      </Form>
    </div>
  );
}
