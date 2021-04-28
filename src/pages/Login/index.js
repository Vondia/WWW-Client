import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/homepage");
    }
  }, [token, history]);

  function submitForm(event) {
    console.log("hi");
    event.preventDefault();

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <Form
        as={Col}
        md={{ span: 6, offset: 3 }}
        style={{ paddingBottom: "19%" }}
        className="mt-5"
      >
        <h1 className="mt-5 mb-5">Inloggen</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>E-mailadres</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="email@gmail.com"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Wachtwoord</Form.Label>
          <Form.Control
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Wachtwoord"
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <button
            className="button button:hover"
            type="submit"
            onClick={submitForm}
          >
            Log in
          </button>
        </Form.Group>
        <Link to="/signup" style={{ textAlign: "center" }}>
          Klik hier om je aan te melden!
        </Link>
      </Form>
      <footer class="footer bg-light text-center text-lg-start">
        <div class="text-center p-3" style={{ backgroundColor: "#Aedff7" }}>
          © 2021 Copyright: WereldWijde Weetjes
        </div>
      </footer>
    </div>
  );
}
