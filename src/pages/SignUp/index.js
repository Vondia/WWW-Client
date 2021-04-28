import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { setMessage } from "../../store/appState/actions";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/homepage");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    if (password !== passwordCheck) {
      dispatch(setMessage("danger", true, "Wachtwoorden komen niet overeen."));
    } else {
      dispatch(signUp(name, email, password));

      setEmail("");
      setPassword("");
      setPasswordCheck("");
      setName("");
    }
  }
  return (
    <div>
      <Container>
        <Form
          as={Col}
          md={{ span: 6, offset: 3 }}
          style={{ paddingBottom: "10%" }}
          className="mt-5"
        >
          <h1 className="mt-5 mb-5">Aanmelden</h1>
          <Form.Group controlId="formBasicName">
            <Form.Label>Naam</Form.Label>
            <Form.Control
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="Volledige naam"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>E-mailadres</Form.Label>
            <Form.Control
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="email@gmail.com"
              required
            />
            <Form.Text className="text-muted">
              We delen je e-mail niet met derden.
            </Form.Text>
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
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Wachtwoord bevestigen</Form.Label>
            <Form.Control
              value={passwordCheck}
              onChange={(event) => setPasswordCheck(event.target.value)}
              type="password"
              placeholder="Wachtwoord"
              required
            />
          </Form.Group>
          <Form.Group className="mt-5">
            <Button variant="primary" type="submit" onClick={submitForm}>
              Aanmelden
            </Button>
          </Form.Group>
          <Link to="/login">Klik hier om in te loggen</Link>
        </Form>
      </Container>
      <footer class="footer bg-light text-center text-lg-start">
        <div class="text-center p-3" style={{ backgroundColor: "#Aedff7" }}>
          © 2021 Copyright: WereldWijde Weetjes
        </div>
      </footer>
    </div>
  );
}
