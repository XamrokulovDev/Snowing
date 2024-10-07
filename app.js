setInterval(CreateSnow,10)

function CreateSnow(){
    const snow = document.createElement("i");
    snow.classList.add("bx");
    snow.classList.add("bxs-droplet");

    snow.style.left =Math.random()*window.innerWidth+"px";
    snow.style.animationDuration =Math.random()*3+1+"s";
    snow.style.opacity =Math.random();
    snow.style.fontSize = Math.random()*10+10+"px";
    document.body.append(snow);


    setTimeout(()=>{
        snow.remove();
    },4000)
}