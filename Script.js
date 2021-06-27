function toggleShown(id, ids) {
    for (var i = 0; i < ids.length; i++) {
        if(ids[i] == id)
            continue;
        document.getElementById(ids[i]).style.display = "none";
    }
    var element = document.getElementById(id);

    if(element.style.display == "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}