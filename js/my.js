
$(document).ready(
    function () {
        console.log('adaptive');
        $('.burger').click(function (event) {
            $('.burger,.menu').toggleClass('active');
        });
    }
);