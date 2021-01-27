$(document).ready(function () {
    $("button").click(function () {
        // $.get("https://akademia108.pl/api/ajax/get-post.php")
            // .done(function (data) {
            //     let userId = $("<p></p>").text("UserId: " + data.userId);
            //     let id = $("<p></p>").text("ID: " + data.id);
            //     let title = $("<p></p>").text("Title: " + data.title);
            //     let body = $("<p></p>").text("Body: " + data.body);
            //     let hr = $("<hr />");

            //     $("body").append(userId);
            //     $("body").append(id);
            //     $("body").append(title);
            //     $("body").append(body);
            //     $("body").append(hr);

            // })
            // .fail(function (error) {
            //     console.error(error);
            // })

            $.getJSON("https://akademia108.pl/api/ajax/get-post.php")
            .done(function (data) {
                let userId = $("<p></p>").text("UserId: " + data.userId);
                let id = $("<p></p>").text("ID: " + data.id);
                let title = $("<p></p>").text("Title: " + data.title);
                let body = $("<p></p>").text("Body: " + data.body);
                let hr = $("<hr />");

                $("body").append(userId);
                $("body").append(id);
                $("body").append(title);
                $("body").append(body);
                $("body").append(hr);

            })
            .fail(function (error) {
                console.error(error);
            })
    })
})