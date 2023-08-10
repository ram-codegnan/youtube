$(document).ready(function(){
    var API_KEY = "AIzaSyDwgr0sXXC2OXtxdFl1P728xn0mAeLtUGE"; // Replace with your actual API key
    var video = '';

    $("#form").submit(function (event) { 
        event.preventDefault();
        var search = $("#search").val();
        videoSearch(API_KEY, search, 10);
    });

    function videoSearch(key, search, maxResults) {
        $("#videos").empty();
        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search, function (data){
            console.log(data);
            data.items.forEach(item => {
                video = document.createElement("iframe");
                video.width = "420";
                video.height = "315";
                video.src = "http://www.youtube.com/embed/" + item.id.videoId;
                video.frameBorder = "0";
                video.allowFullscreen = true;
                $("#videos").append(video);
            });
        });
    }
});
