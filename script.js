let hamburger=document.getElementById("hamburger")
let sideMenu=document.getElementById("sideMenu")
let close=document.getElementById("close")
let nav=document.querySelector("nav")
let list=document.querySelector("nav ul")
let moon=document.getElementById("moon")
let sun=document.getElementById("sun")

if (localStorage.theme !== 'dark' || (!('theme' in localStorage))){
    moon.style.visibility="visible"
    sun.style.visibility="hidden"
    document.documentElement.classList.remove('dark')
    console.log("light")
}else{
    sun.style.visibility="visible"
    moon.style.visibility="hidden"
    document.documentElement.classList.add('dark')
    console.log("dark")
}
hamburger.addEventListener("click",()=>{
    hamburger.style.display="none";
    sideMenu.style.display="flex"
})

close.addEventListener("click",()=>{
    hamburger.style.display="block";
    sideMenu.style.display="none"
})

function closeMenu(){
    hamburger.style.display="block";
    sideMenu.style.display="none"
}

window.addEventListener("scroll",()=>{
    if(scrollY>50){
        nav.classList.add("shadow-sm","bg-opacity-50","backdrop-blur-xl","bg-white")
        // nav.classList.remove("backdrop-blur-0")
        list.classList.remove("shadow-sm","bg-white")
    }
    else{
        nav.classList.remove("shadow-sm","bg-opacity-50","backdrop-blur-xl","bg-white")
        list.classList.add("shadow-sm","bg-white")
    }
})

moon.addEventListener("click",()=>{

    if (localStorage.theme !== 'dark' || (!('theme' in localStorage))) {
        document.documentElement.classList.add('dark')
        localStorage.setItem("theme","dark")
        console.log("hi")
        moon.style.visibility="hidden"
        sun.style.visibility="visible"
      }
})
  
sun.addEventListener("click",()=>{
    if (localStorage.theme !== 'light') {
        document.documentElement.classList.remove('dark')
        localStorage.setItem("theme","light")
        console.log("hey")
        sun.style.visibility="hidden"
        moon.style.visibility="visible"
      }
})