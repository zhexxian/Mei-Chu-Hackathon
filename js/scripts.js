$(document).ready(function(){
    $("button").click(function(){
	    $.ajax({
            type: 'GET',
            url: 'https://kiwi-blog.herokuapp.com/records.json',
            success: function(result) {
                //alert("Info sent to backend! ID: "+result[0].id);

                var img = new Image();
                var div = document.getElementById('updated-images');

                img.onload = function() {
                  div.appendChild(img);
                };

                img.src = result[0].image_url;
            },
            error: function(result) {
                alert("Error connecting to backend!");
            }        
        });
    });
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