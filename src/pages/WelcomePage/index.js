import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./index.css";
import { selectToken } from "../../store/user/selectors";
import { useSelector } from "react-redux";

export default function HomePage() {
  const token = useSelector(selectToken);

  return (
    <div>
      <div className="backgroundwelcomepage">
        <Container className="headerWelcomepage text">
          <div>
            <h1 className="font-weight-bold pl-3 pr-3" style={{ fontSize: 40 }}>
              Welkom bij WereldWijde Weetjes
            </h1>
            <p className="mt-3 mb-2 pl-3 pr-3">
              DE plek waar je op een leuke manier wat over de wijde wereld te
              weten komt! Ga je mee op reis?
            </p>

            {!token ? (
              <div>
                <button className="button button:hover mb-2">
                  <Link to={"./login"}>Inloggen</Link>
                </button>
                <br />
                <button className="button button:hover">
                  <Link to={"./signup"}>aanmelden</Link>
                </button>{" "}
              </div>
            ) : null}
          </div>
        </Container>
      </div>
      <footer className="footer bg-light text-center text-lg-start">
        <div className="text-center p-3" style={{ backgroundColor: "#Aedff7" }}>
          © 2021 Copyright: WereldWijde Weetjes
        </div>
      </footer>
    </div>
  );
}
