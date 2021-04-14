import React, { useState } from "react";
import { useHistory } from "react-router";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useDispatch } from "react-redux";
import { postStory } from "../../store/user/actions";

export default function MakeStoryPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const [storySentence, setStorySentence] = useState("");
  const [question, setQuestion] = useState("");
  const [preziUrl, setPreziUrl] = useState(
    "https://prezi.com/p/_vjrnovaf7ch/embed/"
  );
  const [imageUrl, setImageUrl] = useState(
    "https://source.unsplash.com/1600x900/?"
  );
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [correctAnswer1, setCorrectAnswer1] = useState("");
  const [correctAnswer2, setCorrectAnswer2] = useState("");
  const [correctAnswer3, setCorrectAnswer3] = useState("");
  const [correctAnswer4, setCorrectAnswer4] = useState("");

  function submitForm(event) {
    event.preventDefault();

    // console.log(name, content, imageUrl);
    dispatch(
      postStory(
        name,
        storySentence,
        preziUrl,
        imageUrl,
        question,
        answer1,
        answer2,
        answer3,
        answer4,
        correctAnswer1,
        correctAnswer2,
        correctAnswer3,
        correctAnswer4,
        history
      )
    );
  }
  return (
    <Form as={Col} md={{ span: 6, offset: 3 }}>
      <h1 className="mt-5 mb-5">Post a new story!</h1>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Name of your story"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>storySentence</Form.Label>
        <Form.Control
          value={storySentence}
          onChange={(event) => setStorySentence(event.target.value)}
          type="text"
          placeholder="Engaging sentence here"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Prezi url</Form.Label>
        <Form.Control
          value={preziUrl}
          onChange={(event) => setPreziUrl(event.target.value)}
          type="text"
          placeholder="Embedded Prezi link goes here"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Image url</Form.Label>
        <Form.Control
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
          type="text"
          placeholder="Beautiful picture of the topic here"
        />
        {imageUrl ? (
          <Col className="mt-4" md={{ span: 8, offset: 2 }}>
            <Image src={imageUrl} alt="preview" thumbnail />
          </Col>
        ) : null}
      </Form.Group>
      <Form.Group>
        <Form.Label>Question</Form.Label>
        <Form.Control
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          type="text"
          placeholder="Put the question here"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Answer 1</Form.Label>
        <Form.Control
          value={answer1}
          onChange={(event) => setAnswer1(event.target.value)}
          type="text"
          placeholder="Put the first answer here"
        />
      </Form.Group>
      <Form.Group>
        <select
          class="form-control form-control-sm"
          onChange={(e) => {
            setCorrectAnswer1(e.target.value);
          }}
        >
          <option>true or false?</option>
          <option value={true}>true</option>
          <option value={false}>false</option>
        </select>
      </Form.Group>
      <Form.Group>
        <Form.Label>Answer 2</Form.Label>
        <Form.Control
          value={answer2}
          onChange={(event) => setAnswer2(event.target.value)}
          type="text"
          placeholder="Put the first answer here"
        />
      </Form.Group>
      <Form.Group>
        <select
          class="form-control form-control-sm"
          onChange={(e) => {
            setCorrectAnswer2(e.target.value);
          }}
        >
          <option>true or false?</option>
          <option value={true}>true</option>
          <option value={false}>false</option>
        </select>
      </Form.Group>
      <Form.Group>
        <Form.Label>Answer 3</Form.Label>
        <Form.Control
          value={answer3}
          onChange={(event) => setAnswer3(event.target.value)}
          type="text"
          placeholder="Put the first answer here"
        />
      </Form.Group>
      <Form.Group>
        <select
          class="form-control form-control-sm"
          onChange={(e) => {
            setCorrectAnswer3(e.target.value);
          }}
        >
          <option>true or false?</option>
          <option value={true}>true</option>
          <option value={false}>false</option>
        </select>
      </Form.Group>
      <Form.Group>
        <Form.Label>Answer 4</Form.Label>
        <Form.Control
          value={answer4}
          onChange={(event) => setAnswer4(event.target.value)}
          type="text"
          placeholder="Put the first answer here"
        />
      </Form.Group>
      <Form.Group>
        <select
          class="form-control form-control-sm"
          onChange={(e) => {
            setCorrectAnswer4(e.target.value);
          }}
        >
          <option>true or false?</option>
          <option value={true}>true</option>
          <option value={false}>false</option>
        </select>
      </Form.Group>

      <Form.Group className="mt-5">
        <Button variant="primary" type="submit" onClick={submitForm}>
          Post new Story!
        </Button>
      </Form.Group>
    </Form>
  );
}
