function openWin() {
    window.open("pop1.html", "", "width=550, height=300");
}

function closeWin() {
    close();
}


function openWin1() {
    window.open("pop2.html", "", "width=550, height=300");
}

function closeWin1() {
    close();
}

function show(state1, state2){
   let menu1 = document.getElementById(state1);
   let menu2 = document.getElementById(state2);
   let  menus = document.getElementById("menus");
   if (menu1.style.display === "none"){
       menu1.style.display = "block";
       menu2.style.display = "none";
   }
   else {
       menu1.style.display = "none";
       menu2.style.display = "block";
   }
   if (state1 === "close"){
       menus.style.display = "flex";
   }
   else {
       menus.style.display = "none";
   }
}
