const hamburger = document.querySelector(".hamburger");
const layers = document.querySelectorAll(".hamburger span");

hamburger.addEventListener("click", (e) => {
  layers.forEach((layer) => layer.classList.toggle("active"));
});

$(document).ready(function() {
    /* show menu */
    $('.btn-togglemenu').click(function(event) {
        event.preventDefault();
        $('.megamenu').animate({
            width: "toggle"
        });
        $('.btn-togglemenu span').toggle();
    });
    /* reset menu */
    $(window).resize(function() {
        var $window = $(window);
        function checkWidth() {
            var windowsize = $window.width();
            if (windowsize > 480) {
                $('.megamenu').show();
                $('.btn-togglemenu').html('<span>☰</span><span style="display: none;">✖</span>');
            } else {
                $('.megamenu').hide();
            }
        }
        checkWidth();
    });
    /* finally: load content submenu */
    $('.sub-item').click(function(event) {
        event.preventDefault();
        var id = $(this).attr('data-id');
        $('.sub-menu-content').html('<img src="images/load.gif" style="margin:0 auto; display:block" alt="load" />');
        $.ajax({
            method: 'get',
            url: 'partials/content' + id + '.html',
            success: function(data) {
                setTimeout(function() {
                    $('.sub-menu-content').html(data);
                }, 200);
            }
        })
    })
});

