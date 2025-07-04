import Character from "../Character";
import { Bowerman } from "../Bowerman";

test("testing the correctness of creating heroes with the correct values", () => {
  const hero = new Character("Maria", "Magician");
  const expectedResult = {
    name: "Maria",
    type: "Magician",
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined
  };

  expect(hero).toEqual(expectedResult);
});

const value = [
  ["J", "Swordsman"],
  ["Apollinarius", "Daemon"]
];

test.each(value)("testing the correctness of creating heroes with an incorrect name value", (name, type) => {
  expect(() => {
    new Character(name, type)
  }).toThrow("Name must be a string with length between 2 and 10 character");
});

test("testing the correctness of creating heroes with an incorrect type value", () => {
  expect(() => {
    new Character("Alan", "Roga")
  }).toThrow("Invalid character type");
});

test("testing the correctness of creating Bowerman heroes with the correct values", () => {
  const hero = new Bowerman("Arthur");
  const expectedResult = {
    name: "Arthur",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  };

  expect(hero).toEqual(expectedResult);
});