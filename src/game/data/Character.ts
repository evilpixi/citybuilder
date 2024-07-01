export class Character
{
  private id: number;
  private name: string;
  private health: number;
  private attackPower: number;
  private defense: number;

  constructor(id: number, name: string, health: number, attackPower: number, defense: number)
  {
    this.id = id
    this.name = name
    this.health = health
    this.attackPower = attackPower
    this.defense = defense
  }

  // Getters and setters for the private properties
  getId(): number
  {
    return this.id;
  }

  getName(): string
  {
    return this.name;
  }

  getHealth(): number
  {
    return this.health;
  }

  setHealth(health: number): void
  {
    this.health = health;
  }

  getAttackPower(): number
  {
    return this.attackPower;
  }

  setAttackPower(attackPower: number): void
  {
    this.attackPower = attackPower;
  }

  getDefense(): number
  {
    return this.defense;
  }

  setDefense(defense: number): void
  {
    this.defense = defense;
  }
}