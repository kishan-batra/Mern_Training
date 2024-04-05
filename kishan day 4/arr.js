const fruits = ["banana","orange","apple","mango"];
let fLen= fruits.length;

let text="<ul>";
for(let i=0;i<fLen;i++) 
{
    text+="<li>"+fruits[i]+"</li>";
}
text+="</ul>";