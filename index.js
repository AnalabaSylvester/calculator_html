let display = document.getElementById("screen")

// this function clears any thing written on the screen
const wipe = () =>{
    display.value = ''
}

// this function displays the numbers on the calculator cscreen
const show = (n) =>{
    display.value += n 
}

const cal = () =>{

    try{ 
        display.value = eval(display.value)
    } catch(err){
        display.value = "Sntax error"
    }

}