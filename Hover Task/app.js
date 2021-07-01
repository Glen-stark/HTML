const flexBox = document.querySelector(".flex_img").children;


const changeImage = (event) => {
    document.querySelector(".center_image").src = event.children[0].src;
    for ( i = 0; i < flexBox.length; i++) {
      flexBox[i].classList.remove("active");
    }
    event.classList.add("active");
}



let images = document.querySelectorAll("#imgbox");
images.forEach(function(image){
  let text = image.getAttribute("alt");
  image.addEventListener("mouseover", function(e){
    let centerImage = document.querySelector("#parent1 img");
    parent1.setAttribute("alt", text);
    let p = document.querySelector("#para");
    p.innerHTML = text;
    })
})