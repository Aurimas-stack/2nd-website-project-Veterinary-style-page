//CHANGES ICON COLOR ON HERO 
function changeIconColor() {
    // VARIABLES DECLARED BELOW
    let place = document.getElementById('change_color1');
    let place2 = document.getElementById('change_color2');
    let icon = document.getElementById('map');
    let phone = document.getElementById('phone');
    //CHANGE ICON COLOR WHEN ON HOVER
    //FOR MAP ICON
    if(place != null) {
        place.addEventListener("mouseover", function() {
            icon.style.color = "#ff7000";
        });
    }
    if(place != null) {
        place.addEventListener("mouseout", function() {
            icon.style.color = 'rgb(0, 0, 0, 0.12)';
        });
    }
    //FOR PHONE ICON
    if(place2 != null) {
            place2.addEventListener("mouseover", function() {
            phone.style.color = "#ff7000";
        });
    }
    if(place2 != null) {
        place2.addEventListener("mouseout", function() {
            phone.style.color = "rgb(0, 0, 0, 0.12)";
     });
    }
};
//calling icon color change function
changeIconColor(); 


//Site header mobile menu
function displayMobileNav() {
    let x = document.getElementById("mobMenu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

//jQuery CHANGES SITE-HEADER HEIGHT ON SCROLL
$(document).scroll(function(){
    if($(this).scrollTop() > 150){   
       $('#header-change > .container').css({"padding":"10px 50px"});
       $('#header-change > .container').css({"background-color":"#f8f7f8"});
    } else {
       $('#header-change > .container').css({"padding":"10px 20px"});
       $('#header-change > .container').css({"background-color":"#fff"});
    }
});

//Opens  read more text below
function AddReadMore() {
    //This limit you can set after how much characters you want to show Read More.
    let carLmt = 450;
    // Text to show when text is collapsed
    let readMoreTxt = "...Read More";
    // Text to show when text is expanded
    let readLessTxt = "Read Less";

    //Traverse all selectors with this class and manupulate HTML part to show Read More
    $(".addReadMore").each(function() {
        if ($(this).find(".firstSec").length)
            return;

        let allstr = $(this).text();
        if (allstr.length > carLmt) {
            let firstSet = allstr.substring(0, carLmt);
            let secdHalf = allstr.substring(carLmt, allstr.length);
            let strtoadd = firstSet + "<span class='SecSec'>" + secdHalf + "</span><span class='readMore'  title='Click to Show More'>" + readMoreTxt + "</span><span class='readLess' title='Click to Show Less'>" + readLessTxt + "</span>";
            $(this).html(strtoadd);
        }

    });
    //Read More and Read Less Click Event binding
    $(document).on("click", ".readMore,.readLess", function() {
        $(this).closest(".addReadMore").toggleClass("showlesscontent showmorecontent");
    });
}
$(function() {
    //Calling function after Page Load
    AddReadMore();
});


   //slideShow function for blog page
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slider");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("active", "");
        }
        if(slides[slideIndex-1] != null && dots[slideIndex-1] != null) {
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex-1].className += " active";
        } 
    }

//DISPLAYS ANIMATED CIRCLES WHILE TYPING IN ABOUT PAGE'S FORM
let circle = document.getElementById('turning-circle1');
let input1 = document.getElementById('form-name-input1');
if(input1 != null) {
    input1.addEventListener('keypress', function() {
    circle.style.display = 'block';
});
    input1.addEventListener('focusout', function() {
    circle.style.display = 'none';
});
}

let circle2 = document.getElementById('turning-circle2');
let input2 = document.getElementById('form-name-input2');
if(input2 != null) {
    input2.addEventListener('keypress', function() {
    circle2.style.display = 'block';
    });
    input2.addEventListener('focusout', function() {
    circle2.style.display = 'none';
    });
}

//FOR CONTACT PAGE CONTACT FORM SQUARE-CIRCLE ANIMATION
let circle_square1 = document.getElementById('turning-square-circle1');
let circle_square2 = document.getElementById('turning-square-circle2');
let circle_square3 = document.getElementById('turning-square-circle3');
let contact_input1 = document.getElementById('form-contact-input1');
let contact_input2 = document.getElementById('form-contact-input2');
let contact_textarea = document.getElementById('form-contact-textarea');

if(contact_input1 != null) {
    contact_input1.addEventListener('keypress', function() {
        circle_square1.style.display = 'block';
    });
    contact_input1.addEventListener('focusout', function() {
        circle_square1.style.display = 'none';
    });
}

if(contact_input2 != null) {
    contact_input2.addEventListener('keypress', function() {
        circle_square2.style.display = 'block';
    });
    contact_input2.addEventListener('focusout', function() {
        circle_square2.style.display = 'none';
    });
}

if(contact_textarea != null) {
    contact_textarea.addEventListener('keypress', function() {
        circle_square3.style.display = 'block';
    });
    contact_textarea.addEventListener('focusout', function() {
        circle_square3.style.display = 'none';
    });
}

//Google maps for Contact Page (will not load completely because billing is not used atm)
let map;

function myMap() {
  const mapOptions = {
    zoom: 8,
    center: { lat: -34.397, lng: 150.644 },
  };
  map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
  const marker = new google.maps.Marker({
    position: { lat: -34.397, lng: 150.644 },
    map: map,
  });
  const infowindow = new google.maps.InfoWindow({
    content: "<p>Marker Location:" + marker.getPosition() + "</p>",
  });
  google.maps.event.addListener(marker, "click", () => {
    infowindow.open(map, marker);
  });
}

//Create delete options for delete selection in shop page
$(".img_title").parent().each((i,e)=> $("#selectOpt").append("<option value='" + e.id + "'>" + e.id + "</option>"));

//Create options of titles for edit selection in shop page
$(".img_title").parent().each((i,e)=> $("#editOpt").append("<option value='" + e.id + "'>" + e.id + "</option>"));

//Delete selected item in shop page
$(document).on('click', '#rmvBtn', function() {
    var del_title = $("#selectOpt").val();
    $.ajax({
         type: 'POST',
         url: 'delete.php',
         cache: false,
         data: {title:del_title},
         success: function(data) {
                $("#"+ $("#selectOpt").val()).remove();
                $("#selectOpt option:selected").remove();
         },
         error: function() {
             alert('Failed');
         }
     });
 })

//Edit selected item in shop page
$(document).on('click', '#editBtn', function() {
    var edit_title = $("#editOpt").val();
    var edit_desc = $('textarea#edit-description').val();
    var edit_price = $('input#edit-price').val();
    $.ajax({
         type: 'POST',
         url: 'edit_shop_item.php',
         cache: false,
         data: {title:edit_title, edit_photo_description:edit_desc, edit_price: edit_price},
         success: function(data) {
         },
         error: function() {
             alert('Failed to edit!');
         }
     });
 })


 //pagination for item shop
let pageSize = 2;
let i = 1;
let showPage = function(page) {
    $('.img_container').hide();
    $('.img_container:gt('+((page-1)*pageSize)+'):lt('+(page)*(pageSize-1)+')').show();
    $('.img_container:eq('+((page-1)*pageSize)+')').show();
}
 
 let pageCount = Math.ceil($('.img_container').length / pageSize);
 let newList = '';
   for(let i = 1; i <= pageCount; i++){
    newList += '<li><a href="#">'+i+'.'+'</a></li>';
 }
 $('#pagin').html('<p class="selectItemPage">Or select the item page:</p>' + newList);
 $('#maxP').text(pageCount);
 $("#pagin li a").click(function() {
     showPage(parseInt($(this).text()));
     return false; 
 });
 showPage(i);

 //pagination with buttons
 $('#prevItem').click(function() {
    if(i != 1) {
        showPage(--i);
        $('#currP').text(i);
    }
 });
 $('#nextItem').click(function() {
    if(i < ($('.img_container').length / pageSize)) {
        showPage(++i);
        $('#currP').text(i);
    }
 });