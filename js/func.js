var slide = (function() {
    var $dtHeader = $(".dt-header"),
        $dd = $("dd");

    $dd.hide();

    // Add carets if user has JavaScript enabled
    $("<div></div>", {
        class: "caret"
    }).appendTo($dtHeader);

    $dtHeader.addClass("pntr")
                .prop("title", "Click to view")
                .on("click", infoSlide);

    function infoSlide() {
        $(this)
            .parent()
            .next()
            .slideToggle()
            .end()
            .find(".caret")
            .toggleClass("toggle");
    }
})();

var setAge = (function () {
    var today = new Date().getFullYear(),
        yearOfBirth = 1992,
        age = today - yearOfBirth;

    document.getElementById("age").innerHTML=age;
})();