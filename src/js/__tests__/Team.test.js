import Team from "../Team";
import Character from "../Character";

test("testing the addition of a character", () => {
  const character = new Character("Arthur", "Bowman");
  const team = new Team();
  team.add(character);
  expect(team.toArray()).toEqual([character]);
});

test("testing the addition of a duplicate character", () => {
  const character = new Character("Arthur", "Bowman");
  const team = new Team();
  team.add(character);
  expect(() => {
    team.add(character)
  }).toThrow("Такой персонаж уже есть в команде");
});

test("testing the addition multiple characters using addAll", () => {;
  const character = new Character("Arthur", "Bowman");
  const character1 = new Character("Maria", "Magician");
  const character2 = new Character("Alan", "Roga");
  const team = new Team();
  team.addAll(character, character1, character2);
  expect(team.toArray()).toEqual([character, character1, character2]);
});

test("testing the addition of a duplicate character using addAll", () => {;
  const character = new Character("Arthur", "Bowman");
  const character1 = new Character("Maria", "Magician");
  const character2 = new Character("Alan", "Roga");
  const team = new Team();
  team.addAll(character, character1);
  team.addAll(character, character2);
  expect(team.toArray()).toEqual([character, character1, character2]);
});