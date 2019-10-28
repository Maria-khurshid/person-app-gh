import React from "react";
import "./Person.css";
import PersonInfo from "./PersonInfo";
import PersonEdit from "./PersonEdit";
import PropType from "prop-types";
import { Card } from "react-bootstrap";

export default function Person(props) {
  return (
    <Card style={{ width: "18rem" }} className="Person">
      {props.person.isEdited ? (
        <PersonEdit person={props.person} />
      ) : (
        <PersonInfo person={props.person} />
      )}
    </Card>
  );
}
Person.propTypes = {
  person: PropType.object
};
