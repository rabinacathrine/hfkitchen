let container= document.getElementById("container")
// toggle between signup and sign in
toggle =() =>{
    container.classList.toggle("sign-in")
    container.classList.toggle("sign-up")
}

setTimeout(() => {
    container.classList.add("sign-in")
}, 200);