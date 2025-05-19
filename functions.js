function toggleStyleSheet(){
    let element = document.getElementById("stylesheet");
    let name = element.getAttribute("href");  

    if(name == "style1.css") {
        element.setAttribute("href", "style2.css");
        localStorage.setItem("style", "style2.css");
    } else {
        element.setAttribute("href", "style1.css");
        localStorage.setItem("style", "style1.css");
    }
}
window.onload = function(){
    if(localStorage.getItem("style") != "style1.css" && localStorage.getItem("style") != "style2.css") {
        localStorage.setItem("style", "style1.css");
    }
    document.getElementById("stylesheet").setAttribute("href", localStorage.getItem("style"));
}