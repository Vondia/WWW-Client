import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Jumbotron } from "react-bootstrap";
import { fetchStories } from "../../store/allStories/actions";
import { selectStories } from "../../store/allStories/selectors";
import moment from "moment";

export default function AllStoriesPage() {
  const dispatch = useDispatch();
  const allStories = useSelector(selectStories);

  useEffect(() => {
    dispatch(fetchStories());
  }, [dispatch]);

  return (
    <div>
      <div>
        <Jumbotron>
          <h1>All stories:</h1>
        </Jumbotron>
      </div>
      <table>
        <thead>
          <tr>
            <th>Story name</th>
            <th>Date Created</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        {!Array.isArray(allStories) ? (
          <p>loading ...</p>
        ) : (
          allStories.map((story) => {
            return (
              <tbody>
                <tr>
                  <td>{story.name}</td>
                  <td>{moment(story.createdAt).format("dddd DD MMMM")}</td>
                  <td>
                    <button>edit</button>
                  </td>
                  <td>
                    <button>delete</button>
                  </td>
                </tr>
              </tbody>
            );
          })
        )}
      </table>
    </div>
  );
}
