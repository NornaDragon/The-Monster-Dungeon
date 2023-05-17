// The Monster Dungeon Final
// Maria C. van der Spuy
// 27/04/2023
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
    if (this.type === 0) {
      image(evilGuardAnimation[frameCount % evilGuardAnimation.length], this.x, this.y);
    }
    if (this.type === 1) {
      image(gremAnimation[frameCount % gremAnimation.length], this.x, this.y);
    }
    if (this.type === 2) {
      image(bigGremAnimation[frameCount % bigGremAnimation.length], this.x, this.y);
    }
    if (this.type === 3) {
      image(fireBigAnimation[frameCount % fireBigAnimation.length], this.x, this.y);
    }
    if (this.type === 4) {
      image(magicMageAnimation[frameCount % magicMageAnimation.length], this.x, this.y);
    }
    if (this.type === 5) {
      image(attackBargeletAnimation[frameCount % attackBargeletAnimation.length], this.x, this.y);
    }
    if (this.type === 6) {
      image(slimeAnimation[frameCount % slimeAnimation.length], this.x, this.y);
    }
    if (this.type === 7) {
      image(theSnakesAnimation[frameCount % theSnakesAnimation.length], this.x, this.y);
    }
    if (this.type === 8) {
      image(bigEvilGuardAnimation[frameCount % bigEvilGuardAnimation.length], this.x, this.y);
    }
    if (this.type === 9) {
      image(dragonAnimation[frameCount % dragonAnimation.length], this.x, this.y);
    }
  }

  enemyElement() {
    if (this.element === "null") {
      //
    }
    if (this.element === "fire") {
      //
    }
    if (this.element === "ice") {
      //
    }
    if (this.element === "poison") {
      //
    }
    if (this.element === "magicDrain") {
      //
    }
  }

  smallEnemyMove() {
    let choice = random(100);
    if (choice < 50) {
      this.x -= this.moveSpeed;
    }
    else if (choice < 100) {
      this.x += this.moveSpeed;
    }
  }

  bigEnemyMove() {
    let choice = random(100);
    if (choice < 50) {
      this.x -= this.moveSpeed;
    }
    else if (choice < 100) {
      this.x += this.moveSpeed;
    }
  }
}

let badGuys = [];

let moveX, moveY;
let canMoveUP = true;
let canMoveRIGHT = true;
let canMoveLEFT = true;
let canMoveDOWN = true;

let nullhead, firehead, poisonhead, healthhead, magichead, hurthead;
let fullhealthbar, lowhealthbar, fullmagicbar, lowmagicbar;
let statusEffect = 0;
let health = 174;
let magic = 1;

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

let guardstill = true;
let isUp = true;
let isRight = false;
let moveSpeed = 4.4;

let level = 0;
let levelSet = [];

let isChanged = false;
let wait = 0;

let tiles;
let tilesHigh, tilesWide;
let tileWidth, tileHeight;
let lines;

let levelBackground;
let brick, dirt, empty, owen;
let pathwayTopLeft, pathwayTopRight, pathwayBottomLeft, pathwayBottomRight;
let pathwayLeft, pathwayRight;
let map0, map1, map2, map3, map4, map5, map6, map7, map8;

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
  levelBackground = loadImage("assets/image_and_animation/scenery/mapidea.png");

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
  // Map
  map0 = loadImage("assets/image_and_animation/map/map0.png");
  map1 = loadImage("assets/image_and_animation/map/map1.png");
  map2 = loadImage("assets/image_and_animation/map/map2.png");
  map3 = loadImage("assets/image_and_animation/map/map3.png");
  map4 = loadImage("assets/image_and_animation/map/map4.png");
  map5 = loadImage("assets/image_and_animation/map/map5.png");
  map6 = loadImage("assets/image_and_animation/map/map6.png");
  map7 = loadImage("assets/image_and_animation/map/map7.png");
  map8 = loadImage("assets/image_and_animation/map/map8.png");

  // Scenery tiles
  brick = loadImage("assets/image_and_animation/scenery/brick.png");
  dirt = loadImage("assets/image_and_animation/scenery/dirt.png");
  owen = loadImage("assets/image_and_animation/scenery/brick_Owen.png");

  // Foreground travel tiles
  pathwayLeft = loadImage("assets/image_and_animation/ground_pathway/ground_pathway_0.png");
  pathwayRight = loadImage("assets/image_and_animation/ground_pathway/ground_pathway_1.png");
  // Background travel tiles
  pathwayTopLeft = loadImage("assets/image_and_animation/pathway/pathway_0.png");
  pathwayTopRight = loadImage("assets/image_and_animation/pathway/pathway_1.png");
  pathwayBottomLeft = loadImage("assets/image_and_animation/pathway/pathway_2.png");
  pathwayBottomRight = loadImage("assets/image_and_animation/pathway/pathway_3.png");

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
  moveX = width/2;
  moveY = height/2;
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
  wallBlocks();
  
  // console.log(wait);
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

  if (keyIsDown(RIGHT_ARROW) && canMoveRIGHT === true) {
    isRight = true;
    if (moveX < width-54) {
      moveX += moveSpeed;
    }
    guardstill = false;
  }
  else if (keyIsDown(LEFT_ARROW) && canMoveLEFT === true) {
    isRight = false;
    if (moveX > -6) {
      moveX -= moveSpeed;
    }
    guardstill = false;
  }
  else if (keyIsDown(UP_ARROW) && canMoveUP === true) {
    if (moveY > - 2) {
      moveY -= moveSpeed;
    }
    guardstill = false;
  }
  else if (keyIsDown(DOWN_ARROW) && canMoveDOWN === true) {
    if (moveY < height-60) {
      moveY += moveSpeed;
    }
    guardstill = false;
  }
  else {
    guardstill = true;
  }

  //find way to check for a derection other than UP
  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      if (tiles[y][x] === "B" && tiles[y][x] === tiles[Math.floor((moveY+30)/60)][Math.floor((moveX+30)/60)] && moveY < height - 120){
        canMoveUP = false;
      }
      else {
        canMoveUP = true;
      }

      if (tiles[y][x] === "B" && tiles[y][x] === tiles[Math.floor((moveY+30)/60)][Math.floor((moveX+30)/60) && moveY > 120]){
        canMoveDOWN = false;
      }
      else {
        canMoveDOWN = true;
      }
      
      if (tiles[y][x] === "B" && tiles[y][x] === tiles[Math.floor((moveY+30)/60)][Math.floor((moveX+30)/60) && moveX < width - 120]){
        canMoveRIGHT = false;
      }
      else {
        canMoveRIGHT = true;
      }

      if (tiles[y][x] === "B" && tiles[y][x] === tiles[Math.floor((moveY+30)/60)][Math.floor((moveX+30)/60) && moveX > 120]){
        canMoveLEFT = false;
      }
      else {
        canMoveLEFT = true;
      }
    }
  }
}

// Make an array that holds if a wall is in that location
// make that it knows what derection the play is coming for and trun off the proper key
// look at vectors shelenburg
function wallBlocks() {
  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      if (tiles[y][x] === "B") {
        fill(255,0,0);
        rect(x*60,y*60,60,60);
      }
    }
  }
}

function change() {
  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      if (isChanged === false) {
        if (tiles[y][x] === "P" && tiles[y][x] === tiles[Math.floor((moveY+30)/60)][Math.floor((moveX+30)/60)] && keyIsDown(UP_ARROW)){
          level++;
          levelLoader();
          isChanged = true;
        }
        if (tiles[y][x] === "A" && tiles[y][x] === tiles[Math.floor((moveY+30)/60)][Math.floor((moveX+30)/60)] && keyIsDown(UP_ARROW)){
          level++;
          levelLoader();
          isChanged = true;
        }
        if (tiles[y][x] === "T" && tiles[y][x] === tiles[Math.floor((moveY+30)/60)][Math.floor((moveX+30)/60)] && keyIsDown(DOWN_ARROW)){
          level++;
          levelLoader();
          isChanged = true;
        }
        if (tiles[y][x] === "H" && tiles[y][x] === tiles[Math.floor((moveY+30)/60)][Math.floor((moveX+30)/60)] && keyIsDown(DOWN_ARROW)){
          level++;
          levelLoader();
          isChanged = true;
        }
        if (tiles[y][x] === "p" && tiles[y][x] === tiles[Math.floor((moveY+30)/60)][Math.floor((moveX+30)/60)] && keyIsDown(LEFT_ARROW)){
          level--;
          levelLoader();
          isChanged = true;
        }
        if (tiles[y][x] === "t" && tiles[y][x] === tiles[Math.floor((moveY+30)/60)][Math.floor((moveX+30)/60)] && keyIsDown(LEFT_ARROW)){
          level--;
          levelLoader();
          isChanged = true;
        }
        if (tiles[y][x] === "a" && tiles[y][x] === tiles[Math.floor((moveY+30)/60)][Math.floor((moveX+30)/60)] && keyIsDown(RIGHT_ARROW)){
          level--;
          levelLoader();
          isChanged = true;
        }
        if (tiles[y][x] === "h" && tiles[y][x] === tiles[Math.floor((moveY+30)/60)][Math.floor((moveX+30)/60)] && keyIsDown(RIGHT_ARROW)){
          level--;
          levelLoader();
          isChanged = true;
        }
      }
      else {
        if (wait === 100) {
          isChanged = false;
          wait = 0;
        }
        else {
          wait++;
        }
      }
    }
  }
}

// base done add code
function allEnemy() {
  if (level === 1) {
    let enemy1 = new Enemy(100, 100, 0);
  }
  if (level === 2) {
    let enemy1 = new Enemy(100, 100, 1);
    let enemy2 = new Enemy(100, 100, 1);
    let enemy3 = new Enemy(100, 100, 2);
  }
  if (level === 3) {
    let enemy1 = new Enemy(100, 100, 3);
  }
  if (level === 4) {
    let enemy1 = new Enemy(100, 100, 4);
    let enemy2 = new Enemy(100, 100, 5);
  }
  if (level === 5) {
    let enemy1 = new Enemy(100, 100, 6);
  }
  if (level === 6) {
    let enemy1 = new Enemy(100, 100, 7);
    let enemy2 = new Enemy(100, 100, 7);
    let enemy3 = new Enemy(100, 100, 7);
    let enemy4 = new Enemy(100, 100, 7);
  }
  if (level === 7) {
    let enemy1 = new Enemy(100, 100, 8);
    let enemy2 = new Enemy(100, 100, 8);
    let enemy3 = new Enemy(100, 100, 8);
    let enemy4 = new Enemy(100, 100, 8);
    let enemy5 = new Enemy(100, 100, 8);
    let enemy6 = new Enemy(100, 100, 8);
  }
  if (level === 8) {
    let boss = new Enemy(100, 100, 9);
  }
}

function icons() {
  noStroke();
  fill(0, 0, 0, 150);
  rect(60, 0, 420, 60);
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
  if (health > 174/3) {
    noStroke();
    fill(34, 177, 76);
    rect(123, 3, health, 54, 50, 50, 50, 50);
    stroke(0);
    strokeWeight(2);
    fill(34, 177, 76, 50);
    rect(123, 3, 174, 54, 50);
  }
  else {
    noStroke();
    fill(237, 28, 36);
    rect(123, 3, health, 54, 50, 200, 50, 100);
    stroke(0);
    strokeWeight(2);
    fill(237, 28, 36, 50);
    rect(123, 3, 174, 54, 50);
  }
  // magic bar display
  if (magic === 1) {
    stroke(0);
    strokeWeight(2);
    fill(0, 183, 239);
    rect(303, 3, 174, 54, 50);
  }
  else if (magic === 0) {
    noStroke();
    fill(0, 183, 239);
    rect(303, 3, 60, 54, 50);
    stroke(0);
    strokeWeight(2);
    fill(0, 183, 239, 50);
    rect(303, 3, 174, 54, 50);
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
    health = 174;
  }
  else if (key === "-") {
    health = 48;
  }
  // Magic bar brain
  if (key === ".") {
    magic = 1;
  }
  else if (key === ",") {
    magic = 0;
  }

  // Health bar

  // Ally/Companion effect (Heal/stat increse)

  // Melee Damage

  // Ranged Damage

  // Magic Damage
}

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

function levelLoader() {
  lines = levelSet[level];
}

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

function showTile(location, x, y) {
  if (location === "D") {
    image(dirt, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "B") {
    image(brick, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "P") {
    image(pathwayTopLeft, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "A") {
    image(pathwayTopRight, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "T") {
    image(pathwayBottomLeft, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "H") {
    image(pathwayBottomRight, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "t") {
    image(pathwayLeft, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "h") {
    image(pathwayRight, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "O") {
    image(owen, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "0") {
    image(map0, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "1") {
    image(map1, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "2") {
    image(map2, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "3") {
    image(map3, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "4") {
    image(map4, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "5") {
    image(map5, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "6") {
    image(map6, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "7") {
    image(map7, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "8") {
    image(map8, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else {
    image(empty, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
}