class MainMenuScene extends Phaser.Scene {
  constructor() {
    super('MainMenuScene');
  }

  preload() {
    this.load.image('menuBackground', 'Assets/background.png');
  }

  create() {
    this.add.image(640, 360, 'menuBackground').setDisplaySize(1280, 720); // fundo centralizado

    this.add.text(640, 100, 'Lazy Panda', {
      fontSize: '64px',
      fill: '#ffffff'
    }).setOrigin(0.5);

    this.createButton(640, 250, 'Começar Jogo', () => {
      this.scene.start('LevelMenuScene');
    });

    this.createButton(640, 320, 'Definições', () => {
      this.scene.start('DefinicoesScene');
    });
  }

  createButton(x, y, text, callback) {
    const btn = this.add.text(x, y, text, {
      fontSize: '32px',
      fill: '#fff',
      backgroundColor: '#000'
    })
      .setOrigin(0.5)
      .setPadding(10)
      .setInteractive({ useHandCursor: true })
      .on('pointerover', () => btn.setStyle({ fill: '#f1c40f' }))
      .on('pointerout', () => btn.setStyle({ fill: '#fff' }))
      .on('pointerdown', callback);
  }
}
