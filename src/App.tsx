import { useRef, useState } from 'react';
import { IRefPhaserGame, PhaserGame } from './game/PhaserGame';
import { MainMenuScene } from './game/scenes/MainMenuScene';
import { CharacterManager } from './game/data/CharacterManager';
import { CharacterList } from './components/CharacterList';
import { Character } from './game/data/Character';

function App()
{
  // The sprite can only be moved in the MainMenu Scene
  const [canMoveSprite, setCanMoveSprite] = useState(true);
  const characters = new CharacterManager();
  characters.addCharacter(new Character(1, 'Player 1', 100, 100, 100));
  characters.addCharacter(new Character(2, 'Player 2', 100, 100, 100));
  characters.addCharacter(new Character(3, 'Player 3', 100, 100, 100));

  //  References to the PhaserGame component (game and scene are exposed)
  const phaserRef = useRef<IRefPhaserGame | null>(null);
  const [spritePosition, setSpritePosition] = useState({ x: 0, y: 0 });

  const changeScene = () =>
  {

    if (phaserRef.current)
    {
      const scene = phaserRef.current.scene as MainMenuScene;

      if (scene)
      {
        scene.changeScene();
      }
    }
  }

  const moveSprite = () =>
  {

    if (phaserRef.current)
    {

      const scene = phaserRef.current.scene as MainMenuScene;

      if (scene && scene.scene.key === 'MainMenuScene')
      {
        // Get the update logo position
        scene.moveLogo(({ x, y }) =>
        {

          setSpritePosition({ x, y });

        });
      }
    }

  }

  const addSprite = () =>
  {

    if (phaserRef.current)
    {
      console.log(phaserRef, phaserRef.current)
      const scene = phaserRef.current.scene;

      if (scene)
      {
        // Add more stars
        const x = Phaser.Math.Between(64, scene.scale.width - 64);
        const y = Phaser.Math.Between(64, scene.scale.height - 64);

        //  `add.sprite` is a Phaser GameObjectFactory method and it returns a Sprite Game Object instance
        const star = scene.add.sprite(x, y, 'star');

        //  ... which you can then act upon. Here we create a Phaser Tween to fade the star sprite in and out.
        //  You could, of course, do this from within the Phaser Scene code, but this is just an example
        //  showing that Phaser objects and systems can be acted upon from outside of Phaser itself.
        scene.add.tween({
          targets: star,
          duration: 500 + Math.random() * 1000,
          alpha: 0,
          yoyo: true,
          repeat: -1
        });
      }
    }
  }

  // Event emitted from the PhaserGame component
  const currentScene = (scene: Phaser.Scene) =>
  {

    setCanMoveSprite(scene.scene.key !== 'MainMenuScene');

  }

  return (
    <div id="app">
      <CharacterList characters={characters.getAllCharacters()} />
      <PhaserGame ref={phaserRef} currentActiveScene={currentScene} />
      <div>
        <div>
          <button className="button" onClick={changeScene}>Change Scene</button>
        </div>
        <div>
          <button disabled={canMoveSprite} className="button" onClick={moveSprite}>Toggle Movement</button>
        </div>
        <div className="spritePosition">Sprite Position:
          <pre>{`{\n  x: ${spritePosition.x}\n  y: ${spritePosition.y}\n}`}</pre>
        </div>
        <div>
          <button className="button" onClick={addSprite}>Add New Sprite</button>
        </div>
      </div>
    </div>
  )
}

export default App
