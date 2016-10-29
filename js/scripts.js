$(document).ready(function(){
    // $("button").click(function(){
	   //  $.ajax({
    //         type: 'GET',
    //         url: 'http://www.google.com',
    //         //data: "Hi",
    //         //dataType: 'text',
    //         success: function(result) {
    //             alert("Info sent to backend!");
    //         },
    //         error: function(result) {
    //             alert("Info NOT sent to backend!");
    //         }        
    //     });
    // });
    $("select").imagepicker({
      hide_select : false,
      show_label  : false
    })
      
});

var button = document.getElementById('hideshow'); // Assumes element with id='button'

button.onclick = function() {
    var div = document.getElementById('processedImage');
    if (div.style.display == 'none') {
        div.style.display = 'block';
        $('html, body').animate({
            scrollTop: $("#processedImage").offset().top
        }, 2000);
    }
};

// jQuery(document).ready(function(){
//     jQuery('#content').toggle('show');
//     jQuery('#hideshow').on('click', function(event) {        
//          jQuery('#content').toggle('show');
//     });
// });

//function myFunction() {
//}

//document.getElementById("button").onclick = function() {myFunction()};