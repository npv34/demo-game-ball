const PI = Math.PI;
class Circle {
    constructor(x, y, radius, color, SpeedX, SpeedY){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.SpeedX = SpeedX;
        this.SpeedY = SpeedY;
        this.canvas = document.getElementById('my-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.color = color;
    }

    DrawCircle(){
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color;
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x, this.y, this.radius, 0, 2*PI);
        this.ctx.fill();
        this.ctx.stroke();
    }


    MoveBall(){
        
        this.x +=this.SpeedX;
        this.y +=this.SpeedY;

        this.left = this.x - this.radius;
        this.top = this.y - this.radius;
        this.right = this.x + this.radius;
        this.bottom = this.y + this.radius;
    }
    CheckBorder(){
        if(this.left <= 0 || this.right >= this.canvas.width) {
            this.SpeedX = -this.SpeedX;
        }
        if(this.top <= 0 || (this.bottom >= this.canvas.height - rect.height && this.x >= rect.x && this.x <= rect.x+rect.width)){
            this.SpeedY = -this.SpeedY;
        } 
    }


    /*CheckBorder(){
        if (this.y == this.radius){
            this.SpeedY = -this.SpeedY;
        }

        if (this.x ==0 || this.x == this.canvas.width-this.radius){
            this.SpeedX = -this.SpeedX;
        }
    }*/
}

/*
  1: Ve 1 vien gach: 15p
*/
