import React from "react";
import PropType from "prop-types";
import { Button, Card, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

export default function PersonInfo(props) {
  return (
    <Card.Body>
      <Card.Title>person Info</Card.Title>
      <Card.Text>
        <input value={props.person.name} />
        <input type="number" value={props.person.age} />
        <textarea>{props.person.description}</textarea>
      </Card.Text>
      <ButtonGroup aria-label="Basic example">
        <Button variant="light">
          <FontAwesomeIcon className="text-info" icon={faEdit} />
        </Button>
        <Button variant="light">
          <FontAwesomeIcon className="text-danger" icon={faTrash} />
        </Button>
      </ButtonGroup>
    </Card.Body>
  );
}
PersonInfo.propTypes = {
  person: PropType.object
};
