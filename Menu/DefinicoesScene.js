class DefinicoesScene extends Phaser.Scene {
  constructor() {
    super('DefinicoesScene');
  }

  preload() {
    this.load.image('menuBackground', 'Assets/background.png');
  }

  create() {
    this.add.image(640, 360, 'menuBackground').setDisplaySize(1280, 720);

    this.add.text(640, 100, 'Definições', {
      fontSize: '48px',
      fill: '#ffffff'
    }).setOrigin(0.5);

    // Som Ligado/Desligado
    this.soundOn = true;
    this.soundButton = this.add.text(640, 250, 'Som: Ligado', {
      fontSize: '32px',
      fill: '#fff',
      backgroundColor: '#000'
    })
      .setOrigin(0.5)
      .setPadding(10)
      .setInteractive({ useHandCursor: true })
      .on('pointerdown', () => this.toggleSound());

    // Botão Voltar
    this.createButton(640, 350, 'Voltar', () => {
      this.scene.start('MainMenuScene');
    });
  }

  toggleSound() {
    this.soundOn = !this.soundOn;
    this.sound.mute = !this.soundOn;
    this.soundButton.setText('Som: ' + (this.soundOn ? 'Ligado' : 'Desligado'));
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
