$('nav ul li a').click(function () {
    let thisSection = $(this).attr('href');
    let thisLink = $(this);

    $('html, body').stop().animate({
        scrollTop: $(thisSection).offset().top - 200
    }, 800, "easeOutCirc", function () {
        $('nav ul li a').removeAttr('class');
        $(thisLink).addClass('selected');

        // alert( $(window).scrollTop());
    });
});


$(window).on('load', function () {
    const alllinks = $('nav ul li a');
    const posts = $('section');
    let pageTop;
    let postPos;
    let counter = 0;
    let prevCounter = 0;
    let doneResizing;
    let postTops = [];

    resetPagePosition();

/*     posts.each(function () {
        postTops.push(Math.floor($(this).offset().top));
    });

    console.log(postTops); */

    $(window).scroll(function () {
        pageTop = $(window).scrollTop() + 210;
        if (pageTop > postTops[counter + 1]) {
            counter++;
            console.log(`scrolling down ${counter}`);
        }

        else if (counter > 0 && pageTop < postTops[counter]) {
            counter--;
            console.log(`scrolling up !!! ${counter}`);
        }

        if (counter != prevCounter) {
            $(alllinks).removeAttr('class');
            $('nav ul li a').eq(counter).addClass('selected');
            prevCounter = counter;
        }
    });

    $(window).on('resize', function () {
        clearTimeout(doneResizing);
        doneResizing = setTimeout(function () {


            resetPagePosition();

        }, 500);

    });

    function resetPagePosition() {
        postTops = [];

        posts.each(function () {
            postTops.push(Math.floor($(this).offset().top));
        });

        let pagePosition = $(window).scrollTop() + 210;
        counter = 0;

        for (let i = 0; i < postTops.length; i++) {
            if (pagePosition > postTops[i]) { counter++; }
        }
        counter--;
        $(alllinks).removeAttr('class');
        $('nav ul li a').eq(counter).addClass('selected');
    };
});