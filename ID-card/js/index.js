
var img = document.getElementsByTagName("img")[0];
var btn = document.getElementsByTagName("button")[0];
const profiles = [
{
    name:"Aramma",
    nickname: "buna",
    phone: "+2348063534262",
    photo:"../img/author.png",
},
{
    name:"kamall pk",
    nickname: "programmer",
    phone: "+2348063534262",
    photo:"../img/Aramma2.jpg",
},
{
    name:"hasan",
    nickname: "maza",
    phone: "+2348063534262",
    photo:"../img/img2.jpg",
},

]
let index =0;
btn.addEventListener("click", function(){
if(index ===0){
img.src = profiles[index].photo;
document.getElementById("name").textContent= profiles[index].name;
document.getElementById("nickname").textContent= profiles[index].nickname;
document.getElementById("phone").textContent= profiles[index].phone;
document.getElementById("pic").textContent= profiles[index].photo;

index = 1;
} else if(index===1){
    img.src=profiles[index].photo;
    document.getElementById("name").textContent= profiles[index].name;
document.getElementById("nickname").textContent= profiles[index].nickname;
document.getElementById("phone").textContent= profiles[index].phone;
document.getElementById("pic").textContent= profiles[index].photo;

index=2;
}else if(index===2){
    img.src=profiles[index].photo;
    document.getElementById("name").textContent= profiles[index].name;
document.getElementById("nickname").textContent= profiles[index].nickname;
document.getElementById("phone").textContent= profiles[index].phone;
document.getElementById("pic").textContent= profiles[index].photo;

index=0;
}
});

