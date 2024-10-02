let pos1, pos2;  // Posições dos quadrados
let speed1, speed2;  // Velocidade dos quadrados
let size = 50;  // Tamanho dos quadrados

function setup() {
  createCanvas(400, 400, WEBGL);  // Ativa o modo 3D
  rectMode(CENTER);  // Define que o ponto de origem dos quadrados será o centro
  
  // Inicializa as posições dos quadrados
  pos1 = createVector(random(-width / 2, width / 2), random(-height / 2, height / 2));
  pos2 = createVector(random(-width / 2, width / 2), random(-height / 2, height / 2));

  // Inicializa as velocidades com vetores aleatórios
  speed1 = createVector(random(-2, 2), random(-2, 2));
  speed2 = createVector(random(-2, 2), random(-2, 2));
}

function draw() {
  background(220);  // Define a cor de fundo

  // Movimenta o primeiro quadrado
  pos1.add(speed1);
  
  // Movimenta o segundo quadrado
  pos2.add(speed2);
  
  // Verifica se os quadrados se aproximam demais
  let distance = dist(pos1.x, pos1.y, pos2.x, pos2.y);
  if (distance < size) {
    // Inverte as direções dos quadrados para evitar colisão
    speed1.mult(-1);
    speed2.mult(-1);
  }

  // Mantém os quadrados dentro dos limites da tela
  checkEdges(pos1, speed1);
  checkEdges(pos2, speed2);
  
  // Desenha o primeiro quadrado
  push();
  translate(pos1.x, pos1.y);  // Move o primeiro quadrado
  rotateX(frameCount * 0.05);  // Adiciona uma rotação no eixo X
  rotateY(frameCount * 0.05);  // Adiciona uma rotação no eixo Y
  box(size);  // Desenha o primeiro quadrado
  pop();

  // Desenha o segundo quadrado
  push();
  translate(pos2.x, pos2.y);  // Move o segundo quadrado
  rotateX(-frameCount * 0.05);  // Adiciona rotação inversa no eixo X
  rotateY(-frameCount * 0.05);  // Adiciona rotação inversa no eixo Y
  box(size);  // Desenha o segundo quadrado
  pop();
}

// Função para manter os quadrados dentro dos limites da tela
function checkEdges(pos, speed) {
  if (pos.x > width / 2 - size / 2 || pos.x < -width / 2 + size / 2) {
    speed.x *= -1;  // Inverte a direção no eixo X
  }
  if (pos.y > height / 2 - size / 2 || pos.y < -height / 2 + size / 2) {
    speed.y *= -1;  // Inverte a direção no eixo Y
  }
}
