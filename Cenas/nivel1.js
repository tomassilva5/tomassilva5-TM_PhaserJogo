class Nivel1 extends Phaser.Scene {
  constructor() {
    super('Nivel1');
  }

  preload() {
    this.load.image('background', 'Assets/background.png');
    this.load.image('terreno', 'Assets/terreno.png');
    this.load.image('groundsm', 'Assets/groundsm.png');
    this.load.image('pedra', 'Assets/pedra.png');
    this.load.image('sol', 'Assets/sol.png');
    this.load.image('nuvem', 'Assets/nuvem.png');
    this.load.image('lava', 'Assets/lava.png');
    this.load.image('bambu', 'Assets/bambu.png');
    this.load.spritesheet('pandapx', 'Assets/pandapx.png', { frameWidth: 70, frameHeight: 100 });
  }

  create() {
    // Header branco simulado com texto grande e fundo branco
    this.add.text(1000, 40, "LEVEL 1", {
      fontSize: '48px',
      color: '#222',
      fontFamily: 'Arial',
      fontStyle: 'bold',
      backgroundColor: '#fff',
      padding: { left: 900, right: 900, top: 20, bottom: 20 }
    }).setOrigin(0.5).setDepth(11);

    // Fundo e decoração
    this.add.image(1000, 470, 'background').setDisplaySize(2000, 730);

    this.add.image(1700, 120, 'sol').setScale(0.6).setDepth(1);
    this.add.image(300, 100, 'nuvem').setScale(0.9).setDepth(1);
    this.add.image(600, 140, 'nuvem').setScale(0.9).setDepth(1);
    this.add.image(1000, 80, 'nuvem').setScale(0.9).setDepth(1);
    this.add.image(1500, 160, 'nuvem').setScale(0.9).setDepth(1);

    // Terreno principal: repetir até cobrir toda a largura
    const terrenoWidth = 400; // largura real do asset terreno.png
    const numTerrenos = Math.ceil(2000 / terrenoWidth);
    this.platforms = this.physics.add.staticGroup();
    for (let i = 0; i < numTerrenos; i++) {
      this.platforms.create(i * terrenoWidth + terrenoWidth / 2, 760, 'terreno').setScale(1).refreshBody();
    }

    // Plataforma pequena suspensa
    this.platformsm = this.physics.add.staticGroup();
    this.platformsm.create(1200, 520, 'groundsm').setScale(0.35, 0.35).refreshBody();

    // Pedra pequena
    this.pedras = this.physics.add.staticGroup();
    this.pedras.create(300, 693, 'pedra').setScale(0.18).refreshBody();

    // Lava pequena e baixa
    this.lavas = this.physics.add.staticGroup();
    this.lavas.create(600, 790, 'lava').setScale(0.28, 0.18).refreshBody();

    // Panda: começa em cima do terreno
    this.player = this.physics.add.sprite(80, 670, 'pandapx');
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    // Animações do panda
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('pandapx', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'turn',
      frames: [ { key: 'pandapx', frame: 4 } ],
      frameRate: 20
    });
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('pandapx', { start: 5, end: 7 }),
      frameRate: 10,
      repeat: -1
    });

    this.cursors = this.input.keyboard.createCursorKeys();

    // Bambus pequenos e bem posicionados
    this.bambus = this.physics.add.staticGroup();
    this.bambus.create(300, 600, 'bambu').setScale(0.12).refreshBody();
    this.bambus.create(600, 500, 'bambu').setScale(0.12).refreshBody();
    this.bambus.create(1200, 700, 'bambu').setScale(0.12).refreshBody();
    this.bambus.create(1700, 500, 'bambu').setScale(0.12).refreshBody();
    this.bambus.create(1200, 400, 'bambu').setScale(0.12).refreshBody();

    // Colisões
    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.player, this.platformsm);
    this.physics.add.collider(this.player, this.pedras);

    // Recolher bambus
    this.physics.add.overlap(this.player, this.bambus, this.collectBambu, null, this);

    // Lava mata
    this.physics.add.collider(this.player, this.lavas, this.hitLava, null, this);

    // Pontuação
    this.score = 0;
    this.scoreText = this.add.text(30, 100, 'score: 0', { fontSize: '36px', fill: '#222', fontFamily: 'monospace' })
      .setDepth(12);

    this.gameOver = false;
  }

  update() {
    if (this.gameOver) return;

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-300);
      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(300);
      this.player.anims.play('right', true);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play('turn');
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-750);
    }
  }

  collectBambu(player, bambu) {
    bambu.disableBody(true, true);
    this.score += 10;
    this.scoreText.setText('score: ' + this.score);
  }

  hitLava(player, lava) {
    this.physics.pause();
    player.setTint(0xff0000);
    player.anims.play('turn');
    this.gameOver = true;
  }
}
