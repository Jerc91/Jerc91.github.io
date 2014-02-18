// Called the API of Youtube
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

$(document).ready(function () {
    // Scroll
    $("#content").onepage_scroll({ sectionContainer: 'section', easing: 'ease', animationTime: 1000, pagination: true, updateURL: false, loop: false, menus: ".menu" });
});

// When API is ready
//---------------------------------
function onYouTubeIframeAPIReady() {
    // implementación del hilo
    j.tools.fnThread({
        Data: listVideos,
        Template: $("#tmpListVideos").html(),
        WorkerJs: "assets/js/workers/worker.js",
        Success: function (e) {
            $("#dvListVideos").html(e.data);
            $("#dvListVideos").owlCarousel({ items: 2 });
            j.youtube.fnInit(listVideos.list);
        } // end function success 
    }); // end function thread
} // end function
//---------------------------------

var listVideos = {
    list: [
        { videoId: "NaN1rZrYjVk", title: "Elfen Lied" },
        { videoId: "eOnDgn79EKc", title: "Hellsing" },
        { videoId: "Qy7Q77ZD_ME", title: "Fate Stay Night" },
        { videoId: "f2LTeuPuQFk", title: "Darkstalkers" },
        { videoId: "pfkibyaU2CE", title: "Vampire Hunter D" },
        { videoId: "AVhDYks1ea8", title: "Dante's Infierno" },
        { videoId: "3MOK2mM2cRk", title: "Trinity Blood" },
        { videoId: "3zQsitzESTg", title: "Blood+" },
        { videoId: "FjBKtvX5Cpg", title: "Gantz" },
        { videoId: "wRgErTn7khI", title: "Basilisk" },
        { videoId: "rFxcsgVwmTM", title: "Highlander" }
    ]
};

(function () {
    // properties private
    var done = false;
    //---------------------------------
    // Player is aready
    function onPlayerReady(event) {
        //event.target.playVideo();
    }
    //---------------------------------

    // On change state of video
    //---------------------------------
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
            for (var i in listVideos.list) {
                if (listVideos.list[i].videoId.toLowerCase() != event.target.o.id.toLowerCase())
                    listVideos.list[i].video.stopVideo();
            } // end for
        } // end if
    } // end function
    //---------------------------------

    // Stop video
    //---------------------------------
    function stopVideo() {
        player.stopVideo();
    } // end function
    //---------------------------------

    // Load all videos
    //---------------------------------
    function fnInit(data) {
        for (var i in data) {
            data[i].video = new YT.Player(data[i].videoId, {
                videoId: data[i].videoId,
                playerVars: { controls: 0, rel: 0, showinfo: 0, wmode: "transparent", html5:1 },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                } // end new
            });
        } // end for
    } // end function
    //---------------------------------

    // Public API
    //---------------------------------
    this.fnInit = fnInit;
    //---------------------------------
}).apply(j.fnAddNS("youtube"));
$.extend(j.youtube, { Author: 'Julian Ruiz', Created: '2014-02-16', Page: 'http://jerc91.github.io/', Title: 'Tool for API Iframe of Youtube' });