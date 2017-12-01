//V 1.31

'use strict';

// Init Variables
let reviews = [
    {
        author:'Richard H. Haldeman',
        title: 'Retired College Public Relations Director',
        quote: '<i>Death of a Teacher</i> is a love story on many levels...love of a profession, teaching, and especially those men and women who face their own personal demons while battling administrative bureaucracy, overcrowded classrooms, and lack of supplies in attempting to teach dozens of children. It is love of these children, too, who bring with them the problems of home and society. It is a story of a romantic, forbidden love, of love of family, and of a young man’s quest to find and love himself.  With sympathy and understanding, with humor and gentle satire, McShain tells this story through vibrant characters facing personal and physical handicaps.  That many find redemption through love is what sets this novel apart from earlier novels with schoolroom settings.'
    },
    {
        author: 'Jacqueline Baker',
        title: 'CEO, Bon Vivant Studio',
        quote: `Not just a young teacher’s escapades in the public school system, Death probes the deeper strata of his lark of discovery. McShain's account of Dale Barrow’s journey to perdition and back higher than he ever dreamed will create in the reader's soul an afterlife all its own.`
    }
];

jQuery(document).ready(function($){
    
    $('nav a').click(function(e){
        e.preventDefault();
        let hash = $(this.hash);
        $('html, body').animate({
            scrollTop: hash.offset().top
        }, 800);
    });
    
    $('a.read-more-toggle').click(function(e){
        e.preventDefault();
        let content = ($(this).text() === 'Read More...') ? 'Read Less...' : 'Read More...';
        $(this).text(content);
        $(this).parents('div').find('div.read-more').toggleClass('open').scrollTop(0);
    });
    
    for (let i=0; i<reviews.length; i++) {
        let title = (reviews[i].title === null) ? 'Book Reviewer' : reviews[i].title;
        
        $('#reviews-slider').append(
        `<div class='slide'>
            <div class='container'>
                <div class="row">
                    <div class="col-xs-12">
                        <div class="review">
                            <h3>`+reviews[i].author+`</h3>
                            <span class="author-title">`+title+`</span>
                            <q>`+reviews[i].quote+`</q>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        );
    }
    
    $('#reviews-slider').slick({
        slidesToShow:1,
        slidesToScroll:1,
        infinite:true,
        prevArrow: $('#prevArrow'),
        nextArrow: $('#nextArrow'),
        swipe:false,
        responsive: [
            {
                breakpoint:992,
                settings: {
                    arrows:false,
                    swipe: true
                }
            }
        ]
    });
    
    $(document).scroll(function(){
        if ($(this).scrollTop() > 10) {
            $('#to-top').addClass('reveal');
        } else {
            $('#to-top').removeClass('reveal');
        };
    });
    
    $('header').on('click','#to-top.reveal', function(){
       $('html').animate({scrollTop: 0}, 500); 
    });
});