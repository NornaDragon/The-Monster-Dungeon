# The-Monster-Dungeon
cs-30 major project spring 2023


## project remander 
    0 = evilGuard
    1 = gremAnimation
    2 = bigGremAnimation
    3 = fireBigAnimation
    4 = magicMageAnimation
    5 = attackBargeletAnimation
    6 = slimeAnimation
    7 = theSnakesAnimation
    8 = bigEvilGuardAnimation
    9 = dragonAnimation

    null = no effect
    fire = damage over time, faster speed
    ice = no damage, stuck in place
    poison = damage over time, slower speed


## Code from other projects to keep in mind (credited to Schellenberg)
### Walker-OOP

    class Walker {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.colour = "red";
            this.speed = 5;
            this.size = 5;
        }

        display() {
            noStroke();
            fill(this.colour);
            circle(this.x, this.y, this.size);
        }
  
        move() {
            let choice = random(100);
            if (choice < 25) {
                this.y -= this.speed;
            }
            else if (choice < 50) {
                this.y += this.speed;
            }
            else if (choice < 75) {
                this.x -= this.speed;
            }
            else if (choice < 100) {
                this.x += this.speed;
            }
        }
    }

### Fireworks

    class Spark {
        constructor(x, y, dx, dy) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.r = 255;
            this.g = 255;
            this.b = 255;
            this.a = 255;
            this.size = 5;
        }

        display() {
            noStroke();
            fill(this.r, this.g, this.b, this.a);
            circle(this.x, this.y, this.size);
        }

        update() {
            this.x += this.dx;
            this.y += this.dy;

            this.a--;
        }

        isDead() {
            return this.a <= 0;
        }
    }

### Fireworks Drawing Loop

    function draw() {
        background("black");
        for (let i = fireworks.length - 1; i >= 0; i--) {
            fireworks[i].update();
            fireworks[i].display();

            if (fireworks[i].isDead()) {
                fireworks.splice(i, 1);
            }
        }
    }

### Ball Array

    class Ball {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.dx = random(-5, 5);
            this.dy = random(-5, 5);
            this.radius = random(10, 40);
            this.r = random(255);
            this.g = random(255);
            this.b = random(255);
            this.a = random(100, 255);
        }

        display() {
            noStroke();
            fill(this.r, this.g, this.b, this.a);
            circle(this.x, this.y, this.radius*2);
        }

        update() {
            this.x += this.dx;
            this.y += this.dy;

            if (this.x - this.radius <= 0 || this.x + this.radius >= width) {
                this.dx *= -1;
            }

            else if (this.y - this.radius <= 0 || this.y + this.radius >= height) {
                this.dy *= -1;
            }
        }

        collisionCheck(otherBall) {
            let distanceApart = dist(this.x, this.y, otherBall.x, otherBall.y);
            let radiiSum = this.radius + otherBall.radius;

            if (distanceApart < radiiSum) {
                // this.dx *= -1;
                // this.dy *= -1;

                let tempX = this.dx;
                let tempY = this.dy;
                this.dx = otherBall.dx;
                this.dy = otherBall.dy;
                otherBall.dx = tempX;
                otherBall.dy = tempY;
                // this.r = 255;
                // this.g = 0;
                // this.b = 0;
            }
        }
    }
