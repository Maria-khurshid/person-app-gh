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
      isEdited: true
    },
    {
      name: "Sadia",
      age: 16,
      description: "CEO",
      isEdited: true
    }
  ];
  let enableEdit = (p) => {
    p.isEdited = true;

  }
  return (
    <div className="Persons">
      <h1>Persons</h1>
      {personData.map(person => {
        return
        <Person person={person}
          callMeEdit={() => enableEdit(person)
          } />
      })
      }
    </div>
  );
}
