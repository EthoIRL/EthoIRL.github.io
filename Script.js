
function DarkmodeSwitch() {
    var element = document.body;
    element.classList.toggle("Dark-Mode");
}

function isDarkMode() {
    var element = document.body;
    if(element.classList.value === "Dark-Mod")
        return true;
    return false;
}