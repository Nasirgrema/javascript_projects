
var btn = ducoment.getElementById("next");
const profiles =[
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
    photo:"../img/author.png",
},
{
    name:"hasan",
    nickname: "maza",
    phone: "+2348063534262",
    photo:"",
},

]
let index =0;
function update(){
const profile = profiles[index]
document.getElementById("name").textContent= profile.name;
document.getElementById("nickname").textContent= profile.nickname;
document.getElementById("phone").textContent= profile.phone;
document.getElementById("pic").textContent= profile.photo;
};