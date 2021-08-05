class Game extends Phaser.Scene{
    constructor() {
        super('game')
    }

    preload() {
        this.cursors = this.input.keyboard.createCursorKeys()
    }

    create() {
        const map = this.make.tilemap({ key: 'map' });
        const tiles = map.addTilesetImage('dungeon', 'tiles', 16, 16);

        map.createStaticLayer('ground', tiles, 0, 0);
        const wallsLayer = map.createStaticLayer('walls', tiles, 0, 0);
        this.person = this.physics.add.sprite(40, 65, 'person', 'sprite-1.png')
        this.person.body.setSize(this.person.width * .7, this.person.height * .7)
        wallsLayer.setCollisionByProperty({ collision: true })
        this.anims.create({
            key: 'person-idle',
            frames: [{ key: 'person', frame: 'sprite-1.png' }]
        })
        this.anims.create({ 
            key: 'person-walk', 
            frames: this.anims.generateFrameNames('person', { start: 1, end: 7, prefix: 'sprite-', suffix: '.png' }), 
            frameRate: 15,
            repeat: -1 
        });
        this.person.anims.play('person-idle')

        this.physics.add.collider(this.person, wallsLayer)
        this.cameras.main.startFollow(this.person, true)
    }
    
    update() {
        if(!this.cursors || !this.person) return
        
        const speed = 140

        if(this.cursors.left.isDown) {
            this.person.scaleX = -1 
            this.person.body.offset.x = 16
            this.person.anims.play('person-walk', true)
            this.person.setVelocity(-speed, 0)
        } else if (this.cursors.right.isDown) {
            this.person.scaleX = 1 
            this.person.body.offset.x = 2.55
            this.person.anims.play('person-walk', true)
            this.person.setVelocity(speed, 0)
        } else if (this.cursors.up.isDown) {
            this.person.anims.play('person-walk', true)
            this.person.setVelocity(0, -speed)
        } else if(this.cursors.down.isDown) {
            this.person.anims.play('person-walk', true)
            this.person.setVelocity(0, speed)
        } else {
            this.person.anims.play('person-idle')
            this.person.setVelocity(0, 0)
        }
    }
}

export { Game }