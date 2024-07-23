//sei la
let colidir = false;
let pontosParede =  0;
let pontosBot = 0;

// apenas variáveis bola
let xBola = 465;
let yBola = 250;
let diametro = 20;
let raio = diametro / 2;

// velocidades bola
let velBolax = 8;
let velBolay = 8;

// Variáveis para ambos os retângulos
let comprimento = 8;
let altura = 90;
let arredondamento = 20;

// varíaveis da parede sua
let xParede = 5;
let yParede = 220;

//variáveis do bot
let xBot = 917;
let yBot = 220;
let velBot;
let erro = 0;

function setup() {
  createCanvas(930, 500);
}

function draw() {
  background(0);
  showUp();
  bolaVel();
  bolaColi();
  showParede();
  movParede();
  coliParede(xParede, yParede);
  showBot();
  botVel();
  coliParede(xBot, yBot);
  pontos();
  placar();
  //multi();
  poxa();
}

function showUp() {
  //mostra a bola
  circle(xBola, yBola, diametro);
}

function bolaVel() {
  //velocidade da bola
  xBola += velBolax;
  yBola += velBolay;
}

function bolaColi() {
  //colisão da bola nas bordas
  if (xBola + raio > width || xBola - raio < 0) {
    velBolax *= -1;
  }
  if (yBola + raio > height || yBola - raio < 0) {
    velBolay *= -1;
  }
}

function showParede() {
  //apresenta a sua parede
  rect(xParede, yParede, comprimento, altura, arredondamento);
}

function movParede() {
  //movimento da sua parede
  if (keyIsDown(UP_ARROW)) {
    yParede -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yParede += 10;
  }
}

function coliParede(x, y) {
  //colisão da bola com a sua parede
 collideRectCircle(x, y, comprimento, altura, xBola, yBola, raio);
    colidir = collideRectCircle(x, y, comprimento, altura, xBola, yBola, raio);
    if (colidir) {
        velBolax *= -1;
    }
}

function showBot() {
  rect(xBot, yBot, comprimento, altura, arredondamento);
}

function botVel() {
  velBot = yBola - yBot - comprimento / 2 - 30;
  yBot += velBot;
  chanceErro();
}

function chanceErro() {
  if (pontosBot >= pontosParede) {
    erro += 1
    if (erro >= 39){
    erro = 40
    }
  } else {
    erro -= 1
    if (erro <= 35){
    erro = 35
    }
  }
}

function multi() {
  if (keyIsDown(87)) {
    yBot -= 13;
  }
  if (keyIsDown(83)) {
    yBot += 13;
  }
}

function pontos() {
  textAlign(CENTER)
  stroke(255)
  textSize(18)
  fill(color(151, 147, 147))
  rect(288, 14, 45, 20, 10)
  fill(267);
  text(pontosParede, 310, 30);
  fill(color(151, 147, 147))
  rect(588, 14, 45, 20, 10)
  fill(267);
  text(pontosBot, 610, 30);
}

function placar() {
  if(xBola > 920) {
    pontosParede += 1;
  }
   if(xBola < 10) {
    pontosBot += 1;
  }
}

function poxa(){
    if (xBola - raio < 0){
    xBola = 23
    }
}