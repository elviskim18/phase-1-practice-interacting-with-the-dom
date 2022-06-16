
document.addEventListener("DOMContentLoaded", () => {

    //add counter
    setInterval(timer,1000)

})

///////////////////////////////////////////////////////////////////////////
//add comments --
document.getElementById("comment-form").addEventListener('submit', (e) => {
    e.preventDefault();
    displayComments(e.target.comment_input.value)
})

function displayComments(comment){
    let p = document.createElement('p');
    p.textContent = comment;
    document.getElementById('list').appendChild(p)
}

/////////////////////////////////////////////////////////////////////
const counter = document.getElementById("counter")
let currentTime = 0

function timer() {
    currentTime ++
    counter.innerHTML = currentTime
}



//subtract button
document.getElementById("minus").addEventListener('click',subtract)
function subtract(){
    if(currentTime > 0){
        counter.innerText = currentTime -=1
    }
    else{
        counter.innerText = currentTime = 0
    }
    
}

//add function
document.getElementById("plus").addEventListener('click', () =>{
    if(currentTime > 0){
        counter.innerHTML = currentTime +=1
    }
    
})

//like button
let con = document.getElementById("con")


document.getElementById("heart").addEventListener('click', display)

function display(){
    let li = document.createElement("li")
    let ul = document.createElement("ul")
    let likedElements = document.getElementsByClassName('likes')


    li.textContent = `${currentTime} has been liked`;
    ul.appendChild(li)
    likedElements.appendChild(ul)
    
}
//////pause button
let pause = document.getElementById('pause')
pause.addEventListener("click", function(){
    currentValue = document.getElementById("pause").innerText

    if(currentValue === "pause"){
        this.innerText ="resume",
        minus.disabled = true,
        plus.disabled = true,
        heart.disabled = true,
        submit.disabled = true,
        clearInterval(currentTime)
    }
    else {
        this.innerText = "pause",
        minus.disabled =false,
        plus.disabled = false,
        heart.disabled =false,
        submit.disabled =false
    
    }
})
