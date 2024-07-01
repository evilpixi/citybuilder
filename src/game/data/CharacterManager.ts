// Import any necessary dependencies here
import { Character } from './Character';

export class CharacterManager
{
  private characters: Character[];

  constructor()
  {
    this.characters = [];
  }

  // Add a character to the manager
  public addCharacter(character: Character): void
  {
    this.characters.push(character);
  }

  // Remove a character from the manager
  public removeCharacter(character: Character): void
  {
    const index = this.characters.indexOf(character);
    if (index !== -1)
    {
      this.characters.splice(index, 1);
    }
  }

  // Get all characters in the manager
  public getAllCharacters(): Character[]
  {
    return this.characters;
  }
}