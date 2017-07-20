;(function($){

    // Wait for document ready
    $(document).ready(function(){


        hasMoreCheck();


        // Handle post click
        $('.post-more-toggle').on('click', function(event){
            event.preventDefault();

            // Expand/collapse the post
            $(this).closest('.post').toggleClass('post-expanded');

            // Relayout isotope
            $('.blog-masonry-container').isotope('layout');
        });
    });

    $(window).on('resize', function(){
        hasMoreCheck();
    });

    function hasMoreCheck(){
        $('.post-content').each(function(){
            if($(this).height() < this.scrollHeight){
                $(this).closest('.post').addClass('post-has-more');
            };
        });

    };

})(jQuery);
