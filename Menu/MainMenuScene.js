class MainMenuScene extends Phaser.Scene {
  constructor() {
    super('MainMenuScene');
  }

  create() {
    this.add.text(640, 100, 'Lazy Panda', { fontSize: '64px', fill: '#ffffff' }).setOrigin(0.5);

    this.createButton(640, 250, 'Começar Jogo', () => {
      this.scene.start('LevelMenuScene');
    });

    this.createButton(640, 320, 'Definições', () => {
      alert('Definições ainda não disponíveis.');
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
