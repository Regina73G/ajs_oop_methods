import { Magician } from "../Magician";

test("testing a level-boosting method", () => {
  const heroLevel1 = new Magician("Maria");
  heroLevel1.levelUp();
  const expectedResult = {
    name: "Maria",
    type: "Magician",
    health: 100,
    level: 2,
    attack: 12,
    defence: 48
  };

  expect(heroLevel1).toEqual(expectedResult);
});

test("testing a method that increases the level with life <= 0", () => {
  const hero = new Magician("Merlin");
  hero.health = 0;

  expect(() => {
    hero.levelUp();
  }).toThrow("You can't raise the level of the deceased");
})

test("testing a a damage method", () => {
  const hero = new Magician("Maria");
  hero.damage(25);
  const expectedResult = 85;

  expect(hero.health).toBe(expectedResult);
});

test("testing a damage method with damage > health", () => {
  const hero = new Magician("Maria");
  hero.damage(200);
  const expectedResult = 0;

  expect(hero.health).toBe(expectedResult);
});
