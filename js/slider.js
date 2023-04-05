
    var responsiveConfig = [
        {
            breakpoint: 1024,
            settings: {
                slidesPerRow: 5,
                rows: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesPerRow: 4,
                rows: 3,
            }
        },
        {
            breakpoint: 560,
            settings: {
                slidesPerRow: 3,
                rows: 3,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesPerRow: 2,
                rows: 3,
            }
        },
        {
            breakpoint: 368,
            settings: {
                slidesPerRow: 1,
                rows: 3,
            }
        }
    ];

    $('.slider__alcohol').slick({
        infinite: false,
        rows: 3,
        slidesPerRow: 7,
        arrows: true,
        prevArrow: $('#tab-alcohol .prev'),
        nextArrow: $('#tab-alcohol .next'),
        responsive: responsiveConfig,
        lazyLoad: 'ondemand',
    });

    $('.slider__products').slick({
        infinite: false,
        rows: 3,
        slidesPerRow: 7,
        arrows: true,
        prevArrow: $('#tab-products .prev'),
        nextArrow: $('#tab-products .next'),
        responsive: responsiveConfig
    });

    $('.slider__electrical').slick({
        infinite: false,
        rows: 3,
        slidesPerRow: 7,
        arrows: true,
        prevArrow: $('#tab-electrical .prev'),
        nextArrow: $('#tab-electrical .next'),
        responsive: responsiveConfig
    });

    $('.slider__preloader').addClass( 'slider__preloader--loaded' );
