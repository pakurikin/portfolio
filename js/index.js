// ハンバガーメニュー
$(function () {
    $('.toggle').click(function () {
        $(this).toggleClass('active');
        $('.nav_inner').toggleClass('open');
    });
});


// 黒くなる
$(function () {
    $('.toggle').click(function () {
        $(this).toggleClass('forcus');
        $('.nav_bg').toggleClass('bg');
    });
});


// ヘッダーの固定
// $(function () {
//     let target = $("#header").offset().top;
//     $(window).on("scroll", function () {
//         let currentPos = $(window).scrollTop();
//         if (currentPos > target) {
//             $("#header").addClass('sticky');
//         } else {
//             $("#header").removeClass('sticky');
//         }
//     });
// });


// フェイドイン上
$(function () {
    $(window).scroll(function () {
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();

        $('.fade-in-up').each(function () {
            const targetPosition = $(this).offset().top;
            if (scroll > targetPosition - windowHeight + 100) {
                $(this).addClass("is-fadein");
            }
        });
    });
});

// フェイドイン下
$(function () {
    $(window).scroll(function () {
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();

        $('.fade-in-down').each(function () {
            const targetPosition = $(this).offset().top;
            if (scroll > targetPosition - windowHeight + 100) {
                $(this).addClass("is-fadein");
            }
        });
    });
});

// フェイドイン右
$(function () {
    $(window).scroll(function () {
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();

        $('.fade-in-right').each(function () {
            const targetPosition = $(this).offset().top;
            if (scroll > targetPosition - windowHeight + 100) {
                $(this).addClass("is-fadein");
            }
        });
    });
});

// フェイドイン左
$(function () {
    $(window).scroll(function () {
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();

        $('.fade-in-left').each(function () {
            const targetPosition = $(this).offset().top;
            if (scroll > targetPosition - windowHeight + 100) {
                $(this).addClass("is-fadein");
            }
        });
    });
});
