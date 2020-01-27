function switch_color_mode(){
    if(document.body.style.color !== "white"){
        set_dark();
    }
    else{
        set_light();
    }
}

function set_dark(){
    invert_image("switch", "100%");
    invert_image("nav1", "100%");
    invert_image("nav2", "100%");
    invert_links("navbar", "orangered");
    invert_parent("a1", "orangered");
    document.body.style.color = "white";
    document.body.style.backgroundColor = "#1B1B1B";
}

function set_light(){
    invert_images("0%");
    invert_links("navbar", "#b41017");
    invert_parent("a1", "#b41017");
    document.body.style.color = "#222";
    document.body.style.backgroundColor = "white";
}