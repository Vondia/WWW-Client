import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchStory } from "../../store/story/actions";
import { selectStory } from "../../store/story/selectors";
import ReactSpoiler from "react-spoiler";

export default function StoryDetailPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const oneStory = useSelector(selectStory);
  const [color, setColor] = useState("grey");

  console.log("does the color change", color);

  //   const answerTrue = oneStory.answer?.correctAnswer;

  //   console.log("answerTrue", answerTrue);

  useEffect(() => {
    dispatch(fetchStory(id));
  }, [dispatch, id]);

  return (
    <div>
      <div>
        <iframe
          title={oneStory.name}
          src={oneStory.preziUrl}
          id="iframe_container"
          frameborder="0"
          webkitallowfullscreen=""
          mozallowfullscreen=""
          allowfullscreen=""
          allow="autoplay; fullscreen"
          height="100%"
          width="auto"
        ></iframe>
      </div>
      <div>{oneStory.question}</div>
      {/* <ReactSpoiler blur={10} hoverBlur={8}> */}
      <div>
        {!Array.isArray(oneStory.answers) ? (
          <p>loading ...</p>
        ) : (
          oneStory.answers.map((answer) => {
            return (
              //   <div>
              //     {answer.correctAnswer ? (
              //       <div style={{ backgroundColor: `${color}` }}>
              //         {answer.answer}
              //       </div>
              //     ) : (
              //       <div style={{ backgroundColor: `${color}` }}>
              //         {answer.answer}
              //       </div>
              //     )}{" "}
              <div>
                <button
                  id={answer.answer}
                  onClick={
                    answer.correctAnswer
                      ? () => {
                          alert("Correct well Done!");
                          console.log("correct answer");
                        }
                      : () => alert("WRONG did you pay attention!?")
                  }
                >
                  {answer.answer}
                </button>
              </div>
              //   </div>
            );
          })
        )}
      </div>
      {/* </ReactSpoiler> */}
    </div>
  );
}
