class LevelMenuScene extends Phaser.Scene {
  constructor() {
    super('LevelMenuScene');
  }

  preload() {
    this.load.image('menuBackground', 'Assets/background.png');
  }

  create() {
    this.add.image(640, 360, 'menuBackground').setDisplaySize(1280, 720);

    this.add.text(640, 100, 'Seleciona o Nível', {
      fontSize: '48px',
      fill: '#ffffff'
    }).setOrigin(0.5);

    this.createButton(640, 220, 'Nível 1', () => this.scene.start('Nivel1'));
    this.createButton(640, 290, 'Nível 2', () => this.scene.start('Nivel2'));
    this.createButton(640, 360, 'Voltar', () => this.scene.start('MainMenuScene'));
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
