var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var arrowLett = window.document.getElementById("arrow-left")
var arrowRight = window.document.getElementById("arrow-right")


function scrowToRight() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    arrowLett.style = "visibility:visible; margin-top: 55px"
    arrowRight.style = "visibility:hidden"
    
}

function scrowToLeft() {
    leonardo.style ="display:flex"
    bruna.style ="display:none"
    arrowLett.style = "visibility:hidden; margin-top: 55px"
    arrowRight.style = "visibility:visible"

}