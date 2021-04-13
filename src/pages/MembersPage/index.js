import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router";
import { selectAllUsers } from "../../store/allUsers/selectors";
import { fetchUsers } from "../../store/allUsers/actions";
// import Loading from "../../components/Loading";
import { Jumbotron } from "react-bootstrap";
import { changeBlockStatus } from "../../store/user/actions";

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
      <Jumbotron>
        <h1>Upcoming Reservations</h1>
      </Jumbotron>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>accountBlocked</th>
            <th>Block?</th>
          </tr>
        </thead>
        {allUsers.map((user) => {
          return (
            <tbody>
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
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
  );
}
