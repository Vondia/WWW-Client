import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchStory } from "../../store/story/actions";
import { selectStory } from "../../store/story/selectors";

export default function StoryDetailPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const oneStory = useSelector(selectStory);
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
      <div>
        {!Array.isArray(oneStory.answers) ? (
          <p>loading ...</p>
        ) : (
          oneStory.answers.map((answer) => {
            return (
              <div>
                {answer.correctAnswer ? (
                  <div style={{ backgroundColor: "green" }}>
                    {answer.answer}
                  </div>
                ) : (
                  <div style={{ backgroundColor: "red" }}>{answer.answer}</div>
                )}{" "}
                <div>
                  <button onClick={() => (answer.correctAnswer ? "a" : "b")}>
                    {answer.answer}
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
