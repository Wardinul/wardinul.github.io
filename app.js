$(document).ready(function(){
  $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 50) {
        $("nav").css("background", "linear-gradient(234deg, rgba(101,118,163,1) 0%, rgba(101,60,5,0.9805672268907563) 0%, rgba(60,22,113,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(14,3,28,1) 0%, rgba(18,4,36,0.9217436974789917) 0%, rgba(26,7,50,0.7732843137254902) 0%, rgba(41,21,106,1) 0%, rgba(0,0,0,1) 0%, rgba(6,4,11,1) 0%, rgba(25,13,46,1) 0%, rgba(31,16,56,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(2,1,4,1) 0%, rgba(22,15,29,1) 0%, rgba(28,18,43,1) 0%, rgba(0,0,0,1) 0%, rgba(26,14,47,1) 0%, rgba(24,9,46,1) 0%, rgba(0,0,0,1) 0%, rgba(28,27,27,1) 0%, rgba(23,22,22,1) 0%, rgba(21,20,20,1) 0%, rgba(0,0,0,1) 0%, rgba(49,89,188,1) 0%, rgba(61,75,168,1) 0%, rgba(35,14,131,1) 0%, rgba(34,14,132,1) 0%, rgba(34,14,132,1) 0%, rgba(38,93,168,1) 0%, rgba(75,118,201,1) 22%, rgba(61,105,193,1) 49%, rgba(17,69,145,1) 100%, rgba(107,102,13,1) 100%, rgba(56,55,5,1) 100%, rgba(17,17,158,1) 100%, rgba(0,0,0,1) 100%, rgba(40,40,107,0.885329131652661) 100%, rgba(49,115,204,1) 100%");
      }
      else{
        $("nav").css("background", "rgba(21, 85, 187, 0.733)");
        $("nav").css("transition", ".5s")
      }
  })
})           
                
                $(document).ready(function() {
  var $videoSrc;
  $(".video-btn").click(function() {
    $videoSrc = $(this).data("src");
  });
  $("#myModal").on("shown.bs.modal", function(e) {
    $("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });
  $("#myModal").on("hide.bs.modal", function(e) {
    $("#video").attr("src", ""); // Remove the video source.
  });
});

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
})

