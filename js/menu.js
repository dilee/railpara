$(document).on("pagecreate","#homepage",function(){
    var icon = document.getElementById('menubutton');
    var open = false;
    $("#menubuttonblock").on("tap",function(){
        if(open){
            icon.className = 'menu-icon';
        } else{
            icon.className = 'menu-icon open';
        }
        open = !open;
    });

    $("#menu").on("panelbeforeclose",function(){
        if(open){
            icon.className = 'menu-icon';
        } else{
            icon.className = 'menu-icon open';
        }
        open = !open;
    });

});