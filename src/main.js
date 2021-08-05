import { Preload } from './scenes/Preload.js'
import { Game } from './scenes/Game.js'

(() => {
    const config = {
        type: Phaser.AUTO,
        width: 400,
        height: 250,
        backgroundColor: '#000000',
        pixelArt: true,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 }
            }
        },
        scene: [Preload, Game],
        scale: {
            zoom: 2
        }
    }

    const game = new Phaser.Game(config)

    console.log('%cAtenção: não digite nada neste console! Você pode prejudicar seu jogo e seu aparelho.', 
        'color:#FFF;background:#f33;font-weight:bold');
})()