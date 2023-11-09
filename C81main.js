var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.lineWidth = 4;
ctx.strokeStyle = "blue";
//      x     y    r  s_a  e_a
ctx.arc(250, 210, 40, 0, 2*Math.PI);

ctx.stroke();

draw_circle();

function draw_circle(e)
{
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.arc(300, 250, 40, 0, 2*Math.PI);
        ctx.strokeStyle = "orange";
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(350, 210, 40, 0, 2*Math.PI);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(400, 250, 40, 0, 2*Math.PI);
        ctx.strokeStyle = "green";
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(450, 210, 40, 0, 2*Math.PI);
        ctx.strokeStyle = "red";
        ctx.stroke();


}

function clearArea(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
}