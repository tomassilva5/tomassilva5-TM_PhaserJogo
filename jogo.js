const config = {
  type: Phaser.AUTO,
  width: 2000,
  height: 800,
  parent: 'game-container', // Certifica-te que tens <div id="game-container"></div> no HTML
  backgroundColor: '#ffffff', // O fundo do canvas é branco (para o header e fundo)
  physics: {
    default: 'arcade',
    arcade: { gravity: { y: 1800 }, debug: false }
  },
  scene: [Nivel1]
};

const game = new Phaser.Game(config);

window.onload = function() {
  resize();
  window.addEventListener('resize', resize, false);
};

function resize() {
  const canvas = document.querySelector('canvas');
  if (!canvas) return;
  // O canvas ocupa sempre toda a largura e altura da janela
  const wr = window.innerWidth / window.innerHeight;
  const gr = config.width / config.height;
  if (wr < gr) {
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = (window.innerWidth / gr) + 'px';
  } else {
    canvas.style.width = (window.innerHeight * gr) + 'px';
    canvas.style.height = window.innerHeight + 'px';
  }
  // Remove espaço branco em baixo
  canvas.style.display = 'block';
  canvas.style.margin = '0 auto';
}
