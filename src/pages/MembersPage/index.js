import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../../store/allUsers/selectors";
import { fetchUsers } from "../../store/allUsers/actions";
import { changeBlockStatus } from "../../store/user/actions";
import "./index.css";

export default function MembersPage() {
  const dispatch = useDispatch();
  const allUsers = useSelector(selectAllUsers);

  console.log("any data here:", allUsers);
  // const { id } = useParams();
  // console.log("id no component", id);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // const onBlock = (id) => {
  //   console.log("blocking the bastard!", id);
  //   dispatch(changeBlockStatus(id));
  // };

  return !Array.isArray(allUsers) ? (
    <p>{JSON.stringify(allUsers)}loading ...</p>
  ) : (
    <div>
      <div class="d-flex bd-highlight">
        <div class="p-2 flex-fill bd-highlight"></div>
        <div
          className="font-weight-bold"
          style={{ fontSize: 40, textAlign: "center" }}
          class="p-2 flex-fill bd-highlight"
        >
          <h1>Alle gebruikers</h1>
        </div>
        <div class="p-2 flex-fill bd-highlight"></div>
      </div>
      <div class="d-flex bd-highlight">
        <div class="p-2 flex-fill bd-highlight"></div>
        <div style={{ margin: "auto" }} class="p-2 flex-fill bd-highlight">
          <table>
            <thead
              style={{
                backgroundColor: "#Aedff7",
                border: "3px solid #700660",
              }}
            >
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Block gebruiker</th>
              </tr>
            </thead>
            {allUsers.map((user) => {
              return (
                <tbody>
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td style={{ textAlign: "center" }}>
                      {user.accountBlocked ? (
                        <button
                          onClick={(e) => {
                            e.preventDefault();

                            dispatch(
                              changeBlockStatus(user.id, user.accountBlocked)
                            );
                          }}
                          className="button button:hover"
                        >
                          Unblock
                        </button>
                      ) : (
                        <button
                          onClick={(e) => {
                            e.preventDefault();

                            dispatch(
                              changeBlockStatus(user.id, user.accountBlocked)
                            );
                            console.log(`this is the users id:`, user.id);
                          }}
                          className="button button:hover"
                        >
                          Block
                        </button>
                      )}
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
        <div class="p-2 flex-fill bd-highlight"></div>
      </div>
      <div class="d-flex bd-highlight">
        <div class="p-2 flex-fill bd-highlight"></div>
        <div class="p-2 flex-fill bd-highlight"></div>
        <div class="p-2 flex-fill bd-highlight"></div>
      </div>

      <footer class="footer bg-light text-center text-lg-start">
        <div class="text-center p-3" style={{ backgroundColor: "#Aedff7" }}>
          © 2021 Copyright: WereldWijde Weetjes
        </div>
      </footer>
    </div>
  );
}
