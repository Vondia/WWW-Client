import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStories } from "../../store/allStories/actions";
import { selectStories } from "../../store/allStories/selectors";
import "./index.css";

export default function HomePage() {
  const dispatch = useDispatch();
  const allStories = useSelector(selectStories);

  useEffect(() => {
    dispatch(fetchStories());
  }, [dispatch]);

  return (
    <div>
      <div class="flex-container">
        {!Array.isArray(allStories) ? (
          <p>loading ...</p>
        ) : (
          allStories.map((story) => {
            return (
              <div class="image-container">
                <Link to={`./storydetails/${story.id}`}>
                  <img src={story.imageUrl} alt="story related" class="image" />
                </Link>
                <div class="middle">
                  <div class="text">{story.storySentence}</div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
