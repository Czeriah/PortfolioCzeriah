var gallerie = document.querySelectorAll('#plop');
var overlay = document.querySelectorAll('#overlay');
overlay.style.display = 'none';
var count = null;

overlay.forEach(item => {
  item.addEventListener('dblclick', function load() {
      count = Array.from(gallerie).indexOf(item);
      overlay.style.display = 'block';
      body.style.overflow = 'hidden';
      overlay.style.overflow = 'auto';
      footer.style.display = 'none';
      overlay.style.animation = 'display 0.5s ease';

        if (count == 0) {
          content1.style.display = 'block';
      } else if (count == 1) {
          content2.style.display = 'block';
      } else if (count == 2) {
          content3.style.display = 'block';
      } else if (count == 2) {
           content4.style.display = 'block';
      } else if (count == 2) {
            content5.style.display = 'block';
      } else if (count == 2) {
            content6.style.display = 'block';
      } else if (count == 2) {
           content7.style.display = 'block';
      } else if (count == 2) {
           content8.style.display = 'block';
      } else if (count == 2) {
           content9.style.display = 'block';
      } else if (count == 2) {
        content10.style.display = 'block';
    }
      
      else {
          overlay.style.display = 'none';
      }

  });
});

// // if {
//   function on() {
//     document.getElementById("overlay").style.display = "block";
//   }
//   //     if {
//   //       document.getElementsByClassName("content1").style.display =(".project_description" , "content1"),
//   //     }
//   // }
  
//   function off() {
//     document.getElementById("overlay").style.display = "none";
//   } 
// // }
