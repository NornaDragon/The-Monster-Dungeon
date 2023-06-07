// The Monster Dungeon Final
// Maria C. van der Spuy
// 15/06/2023
//
// Extra for Experts:

// How to animate my sprite sheet animations
// https://www.youtube.com/watch?v=3noMeuufLZY

class Enemy {
  constructor(x, y, type, element) {
    this.x = x;
    this.y = y;
    this.moveSpeed = 4.4;
    this.viewed = false;
    this.life = 100;
    this.type = type;
    this.element = element;
  }

  typesEnemy() {
    // animationSpilce();
    if (this.type === 0) {
      image(gremAnimation[frameCount % gremAnimation.length], this.x, this.y);

      // image(evilGuardAnimation[frameCount % evilGuardAnimation.length], this.x, this.y);
    }
    if (this.type === 1) {
      image(gremAnimation[frameCount % gremAnimation.length], this.x, this.y);
    }
    if (this.type === 2) {
      // image(bigGremAnimation[frameCount % bigGremAnimation.length], this.x, this.y);
    }
    if (this.type === 3) {
      // image(fireBigAnimation[frameCount % fireBigAnimation.length], this.x, this.y);
    }
    if (this.type === 4) {
      // image(magicMageAnimation[frameCount % magicMageAnimation.length], this.x, this.y);
    }
    if (this.type === 5) {
      // image(attackBargeletAnimation[frameCount % attackBargeletAnimation.length], this.x, this.y);
    }
    if (this.type === 6) {
      // image(slimeAnimation[frameCount % slimeAnimation.length], this.x, this.y);
    }
    if (this.type === 7) {
      // image(theSnakesAnimation[frameCount % theSnakesAnimation.length], this.x, this.y);
    }
    if (this.type === 8) {
      // image(bigEvilGuardAnimation[frameCount % bigEvilGuardAnimation.length], this.x, this.y);
    }
    if (this.type === 9) {
      // image(dragonAnimation[frameCount % dragonAnimation.length], this.x, this.y);
    }
  }
  // Done
  walls() {
    for (let y = 0; y < tilesHigh; y++) {
      for (let x = 0; x < tilesWide; x++) {
        if (tiles[y][x] === "B" && tiles[y][x] === tiles[Math.floor(this.y/60)][Math.floor(this.x/60)] && tiles[y+1][x] === "D") {
          this.y += 0.5;
        }
        if (tiles[y][x] === "B" && tiles[y][x] === tiles[Math.floor((this.y+60)/60)][Math.floor(this.x/60)]  && tiles[y-1][x] === "D") {
          this.y -= 0.5;
        }
        if (tiles[y][x] === "B" && tiles[y][x] === tiles[Math.floor(this.y/60)][Math.floor(this.x/60)]) {
          this.x += 0.5;
        }
        if (tiles[y][x] === "B" && tiles[y][x] === tiles[Math.floor(this.y/60)][Math.floor((this.x+60)/60)]) {
          this.x -= 0.5;
        }
      }
    }
  }

  enemyElement() {
    if (this.element === "null") { 
      // melee attack
      // = true
    }
    if (this.element === "fire") {
      // fire attack



      // fire effect
      // = true
    }
    if (this.element === "ice") {
      // ice attack



      // ice effect
      // = true
      // duration = random(5, 25)
      // this.speed = 0
      // framerate%60 (duration --)
    }
    if (this.element === "poison") {
      // poison attack


      // poison effect
      // = true
      // health -= random(0, 5)
    }
    if (this.element === "magicDrain") {
      // magicDrain attack


      // magicDrain effect
      // = true
      // health -= random(0, 5)
      // mp -= 2
    }
  }

  smallEnemyMove() {
    let choice = random(100);
    if (choice < 25) {
      this.x -= this.moveSpeed;
    }
    else if (choice < 50) {
      this.x += this.moveSpeed;
    }
    else if (choice < 75) {
      this.y -= this.moveSpeed;
    }
    else if (choice < 100) {
      this.y += this.moveSpeed;
    }
    this.life--;
  }

  bigEnemyMove() {
    let choice = random(100);
    if (choice < 50) {
      this.x -= this.moveSpeed/2;
    }
    else if (choice < 100) {
      this.x += this.moveSpeed/2;
    }
  }

  isDead() {
    return this.life <= 0;
  }
}

let badGuys = [];

let moveX = 720;
let moveY = 660;

let nullhead, firehead, poisonhead, healthhead, magichead, hurthead;
let fullhealthbar, lowhealthbar, fullmagicbar, lowmagicbar;
let statusEffect = 0;
let health = 100;
let magic = 100;

let beenSet = false;

let Assets24fps_60x60;
let guardAnimation = [];
let guardRightAnimation = [];
let guardWalkAnimation = [];
let guardRightWalkAnimation = [];

let gremAnimation = [];
let bigGremAnimation = [];
let evilGuardAnimation = [];
let bigEvilGuardAnimation = [];
let fireBigAnimation = [];
let slimeAnimation = [];
let magicMageAnimation = [];
let attackBargeletAnimation = [];
let theSnakesAnimation = [];
let dragonAnimation = [];

let guardIdleImage, guardRightIdleImage,guardFrontIdleImage, guardBackIdleImage, guardWalkImage, guardRightWalkImage;

let gremIdleImage;
let bigGremIdleImage;
let evilGuardIdleImage;
let bigEvilGuardIdleImage;
let fireBigIdleImage;
let slimeIdleImage;
let magicMageIdleImage;
let attackBargeIdleImage;
let theSnakesIdleImage;
let dragonIdleImage;

let enemyArray = [];
let enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, boss;

let guardstill = true;
let isUp = true;
let isRight = false;
let moveSpeed = 4.4;

let level = 0;
let levelSet = [];

let newplacment = false;
let defeated = true;

let forward = false;

let tiles;
let tilesHigh, tilesWide;
let tileWidth, tileHeight;
let lines;

let levelBackground;
let brick, dirt, empty, owen;
let blackPathwayTopLeft, blackPathwayTopRight, blackPathwayBottomLeft, blackPathwayBottomRight;
let pathwayTopLeft, pathwayTopRight, pathwayBottomLeft, pathwayBottomRight;

// FOR IMAGE AND LEVEL ASSETS
function preload() {
  // Load level data
  levelSet.push(loadStrings("assets/levels/0.txt"));
  levelSet.push(loadStrings("assets/levels/1.txt"));
  levelSet.push(loadStrings("assets/levels/2.txt"));
  levelSet.push(loadStrings("assets/levels/3.txt"));
  levelSet.push(loadStrings("assets/levels/4.txt"));
  levelSet.push(loadStrings("assets/levels/5.txt"));
  levelSet.push(loadStrings("assets/levels/6.txt"));
  levelSet.push(loadStrings("assets/levels/7.txt"));
  levelSet.push(loadStrings("assets/levels/8.txt"));  

  // Load background
  levelBackground = loadImage("assets/image_and_animation/scenery/mist_background.png");

  // Load tile images

  nullhead = loadImage("assets/image_and_animation/headicon/nullhead.png");
  firehead = loadImage("assets/image_and_animation/headicon/firehead.png");
  poisonhead = loadImage("assets/image_and_animation/headicon/poisonhead.png");
  healthhead = loadImage("assets/image_and_animation/headicon/healthhead.png");
  magichead = loadImage("assets/image_and_animation/headicon/magichead.png");
  hurthead = loadImage("assets/image_and_animation/headicon/hurthead.png");

  fullhealthbar = loadImage("assets/image_and_animation/baricon/healthfull.png");
  lowhealthbar = loadImage("assets/image_and_animation/baricon/healthlow.png");
  fullmagicbar = loadImage("assets/image_and_animation/baricon/magicfull.png");
  lowmagicbar = loadImage("assets/image_and_animation/baricon/magiclow.png");

  // Scenery tiles
  brick = loadImage("assets/image_and_animation/scenery/brick.png");
  dirt = loadImage("assets/image_and_animation/scenery/dirt.png");
  owen = loadImage("assets/image_and_animation/scenery/brick_Owen.png");

  // back travel tiles
  pathwayTopLeft = loadImage("assets/image_and_animation/ground_pathway/ground_pathway_0.png");
  pathwayTopRight = loadImage("assets/image_and_animation/ground_pathway/ground_pathway_1.png");
  pathwayBottomLeft = loadImage("assets/image_and_animation/ground_pathway/ground_pathway_2.png");
  pathwayBottomRight = loadImage("assets/image_and_animation/ground_pathway/ground_pathway_3.png");
  // forward travel tiles
  blackPathwayTopLeft = loadImage("assets/image_and_animation/pathway/pathway_0.png");
  blackPathwayTopRight = loadImage("assets/image_and_animation/pathway/pathway_1.png");
  blackPathwayBottomLeft = loadImage("assets/image_and_animation/pathway/pathway_2.png");
  blackPathwayBottomRight = loadImage("assets/image_and_animation/pathway/pathway_3.png");

  // Null tile
  empty = loadImage("assets/image_and_animation/scenery/empty.png");

  // All Animation Assets

  // 24 frames for 60 x 60 characters
  Assets24fps_60x60 = loadJSON("assets/image_and_animation/animation/24fps_60x60.json");

  // Guard Sprite Sheets
  guardIdleImage = loadImage("assets/image_and_animation/animation/guard_idle_sprite_sheet.png");
  guardRightIdleImage = loadImage("assets/image_and_animation/animation/guard_idle_right_sprite_sheet.png");
  guardFrontIdleImage = loadImage("assets/image_and_animation/animation/guard_idle_right_sprite_sheet.png");
  guardBackIdleImage = loadImage("assets/image_and_animation/animation/guard_idle_right_sprite_sheet.png");
  guardWalkImage = loadImage("assets/image_and_animation/animation/guard_walk_sprite_sheet.png");
  guardRightWalkImage = loadImage("assets/image_and_animation/animation/guard_walk_right_sprite_sheet.png");

  // Grem Sprite Sheet
  gremIdleImage = loadImage("assets/image_and_animation/animation/grem_idle_sprite_sheet.png");
}

function setup() {
  createCanvas(1440, 840);
  levelLoader();
  animationSpilce();
  document.addEventListener("contextmenu", event => event.preventDefault());

  tilesHigh = lines.length;
  tilesWide = lines[0].length;

  tileWidth = width / tilesWide;
  tileHeight = height / tilesHigh;

  tiles = createEmpty2dArray(tilesWide, tilesHigh);

  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      let tileType = lines[y][x];
      tiles[y][x] = tileType;
    }
  }
}

function draw() {
  display();
  theplayer();
  change();
  icons();
  wallBlock();
  roomEnemy();
}

function theplayer() {
  if (guardstill) {
    if (isRight) {
      image(guardRightAnimation[frameCount % guardRightAnimation.length], moveX, moveY);
    }
    else {
      image(guardAnimation[frameCount % guardAnimation.length], moveX, moveY);
    }
  }
  else {
    if (isRight) {
      image(guardRightWalkAnimation[frameCount % guardRightWalkAnimation.length], moveX, moveY);
    }
    else {
      image(guardWalkAnimation[frameCount % guardWalkAnimation.length], moveX, moveY);
    }
  }

  if (keyIsDown(RIGHT_ARROW)) {
    isRight = true;
    if (moveX < width-54) {
      moveX += moveSpeed;
    }
    guardstill = false;
  }
  else if (keyIsDown(LEFT_ARROW)) {
    isRight = false;
    if (moveX > -6) {
      moveX -= moveSpeed;
    }
    guardstill = false;
  }
  else if (keyIsDown(UP_ARROW)) {
    if (moveY > - 2) {
      moveY -= moveSpeed;
    }
    guardstill = false;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    if (moveY < height-60) {
      moveY += moveSpeed;
    }
    guardstill = false;
  }
  else {
    guardstill = true;
  }
}

//Done (block under door is funky)
function wallBlock() {
  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      if (tiles[y][x] === "B" && tiles[y][x] === tiles[Math.floor(moveY/60)][Math.floor(moveX/60)] && keyIsDown(UP_ARROW) && tiles[y+1][x] === "D") {
        moveY += 0.5;
      }
      if (tiles[y][x] === "B" && tiles[y][x] === tiles[Math.floor((moveY+60)/60)][Math.floor(moveX/60)] && keyIsDown(DOWN_ARROW) && tiles[y-1][x] === "D") {
        moveY -= 0.5;
      }
      if (tiles[y][x] === "B" && tiles[y][x] === tiles[Math.floor(moveY/60)][Math.floor(moveX/60)] && keyIsDown(LEFT_ARROW)) {
        moveX += 0.5;
      }
      if (tiles[y][x] === "B" && tiles[y][x] === tiles[Math.floor(moveY/60)][Math.floor((moveX+60)/60)] && keyIsDown(RIGHT_ARROW)) {
        moveX -= 0.5;
      }
    }
  }
}

// Done
function change() {
  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      if (defeated === true) {
        if (tiles[y][x] === "P" && tiles[y][x] === tiles[Math.floor((moveY+30)/60)][Math.floor((moveX+30)/60)] && (keyIsDown(UP_ARROW) || keyIsDown(LEFT_ARROW))){
          level++;
          levelLoader();
          newplacment = true;
          forward = true;
          startingplace();
        }
        if (tiles[y][x] === "A" && tiles[y][x] === tiles[Math.floor((moveY+30)/60)][Math.floor((moveX+30)/60)] && (keyIsDown(UP_ARROW) || keyIsDown(RIGHT_ARROW))){
          level++;
          levelLoader();
          newplacment = true;
          forward = true;
          startingplace();
        }
        if (tiles[y][x] === "T" && tiles[y][x] === tiles[Math.floor((moveY+30)/60)][Math.floor((moveX+30)/60)] && keyIsDown(LEFT_ARROW)){
          level++;
          levelLoader();
          newplacment = true;
          forward = true;
          startingplace();
        }
        if (tiles[y][x] === "H" && tiles[y][x] === tiles[Math.floor((moveY+30)/60)][Math.floor((moveX+30)/60)] && keyIsDown(RIGHT_ARROW)){
          level++;
          levelLoader();
          newplacment = true;
          forward = true;
          startingplace();
        }
        if (tiles[y][x] === "p" && tiles[y][x] === tiles[Math.floor((moveY+30)/60)][Math.floor((moveX+30)/60)] && keyIsDown(LEFT_ARROW)){
          level--;
          levelLoader();
          newplacment = true;
          forward = false;
          startingplace();
        }
        if (tiles[y][x] === "a" && tiles[y][x] === tiles[Math.floor((moveY+30)/60)][Math.floor((moveX+30)/60)] && keyIsDown(RIGHT_ARROW)){
          level--;
          levelLoader();
          newplacment = true;
          forward = false;
          startingplace();
        }
        if (tiles[y][x] === "t" && tiles[y][x] === tiles[Math.floor((moveY+30)/60)][Math.floor((moveX+30)/60)] && (keyIsDown(LEFT_ARROW) || keyIsDown(DOWN_ARROW))){
          level--;
          levelLoader();
          newplacment = true;
          forward = false;
          startingplace();
        }
        if (tiles[y][x] === "h" && tiles[y][x] === tiles[Math.floor((moveY+30)/60)][Math.floor((moveX+30)/60)] && (keyIsDown(RIGHT_ARROW) || keyIsDown(DOWN_ARROW))){
          level--;
          levelLoader();
          newplacment = true;
          forward = false;
          startingplace();
        }
      }
    }
  }
}

// put new Enemy when down others
function startingplace() {
  if (newplacment === true) {
    if (forward) {
      if (level === 1) {
        enemy1 = new Enemy(width/2, height/2, 0);
        // enemy1 = new Enemy(width/2, height/2, 0,"null");
        enemyArray.push(enemy1);
        moveX = 240;
      }
      if (level === 2) {
        moveX = 240;
      }
      if (level === 3) {
        moveY = 660;
      }
      if (level === 4) {
        moveY = 660;
      }
      if (level === 5) {
        moveY = 660;
      }
      if (level === 6) {
        moveX = 1260;
      }
      if (level === 7) {
        moveY = 660;
      }
      if (level === 8) {
        moveY = 660;
      }
    }
    if (!forward) {
      if (level === 0) {
        moveX = 1020;
      }
      if (level === 1) {
        moveX = 1140;
      }
      if (level === 2) {
        moveY = 120;
      }
      if (level === 3) {
        moveY = 120;
      }
      if (level === 4) {
        moveY = 120;
      }
      if (level === 5) {
        moveX = 120;
      }
      if (level === 6) {
        moveY = 120;
      }
    }
    newplacment = false;
  }
}

// change slice to happen when health is 0
function roomEnemy() {
  if (level === 0) {
    for (let i=0; i<enemyArray.length; i++) {
      //
    } 
  }
  if (level === 1) {
    for (let i=0; i<enemyArray.length; i++) {
      enemyArray[i].smallEnemyMove();
      enemyArray[i].typesEnemy();
      enemyArray[i].walls();

      if (enemyArray[i].isDead()) {
        enemyArray.splice(i,1);
      }
    }
  }
  if (level === 2) {
    for (let i=0; i<enemyArray.length; i++) {
      //
    } 
    // enemy1.typesEnemy();
    // enemy2.typesEnemy();
  }
  if (level === 3) {
    // enemy1.typesEnemy();
  }
  if (level === 4) {
    // enemy1.typesEnemy();
    // enemy2.typesEnemy();
  }
  if (level === 5) {
    // enemy1.typesEnemy();
  }
  if (level === 6) {
  //   enemy1.typesEnemy();
  //   enemy2.typesEnemy();
  //   enemy3.typesEnemy();
  //   enemy4.typesEnemy();
  }
  if (level === 7) {
    // enemy1.typesEnemy();
    // enemy2.typesEnemy();
    // enemy3.typesEnemy();
    // enemy4.typesEnemy();
    // enemy5.typesEnemy();
    // enemy6.typesEnemy();
  }
  if (level === 8) {
    // boss.typesEnemy();
  }
}

function icons() {
  noStroke();
  fill(0, 0, 0, 150);
  rect(60, 0, 540, 60);
  // head display 
  if (statusEffect === 0) {
    image(nullhead, 60, 0, 60, 60);
  }
  else if (statusEffect === 1) {
    image(firehead, 60, 0, 60, 60);
  }
  else if (statusEffect === 2) {
    image(poisonhead, 60, 0, 60, 60);
  }
  else if (statusEffect === 3) {
    image(healthhead, 60, 0, 60, 60);
  }
  else if (statusEffect === 4) {
    image(magichead, 60, 0, 60, 60);
  }
  else if (statusEffect === 5) {
    image(hurthead, 60, 0, 60, 60);
  }
  //health bar display
  if (health > 100/3) {
    noStroke();
    fill(34, 177, 76);
    rect(120, 3, health*2, 54);
    stroke(0);
    strokeWeight(2);
    fill(34, 177, 76, 50);
    rect(120, 3, 200, 54);
  }
  else {
    noStroke();
    fill(237, 28, 36);
    rect(120, 3, health*2, 54);
    stroke(0);
    strokeWeight(2);
    fill(237, 28, 36, 50);
    rect(120, 3, 200, 54);
  }
  // magic bar display
  if (magic > 100/3) {
    noStroke();
    fill(0, 183, 239);
    rect(360, 3, magic*2, 54);
    stroke(0);
    strokeWeight(2);
    fill(0, 183, 239, 50);
    rect(360, 3, 200, 54);
  }
  else {
    noStroke();
    fill(50, 183, 239);
    rect(360, 3, magic*2, 54);
    stroke(0);
    strokeWeight(2);
    fill(50, 183, 239, 50);
    rect(360, 3, 200, 54);
  }
  // head brain
  if (key === "0") {
    statusEffect = 0;
  }
  else if (key === "1") {
    statusEffect = 1;
  }
  else if (key === "2") {
    statusEffect = 2;
  }
  else if (key === "3") {
    statusEffect = 3;
  }
  else if (key === "4") {
    statusEffect = 4;
  }
  else if (key === "5") {
    statusEffect = 5;
  }
  // health bar brain
  if (key === "=") {
    health = 100;
  }
  else if (key === "-") {
    health = 33;
  }
  // Magic bar brain
  if (key === ".") {
    magic = 100;
  }
  else if (key === ",") {
    magic = 32;
  }

  // Health bar

  // Ally/Companion effect (Heal/stat increse)

  // Melee Damage

  // Ranged Damage

  // Magic Damage
}

// Done
function animationSpilce() {
  let guardFrames = Assets24fps_60x60.frames;
  for (let i = 0; i < guardFrames.length; i++) {
    let pos = guardFrames[i].position;
    let img = guardIdleImage.get(pos.x, pos.y, pos.w, pos.h);
    guardAnimation.push(img);
  }

  let guardRightFrames = Assets24fps_60x60.frames;
  for (let i = 0; i < guardRightFrames.length; i++) {
    let pos = guardRightFrames[i].position;
    let img = guardRightIdleImage.get(pos.x, pos.y, pos.w, pos.h);
    guardRightAnimation.push(img);
  }

  let guardWalkFrames = Assets24fps_60x60.frames;
  for (let i = 0; i < guardWalkFrames.length; i++) {
    let pos = guardWalkFrames[i].position;
    let img = guardWalkImage.get(pos.x, pos.y, pos.w, pos.h);
    guardWalkAnimation.push(img);
  }

  let guardRightWalkFrames = Assets24fps_60x60.frames;
  for (let i = 0; i < guardRightWalkFrames.length; i++) {
    let pos = guardRightWalkFrames[i].position;
    let img = guardRightWalkImage.get(pos.x, pos.y, pos.w, pos.h);
    guardRightWalkAnimation.push(img);
  }

  let gremIdleFrames = Assets24fps_60x60.frames;
  for (let i = 0; i < gremIdleFrames.length; i++) {
    let pos = gremIdleFrames[i].position;
    let img = gremIdleImage.get(pos.x, pos.y, pos.w, pos.h);
    gremAnimation.push(img);
  }
}

// Done
function levelLoader() {
  lines = levelSet[level];
}

// Done
function display() {
  image(levelBackground, 0, 0, width, height);
  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      let tileType = lines[y][x];
      tiles[y][x] = tileType;
    }
  }

  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      showTile(tiles[y][x], x, y);
    }
  }
}

// Done
function createEmpty2dArray(cols, rows) {
  let emptyGrid = [];
  for (let y = 0; y < rows; y++) {
    emptyGrid.push([]);
    for (let x = 0; x < cols; x++) {
      emptyGrid[y].push(0);
    }
  }
  return emptyGrid;
}

// Done (Add new textus?)
function showTile(location, x, y) {
  if (location === "D") {
    image(dirt, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "B") {
    image(brick, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "P") {
    image(blackPathwayTopLeft, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "A") {
    image(blackPathwayTopRight, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "T") {
    image(blackPathwayBottomLeft, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "H") {
    image(blackPathwayBottomRight, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "p") {
    image(pathwayTopLeft, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "a") {
    image(pathwayTopRight, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "t") {
    image(pathwayBottomLeft, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "h") {
    image(pathwayBottomRight, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "O") {
    image(owen, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else {
    image(empty, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
}