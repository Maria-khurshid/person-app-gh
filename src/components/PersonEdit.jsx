import React from "react";
import PropType from "prop-types";
import { Button, Card, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function PersonEdit(props) {
  return (
    <Card.Body>
      <Card.Title>person Edit</Card.Title>
      <Card.Text>
        <input value={props.person.name} />
        <input type="number" value={props.person.age} />
        <textarea>{props.person.description}</textarea>
      </Card.Text>
      <ButtonGroup aria-label="Basic example">
        <Button variant="light">
          <FontAwesomeIcon className="text-info" icon={faCheck} />
        </Button>
        <Button variant="light">
          <FontAwesomeIcon className="text-danger" icon={faTimes} />
        </Button>
      </ButtonGroup>
    </Card.Body>
  );
}
PersonEdit.propTypes = {
  person: PropType.object
};
