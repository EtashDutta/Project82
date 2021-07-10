mouseevent="";
lastposX=0
lastposY=0

canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

color="orange"
width=8;

canvas.addEventListener("mousedown",mymousedown)

function mymousedown(e){
 color=document.getElementById("textinputcolour").value
 width=document.getElementById("textinputwidth").value
 mouseevent="mousedown"
}
canvas.addEventListener("mousemove",mymousemove)
function mymousemove(e){
    currentposX=e.clientX-canvas.offsetLeft
    currentposY=e.clientY-canvas.offsetTop

    if(mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color
        ctx.lineWidth=width

        ctx.moveTo(lastposX,lastposY)
        ctx.lineTo(currentposX,currentposY)
        ctx.stroke()
    }
    lastposX=currentposX
    lastposY=currentposY
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)

}
