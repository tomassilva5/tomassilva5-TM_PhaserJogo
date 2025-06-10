class Nivel2 extends Phaser.Scene {
  constructor() {
    super('Nivel2');
  }

  preload() {
    // Carrega imagens e assets específicos deste nível
  }

  create() {
    // Criação do nível 2
    this.add.text(400, 300, 'Nível 2', {
      fontSize: '48px',
      fill: '#ffffff'
    }).setOrigin(0.5);
  }

  update() {
    // lógica do jogo
  }
}
