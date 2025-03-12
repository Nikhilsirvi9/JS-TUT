var istatus = document.querySelector("h4");

var addFriend = document.querySelector("#add");

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
