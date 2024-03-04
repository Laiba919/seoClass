let countInc = document.getElementById("counter-inc");
console.log(countInc);




// I am going to intialize the counter to 0
let count = 0;
//  making a funtion with a name increment

function increment(){
    count = count + 1;
    countInc.innerText = count;
    
}
let saveEl = document.getElementById("save-el");

function save(){
   let saveEntries = count + "  - ";
//    if I used textContent instead of inner text I can add spaces on the display screen while if I used innertext it will just show me the text written in html element/tag as i added spaces in JS line 19 I can now show these spaces or any styling applied on the specific Id as well 

   saveEl.textContent = saveEl.textContent + saveEntries;
   countInc.innerText = 0
   count = 0
}
save()
