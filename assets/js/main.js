$(function () {
	var section1Height = $(".section-1").outerHeight();
	var section1Width = $(".section-1").width();
	var x, y;
	var $hand = $(".hand");
	var handX = parseInt($hand.css('left'));
	var handY = parseInt($hand.css('bottom'));
	var hx;

	$(".section-1.hand-move").bind("mousemove", function (e) {
		hx = parseInt($hand.css('left'));

		x = e.pageX * 100 / section1Width;
		y = e.pageY * 100 / section1Height;


		$hand.css("left", handX + -x);
	});

	function bindHandMove() {

		$(".section-1.hand-move").bind("mousemove", function (e) {
			hx = parseInt($hand.css('left'));

			x = e.pageX * 100 / section1Width;
			y = e.pageY * 100 / section1Height;


			$hand.css("left", handX + -x);
			$hand.css("bottom", handY + y / 2);
		});
	}


	$(".trailer-btn").mouseover(function () {
		$(".section-1").unbind("mousemove");
		$hand.addClass("hand-off");
	});

	$(".trailer-btn").bind("mouseout", function () {
		$hand.removeClass("hand-off");

		setTimeout(function () {
			bindHandMove();
		}, 300);
	});

	bindHandMove();

    $("#page-nav-menu a").on("click", function(e) {
        let hash = e.target.hash
        let currentUrl = window.location

        $("#page-nav-menu a").each(function(index, item) {
            item.parentElement.classList.remove("active")
        })

        e.target.parentElement.classList.add("active")
    })
});
