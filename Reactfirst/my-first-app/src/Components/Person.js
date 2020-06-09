import React from "react";

function Person({ person }) {
  return (
    <div>
      <h2>
        I am {person.Name}. I am {person.skill} Developer
      </h2>
    </div>
  );
}
export default Person;
//List Rendering