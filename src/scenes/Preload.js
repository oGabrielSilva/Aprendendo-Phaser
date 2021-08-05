class Preload extends Phaser.Scene {
	constructor() {
		super('preloader')
	}

	preload() {
        this.load.image('tiles', '../../public/assets/dungeon.png')
		this.load.tilemapTiledJSON('map', '../../public/map/map.json')
		this.load.atlas('person', '../../public/assets/character/person.png', '../../public/assets/character/person.json')
	}

	create() {
		this.scene.start('game')
	}
}

export { Preload }