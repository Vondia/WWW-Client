import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Jumbotron } from "react-bootstrap";
import { fetchStories } from "../../store/allStories/actions";
import { selectStories } from "../../store/allStories/selectors";
import moment from "moment";
import { deleteStory } from "../../store/story/actions";

export default function AllStoriesPage() {
  const dispatch = useDispatch();
  const allStories = useSelector(selectStories);
  const doDeleteStories = (storyId) => {
    console.log("storyId", storyId);
    dispatch(deleteStory(storyId));
  };

  useEffect(() => {
    dispatch(fetchStories());
  }, [dispatch]);

  return (
    <div>
      <div>
        <div
          className="font-weight-bold"
          style={{ fontSize: 40, textAlign: "center" }}
          class="p-2 flex-fill bd-highlight"
        >
          <h1>Alle verhalen:</h1>
        </div>
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
                    <button className="button button:hover">edit</button>
                  </td>
                  <td>
                    <button
                      onClick={() => doDeleteStories(story.id)}
                      className="button button:hover"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })
        )}
      </table>
      <footer class="footer bg-light text-center text-lg-start">
        <div class="text-center p-3" style={{ backgroundColor: "#Aedff7" }}>
          © 2021 Copyright: WereldWijde Weetjes
        </div>
      </footer>
    </div>
  );
}
