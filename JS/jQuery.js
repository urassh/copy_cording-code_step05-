window.onload = function() {
    $("#product-list").hide();
    $('#product-list').fadeIn(1500);
}

jQuery(function() {
	$('#view').click(
        function(){
            list.changeDisplay('view');
            $(this).text("1");
            $('#secound').fadeIn();
            $(this).css('opacity', '1');
            $('#secound').css('opacity', '0.5');
            $("#product-list").hide();
            $('#product-list').fadeIn(1500);
        }
    );

    $('#secound').click(
        function() {
            list.changeDisplay("secound_page");
            $(this).css('opacity', '1');
            $('#view').css('opacity', '0.5');
            $("#product-list").hide();
            $('#product-list').fadeIn(1500);
        }
    );

    $('.product').click(
        function() {
            let id = $(this).attr('id');
            console.log(id);
            selected_product = id;
            // window.location.href = "../View/product_info.html";
        }
    );

    $('.toggle_btn').click(
        function() {
            if ($('.mask').css('display') === 'block') {
                $('#top-bar').css('background-color', "#242424");
                $('#bottom-bar').css('background-color', "#242424");
                $('#top-bar').css('transform','rotate(0deg)');
                $('#bottom-bar').css('transform','rotate(0deg)');
                $('#bottom-bar').css('top','20px');
                $('.mask').fadeOut();
            } else {
                $('.mask').fadeIn();
                $('#top-bar').css('background-color', "#fff");
                $('#top-bar').css('transform','rotate(-45deg)');
                $('#bottom-bar').css('background-color', "#fff");
                $('#bottom-bar').css('transform','rotate(45deg)');
                $('#bottom-bar').css('top','10px');
                console.log("test-3");
            }
            menuShow();
        }
    );

    $('.mask').click(
        function() {
            $(this).fadeOut();
            $('#top-bar').css('background-color', "#242424");
            $('#bottom-bar').css('background-color', "#242424");
            $('#top-bar').css('transform','rotate(0deg)');
            $('#bottom-bar').css('transform','rotate(0deg)');
            $('#bottom-bar').css('top','20px');
            menuShow();
        }
    );
});

const menuShow = ()=> {
    if($('#menu').hasClass("SlideOut")){
        // スライドメニューが非表示なら表示
        $('#menu').removeClass('SlideOut');
        $('#menu').addClass('SlideIN');
    } else {
        // スライドメニューがあれば非表示
        $('#menu').removeClass('SlideIN');
        $('#menu').addClass('SlideOut');
    }
};