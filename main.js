canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_image="car1.png";
car1_x=10;
car1_y=10

car2_width=120;
car2_height=70;
car2_image="car2.png";
car2_x=10;
car2_y=100;

background_image="racing_image.jpg"

function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadBackground;
    background_imgtag.src=background_image;

    car1_imgtag=new Image;
    car1_imgtag.onload=uploadCar1;
    car1_imgtag.src=car1_image;

    car2_imgtag=new Image;
    car2_imgtag.onload=uploadCar2;
    car2_imgtag.src=car2_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1_imgtag,car1_x,car1_y,car1_width,car1_height);
}

function uploadCar2(){
    ctx.drawImage(car2_imgtag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown", my_keyDown);
function my_keyDown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        car1_up();
        console.log("Up");
    }
    if(keyPressed=='40'){
        car1_down();
        console.log("Down");
    }
    if(keyPressed=='37'){
        car1_left();
        console.log("Left");
    }
    if(keyPressed=='39'){
        car1_right();
        console.log("Right");
    }
    if(keyPressed=='87'){
        car2_up();
        console.log("A");
    }
    if(keyPressed=='83'){
        car2_down();
        console.log("S");
    }
     if(keyPressed=='65'){
        car2_left();
        console.log("A");
    }
    if(keyPressed=='68'){
        car2_right();
        console.log("D");
    }
}