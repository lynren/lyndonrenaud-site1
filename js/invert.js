function invert_images(percentage){
    var images = document.getElementsByTagName("img");
    for(let i = 0; i < images.length; ++i){
        images[i].style.filter = "invert(" + percentage +")";
    }
}

function invert_links(elem_id, color){
    var elem = document.getElementById(elem_id);
    for(let i = 0; i < elem.childNodes.length; ++i){
        if(elem.childNodes[i].href){
            elem.childNodes[i].style.color = color;
        }
    }
}