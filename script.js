var istatus = document.querySelector("h4");
var addFriend = document.querySelector("#add");

var img = document.querySelector(".im");
var love = document.querySelector("i");
var st = document.querySelector(".st");
var info = document.querySelector(".info");

var main = document.querySelector("body");
var cursor = document.querySelector(".cursor");

main.addEventListener("mousemove",function(desc){
    console.log(desc.x)
    cursor.style.left = desc.x+"px";
    cursor.style.top = desc.y+"px";
})

let likeClick = 0;

img.addEventListener("dblclick",function(){
    if(likeClick===0)
    {
    love.style.transform = 'translate(-50%,-50%) scale(1)'
    st.innerHTML = "Liked";
    setTimeout(()=>{
        love.style.transform = 'translate(-50%,-50%) scale(0)'
    },1000)
    likeClick = 1;
    }
    else{
        info.innerHTML="Already Liked";

    }
})

st.addEventListener("click",function(){
    st.innerHTML = "Unliked";
    likeClick = 0;
    info.innerHTML="Double click Image to like";
})


let flag = 0;

addFriend.addEventListener("click",function(){

    if(flag===0)
    {
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        addFriend.innerHTML = "Remove"
        addFriend.style.backgroundColor = "grey"
        flag=1;
    }
    else
    {
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        addFriend.innerHTML = "Add Friend"
        addFriend.style.backgroundColor = "green"

        flag=0;
    }
})
