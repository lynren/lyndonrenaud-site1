function switch_color_mode(){
    if(document.body.style.color !== "white"){
        set_dark();
    }
    else{
        set_light();
    }
}

function set_dark(){
    invert_images("100%");
    invert_links("p1", "orangered");
    invert_links("p2", "orangered");
    document.body.style.color = "white";
    document.body.style.backgroundColor = "#1B1B1B";
}

function set_light(){
    invert_images("0%");
    invert_links("p1", "#b41017");
    invert_links("p2", "#b41017");
    document.body.style.color = "#222";
    document.body.style.backgroundColor = "white";
}