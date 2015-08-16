(function() {

    var infoSlide = {

        init: function() {
            var dtHeader = $("[class^=dt-header]");

            $("dd").hide();
            dtHeader.addClass("pntr");
            dtHeader.prop("title", "Click to view");

            $("<div></div>", {
                 class: "caret"
            })
                .appendTo(dtHeader);
            this.show()
        },

        show: function() {
            $("dl").on("click", "dt", function() {
                $(this)
                    .next()
                        .slideToggle()
                        .end()
                    .find(".caret")
                        .toggleClass("toggle");
            });
        }

    }

    infoSlide.init();

    var equalColumns = {

        init: function() {
            $("dl").on("click", ".skill-dt", function() {
                var tallest = 0,
                    skillItem = $(".skill-item");

                skillItem.each(function () {
                    var thisHeight = $(this).height();

                    if (thisHeight > tallest) {
                        tallest = thisHeight;
                    };
                });

                skillItem.height(tallest);
            })
        }

    }

    equalColumns.init();

    var getAge = {

        init: function() {
            var today = new Date().getFullYear(),
                age = today - 1992;

            document.getElementById("age").innerHTML=age;
        }

    }

    getAge.init();

})();