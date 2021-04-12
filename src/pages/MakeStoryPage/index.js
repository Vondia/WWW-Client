import React, { useState } from "react";
import { useHistory } from "react-router";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useDispatch } from "react-redux";
import { postStory } from "../../store/user/actions";

export default function MySpaceForm() {
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

  function submitForm(event) {
    event.preventDefault();

    // console.log(name, content, imageUrl);
    dispatch(
      postStory(name, storySentence, preziUrl, imageUrl, question, history)
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

      <Form.Group className="mt-5">
        <Button variant="primary" type="submit" onClick={submitForm}>
          Post new Story!
        </Button>
      </Form.Group>
    </Form>
  );
}
