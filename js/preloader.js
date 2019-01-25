const numberOfphotos = 6
function preloader() {
	for (let i = 1; i <= numberOfphotos; i++) {
        document.getElementById("preload-0" + i).style.background = "url(img/photo" + i + ".jpg) no-repeat -9999px -9999px";
    }	
}

preloader()

window.onload = function() {
    document.getElementById("loading").style.display = "none";
    for (let i = 1; i <= numberOfphotos; i++) {
        document.getElementById("preload-0" + i).style.display = "none"
    }
}