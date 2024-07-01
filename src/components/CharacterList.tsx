import React from 'react';
import { Character } from '../game/data/Character'

interface CharacterListProps
{
  characters: Character[];
}

export const CharacterList: React.FC<CharacterListProps> = ({ characters }) =>
{
  return (
    <div>
      <h2>Character List</h2>
      <ul>
        {characters.map((character) => (
          <li key={character.getId()}>
            #{character.getId()} {character.getName()} - {character.getHealth()}/{character.getHealth()}
          </li>
        ))}
      </ul>
    </div>
  );
};