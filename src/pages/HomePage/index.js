import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Jumbotron } from "react-bootstrap";
import { fetchStories } from "../../store/allStories/actions";
import { selectStories } from "../../store/allStories/selectors";

export default function HomePage() {
  const dispatch = useDispatch();
  const allStories = useSelector(selectStories);

  useEffect(() => {
    dispatch(fetchStories());
  }, [dispatch]);

  return (
    <div>
      <div>
        <Jumbotron>
          <h1>WereldWijde Weetjes</h1>
        </Jumbotron>
      </div>
      {!Array.isArray(allStories) ? (
        <p>loading ...</p>
      ) : (
        allStories.map((story) => {
          return (
            <div>
              {/* <h2>Name: {story.name},</h2> */}
              <img
                src={story.imageUrl}
                alt="pictur from the story"
                height="200px"
                width="200px"
              />
            </div>
          );
        })
      )}
    </div>
  );
}

{
  /* <iframe
title="prezi"
src="https://prezi.com/p/kr9wclafgov5/embed/"
id="iframe_container"
frameborder="0"
webkitallowfullscreen=""
mozallowfullscreen=""
allowfullscreen=""
allow="autoplay; fullscreen"
height="auto"
width="100%"
></iframe> */
}
