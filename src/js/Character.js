export default class Character {
  constructor(name, type) {
    if(typeof name !== "string" || name.length < 2 || name.length > 10) {
      throw new Error("Name must be a string with length between 2 and 10 character");
    }

    const validTypes = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
    if(!validTypes.includes(type)) {
      throw new Error("Invalid character type");    
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if(this.health <= 0) {
      throw new Error("You can't raise the level of the deceased");
    }

    this.level += 1;
    this.attack = this.attack + (this.attack * 0.20);
    this.defence = this.defence + (this.defence * 0.20);
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if(this.health < 0) {
      this.health = 0;
    }
  }
}