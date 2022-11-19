jQuery(function() {
	$('#view').click(
        function(){
            changeDisplay('view');
            $(this).text("1");
            $('#secound').fadeIn();
            $(this).css('opacity', '1');
            $('#secound').css('opacity', '0.5');
            $("#product-list").hide();
            $('#product-list').fadeIn(1800);
        }
    );

    $('#secound').click(
        function() {
            changeDisplay("secound_page");
            $(this).css('opacity', '1');
            $('#view').css('opacity', '0.5');
            $("#product-list").hide();
            $('#product-list').fadeIn(1800);
        }
    );

    $('.product').click(
        function() {
            console.log("test");
            let id = $(this).attr('id');
            selected_product = id;
            window.location.href = "../View/product_info.html";
        }
    );

    $('.toggle_btn').click(
        function() {
            $('.mask').fadeIn();
        }
    );

    $('.mask').click(
        function() {
            $(this).fadeOut();
        }
    );
});