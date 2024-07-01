import { BootScene } from './scenes/BootScene';
import { GameplayScene } from './scenes/GameplayScene';
import { MainMenuScene } from './scenes/MainMenuScene';
import { AUTO, Game } from 'phaser';
import { PreloaderScene } from './scenes/PreloaderScene';
import { GameOverScene } from './scenes/GameOverScene';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
  type: AUTO,
  width: 1024,
  height: 768,
  parent: 'game-container',
  backgroundColor: '#028af8',
  scene: [
    BootScene,
    PreloaderScene,
    MainMenuScene,
    GameplayScene,
    GameOverScene
  ]
};

const StartGame = (parent: string) =>
{

  return new Game({ ...config, parent });

}

export default StartGame;
