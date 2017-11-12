//V 1.152

'use strict';

// Init Variables
let reviews = [
    {
        author:'Eric Steinecke',
        picUrl: '',
        rating: 'three',
        quote: 'Lorm ipsum dolor sit amet...'
    },
    {
        author:'',
        picUrl: '',
        rating: 'five',
        quote: 'Lorm ipsum dolor sit amet...'
    },
    {
        author:'',
        picUrl: '',
        rating: 'four',
        quote: 'Lorm ipsum dolor sit amet...'
    },
    {
        author:'',
        picUrl: '',
        rating: 'three',
        quote: 'Lorm ipsum dolor sit amet...'
    },
    {
        author:'',
        picUrl: '',
        rating: 'five',
        quote: 'Lorm ipsum dolor sit amet...'
    },
    {
        author:'',
        picUrl: '',
        rating: 'five',
        quote: 'Lorm ipsum dolor sit amet...'
    },
];

jQuery(document).ready(function($){
    
    $('nav a').click(function(e){
        e.preventDefault();
        let hash = $(this.hash);
        $('html, body').animate({
            scrollTop: hash.offset().top
        }, 800);
    });
    for (let i=0; i<reviews.length; i++) {
        let picUrl = (reviews[i].picUrl === '') ? 'assets/guyfawkes.png' : reviews[i].picUrl;
        let author = (reviews[i].author === '') ? 'Anonymous' : reviews[i].author;
        
        $('#reviews-slider').append(
        "<div class='slide'>\
        <div class='author-img' style='background-image:url("+picUrl+");'></div>\
        <h3>"+author+"</h3>\
        <div class='rating "+reviews[i].rating+"-star'>\
            <span></span><span></span><span></span><span></span><span></span>\
        </div>\
        <blockquote>"+reviews[i].quote+"</blockquote>\
        </div>"
        );
    }
    
    $('#reviews-slider').slick({
        slidesToShow:4,
        slidesToScroll:3,
        infinite:true,
        prevArrow: $('#prevArrow'),
        nextArrow: $('#nextArrow'),
        responsive: [
            {
                breakpoint:1280,
                settings: {
                    arrows:false
                }
            },
            {
                breakpoint:992,
                settings: {
                    slidesToShow:3,
                    slidesToScroll:2
                }
            },
            {
                breakpoint:768,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:2
                }
            },
            {
                breakpoint:481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1
                }
            }
        ]
    });
})