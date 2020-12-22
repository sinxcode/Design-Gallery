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



  var leftArrow = document.getElementById("leftarrow");
  var rightArrow = document.getElementById("rightarrow");
  var obj = document.getElementById("gallery");
  var pages = document.getElementsByClassName("pages");


  var j = 1;

  function changePages() {

      if (0 <= j && j < 4) {

          pages[j].classList.toggle("fas");

          pages[j + 1].classList.toggle("far");

          pages[j].classList.toggle("far");

          pages[j + 1].classList.toggle("fas");






      } else if (j == 4) {

          pages[4].classList.toggle("far");


          pages[0].classList.toggle("fas");
          pages[4].classList.toggle("fas");
          pages[0].classList.toggle("far");






      }

  }

  function shiftright() {


      changePages();

      if ((j + 1) == 6) {

          obj.backgroundImage = "url('img1.jpg')";

          j = 0;

      }








      var src = "img" + (j + 1) + ".jpg";

      obj.style.backgroundImage = "url" + "(" + (src) + ")";

      j++;









  }

  function shiftleft() {

      document.getElementById("page1").classList.toggle("far");

      document.getElementById("page1").classList.toggle("fas");

      document.getElementById("page2").classList.toggle("fas");

      document.getElementById("page2").classList.toggle("far");



      var images = document.getElementsByClassName("img");



  }
