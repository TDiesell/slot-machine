 const betButtons=document.getElementsByClassName("bet")
 const slots=document.getElementsByClassName("slots")
 const numbers=[1,2,3,4,5]
 let score= document.querySelector(".results")
 let winOrLose= document.querySelector(".winOrLose")
 score.innerText=100
 let results= document.querySelector(".results")
 for(let i = 0; i< betButtons.length; i++){
    betButtons[i].addEventListener("click",play)
    
 }
 function play(e){
   
     if(score.innerText-e.target.innerText<0){
        winOrLose.innerText="you broke"
        return
     }
     else{
        for(let i = 0; i< slots.length; i++){
            slots[i].innerText=numbers[Math.floor(Math.random() * 5)]
            
         }
     }
     if(slots[0].innerText === slots[1].innerText && slots[1] === slots[2]){
        score.innerText= score.innerText * 2
        winOrLose.innerText="you won"
        
     }
         else{
            score.innerText=score.innerText-e.target.innerText
            winOrLose.innerText="you lost"
         }
 }