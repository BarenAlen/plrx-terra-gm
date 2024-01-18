$(function () {

    var tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    tag.onload = onYouTubeIframeAPIReady

    let player;

    function onYouTubeIframeAPIReady() {
        window.YT.ready(function() {
            player = new YT.Player("trailer", {
                videoId: "-0iWxG907jg",
                events: {
                    "onReady": onPlayerReady,
                    "onError": onPlayerError,
                    "onStateChange": onPlayerStateChange
                }
            })
        })
    }

    function onPlayerReady(event) {
        console.log("player ready", event)
        $(".trailer-btn").click(function () {
            $(this).addClass("playing");
    
            player.playVideo();
        });
    }

    function onPlayerError(event) {
        console.log("player error", event)

        $(".trailer-btn").click(function () {
            alert("Ошибка видео.")
        });
    }

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
            $(".section-1").removeClass("hand-move");
            $(".hand").addClass("hand-off");
            $(".trailer-btn").unbind("mouseout");
        }
    }
});
