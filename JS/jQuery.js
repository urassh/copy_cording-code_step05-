jQuery(function() {
	$('a').click(
        function(){
            changeDisplay('view');
        }
    );
    $('li').click(
        function(e) {
            let id = $(this).attr('id');
            selected_product = id;
            window.location.href = "../View/product_info.html";
        }
    );
});