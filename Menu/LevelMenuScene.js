class LevelMenuScene extends Phaser.Scene {
    constructor() {
        super('LevelMenuScene');
    }

    create() {
        this.add.text(640, 100, 'Seleciona o Nível', { fontSize: '48px', fill: '#ffffff' }).setOrigin(0.5);

        this.createButton(640, 220, 'Nível 1', () => {
            this.scene.start('Level1Scene');
        });

        this.createButton(640, 290, 'Nível 2', () => {
            this.scene.start('Level2Scene');
        });

        this.createButton(640, 360, 'Nível 3', () => {
            this.scene.start('Level3Scene');
        });

        this.createButton(640, 450, 'Voltar', () => {
            this.scene.start('MainMenuScene');
        });
    }

    createButton(x, y, text, callback) {
        const btn = this.add.text(x, y, text, {
            fontSize: '28px',
            fill: '#fff',
            backgroundColor: '#444'
        })
        .setOrigin(0.5)
        .setPadding(10)
        .setInteractive({ useHandCursor: true })
        .on('pointerover', () => btn.setStyle({ fill: '#f1c40f' }))
        .on('pointerout', () => btn.setStyle({ fill: '#fff' }))
        .on('pointerdown', callback);
    }
}
