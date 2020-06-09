import React from "react";
import Person from "./Person";
function NameList() {
  const Persons = [
    {
      id: 1,
      Name: "Suthagar",
      skill: ".NET",
    },
    {
      id: 2,
      Name: "Senthi",
      skill: "MVC",
    },
  ];
  //Lists and Keys
  // const PersonList = Persons.map(person => <h2>I am {person.Name}. I am {person.skill} Developer</h2>)
 const PersonList = Persons.map(person => <Person key={person.id} person={person} />);

 // const PersonList = Persons.map((person ,index)=> <Person key={index} person={person} />);
 //index needs to use the whern our source don't have any unigue data

  return <div>{PersonList}</div>;

  // const names = ['Suthagar', 'Renuka', 'Nayomi']
  // const namelist = names.map(name => <h2>{name}</h2>)
  // return <div>   {namelist}    </div>
}
export default NameList;
