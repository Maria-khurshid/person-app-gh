import React from "react";
import Person from "./Person";
import "./Persons.css";
export default function Persons() {
  const personData = [
    {
      name: "Hina",
      age: 19,
      description: "Teacher at school",
      isEdited: true
    },
    {
      name: "Sepna",
      age: 10,
      description: "Happiness officer",
      isEdited: false
    },
    {
      name: "Sadia",
      age: 16,
      description: "CEO",
      isEdited: true
    }
  ];
  return (
    <div className="Persons">
      <h1>Persons</h1>
      {personData.map(person => (
        <Person person={person} />
      ))}
    </div>
  );
}
