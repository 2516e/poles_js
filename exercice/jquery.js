document.querySelector("#change").addEventListener("click", function(){
    document.querySelector("#blue").style.backgroundColor = "green"
})



document.querySelector("#onizuka").addEventListener("click", function(){
    let height = this.height
    height = height + 20 + 'px'
    this.style.height = height
})



document.querySelector("input").addEventListener("change", function(){
    let bgColor = document.querySelector("input").value;
    document.querySelector("body").style.backgroundColor = bgColor
})



document.querySelector("#bordered-div").addEventListener("click", function(){
    let height = this.height
    height = '200px'
    this.style.height = height
    
    let width = this.width
    width = '200px'
    this.style.width = width
})



const slideImages = document.querySelectorAll(".slide");
console.log(slideImages.length)

let timer = setInterval(function(){
    let active = document.querySelector(".active").id
    let value = parseInt(active.replace("image", ""))
    slideImages.forEach(function(element){
        element.classList.remove("active")
    })
    if ( value == slideImages.length){
        value = 0;
    } 
    slideImages[value].classList.add("active")
},2000)
