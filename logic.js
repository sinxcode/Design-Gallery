  var DropdownmMenu = document.getElementById("dropdown");




  const bars =
      document.getElementById("bars");
  const bar = document.getElementsByClassName("bar");


  function barsclick() {

      if (DropdownmMenu.style.visibility == "visible") {
          DropdownmMenu.style.visibility = "hidden";

          document.getElementsByTagName("body")[0].style.overflow = "scroll";


          for (let i = 0; i < 3; i++) {
              bar[i].classList.remove("bar-selected");
              DropdownmMenu.style.height = 0 + "px";



          }

      } else {
          DropdownmMenu.style.visibility = "visible";


          document.getElementsByTagName("body")[0].style.overflow = "hidden";







          DropdownmMenu.style.height = 100 + "%";
          for (let i = 0; i < 3; i++) {
              bar[i].classList.add("bar-selected");
          }
      }

  }


  function closeMenu() {

      if (DropdownmMenu.style.visibility == "visible") {
          DropdownmMenu.style.visibility = "hidden";

          document.getElementsByTagName("body")[0].style.overflow = "scroll";


          for (let i = 0; i < 3; i++) {
              bar[i].classList.remove("bar-selected");
              DropdownmMenu.style.height = 0 + "px";



          }

      }
  }

  function ScrollFunction() {


      document.getElementsByTagName("body")[0].style.overflow = "scroll";

      closeMenu();

  }
