//V 1.25

'use strict';

// Init Variables
let reviews = [
    {
        author:'Richard H. Halderman',
        title: 'Retired College Public Relations Director',
        quote: '<i>Death of a Teacher</i> is a love story on many levels...love of a profession, teaching, and especially those men and women who face their own personal demons while battling administrative bureaucracy, overcrowded classrooms, and lack of supplies in attempting to teach dozens of children. It is love of these children, too, who bring with them the problems of home and society. It is a story of a romantic, forbidden love, of love of family, and of a young man’s quest to find and love himself.  With sympathy and understanding, with humor and gentle satire, McShain tells this story through vibrant characters facing personal and physical handicaps.  That many find redemption through love is what sets this novel apart from earlier novels with schoolroom settings.'
    },
    {
        author: 'Eric Steinecke',
        title: 'Front End Web Developer',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus dictum dui, et sodales nibh. Etiam fringilla, tellus elementum semper finibus, nunc odio feugiat dolor, at ornare velit sem vitae ipsum. Proin sed lorem ultricies, aliquet ante quis, mattis leo. Curabitur lobortis nunc at ligula viverra scelerisque. Pellentesque vel odio fermentum, suscipit justo vitae, finibus ante. Mauris eu ullamcorper lectus, sit amet lobortis lacus. Pellentesque fermentum mattis auctor. Proin fermentum magna eget arcu viverra volutpat. Aliquam gravida quam aliquet dui aliquet viverra. Mauris quis dolor tempus, dictum lacus venenatis, vehicula urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed blandit libero eget nibh volutpat tincidunt. Vivamus dapibus facilisis eros a volutpat. Nunc posuere commodo cursus. Nulla non dictum urna. Donec elementum, nibh ac rutrum mattis, lectus nisl euismod mi, a vestibulum ipsum elit at nibh.'
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
        $(this).next('div.read-more').toggleClass('open').scrollTop(0);
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
})