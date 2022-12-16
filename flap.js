console.log("Welcome to Console");

const sprite = new Image();//colocando sprite no codigo js
sprite.src = "./sprites.png";
//codigo e contexto
const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');

//o resto do codigo para desenhar o chão o plano de fundo e o passariho
const flappyBird = {
    sx:0,
    sy:0,
    width:33,
    height:24,
    x:10,
    y:50,
    speed: 0,
    gravity:0.0025,
    update(){
        this.speed += this.gravity;
        flappyBird.y += this.speed;
    },
    draw(){
        context.drawImage(
            sprite,
            flappyBird.sx, flappyBird.sy, 
            flappyBird.width, flappyBird.height,
            flappyBird.x, flappyBird.y, 
            flappyBird.width, flappyBird.height
        );
    }
}

const floor = {
    sx:0,
    sy:610,
    width:224,
    height:112,
    x:0,
    y: canvas.height - 112,
    draw(){
        context.drawImage(
            sprite,
            floor.sx, floor.sy,
            floor.width, floor.height,
            floor.x, floor.y,
            floor.width, floor.height
        );

        context.drawImage(
            sprite,
            floor.sx, floor.sy,
            floor.width, floor.height,
            (floor.x + floor.width), floor.y,
            floor.width, floor.height
        )
    }
}

const background = {
    sx: 390,
    sy: 0,
    width:275,
    height:204,
    x:0,
    y: canvas.height - 204,
    draw(){
        context.fillStyle = '#70c5ce'

        context.fillRect(0, 0, canvas.width, canvas.height)

        context.drawImage(        
            sprite, 
            background.sx,background.sy,
            background.width, background.height,
            background.x, background.y,
            background.width, background.height
        );
            context.drawImage(        
                sprite, 
                background.sx,background.sy,
                background.width, background.height,
                (background.x + background.width), background.y,
                background.width, background.height
            );
    }
}

function loop(){

    background.draw();
    floor.draw();
    flappyBird.draw();
    flappyBird.update();




    requestAnimationFrame(loop);
}

loop();