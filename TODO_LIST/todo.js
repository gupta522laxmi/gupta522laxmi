
let input= document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");

button.addEventListener("click", function(){
    let list = document.createElement("li");
    list.innerText = input.value;
    let delbtn = document.createElement("button");
    delbtn.innerText="delete";
   delbtn.classList.add("delete");
   ul.appendChild(list);
    list.appendChild(delbtn);
   // console.log(input.value);
    input.value = " ";


   
});
ul.addEventListener("click",function(event){
    let item = event.target;
   
    if (event.target.nodeName=="BUTTON"){
        item.parentElement.remove();

    }
    else{
        return 0;
    }
 //   console.log(item.parentElement);
})
// let delbtns = document.querySelectorAll(".delete");

// for(delbtn of delbtns){
//     delbtn.addEventListener("click", function() {
//         delbtn.parentElement.remove();
//     });
// }