(function() {
    'use strict';


    function domContentLoadedHandler(event) {
        var buttonMenu = document.querySelector(".dropdown-toggle"),
            dropMenu = document.querySelector(".hamburger-menu"),
            costHistory = document.querySelectorAll(".cost"),
            buttonSearch = document.querySelector(".glyphicon-search"),
            inputSearch = document.getElementById("search"),
            historyDetail = document.querySelectorAll(".glyphicon-menu-down"),
            dropHistory = document.querySelectorAll(".details-history"),
            toggleButton = document.querySelector(".slider"),
            showChart = document.getElementById("chart"),
            toggleButton = document.querySelector(".slider"),
            showChart = document.getElementById("chart"),
            power = document.querySelector(".off"),
            menuItem = document.querySelectorAll(".menu-item");

        for (var i = 0; i < costHistory.length; i++) {

            if (parseInt(costHistory[i].dataset.value) > 0) {
                costHistory[i].style.color = "green";
            } else{
                costHistory[i].style.color = "black";
            }

        }

        buttonMenu.addEventListener('click', onClickMenuHandler);

        buttonSearch.addEventListener("click", onClickSearchHandler);

        power.addEventListener("click", onClickPowerHandler);

        toggleButton.addEventListener("click", onClickToggleChartHandler);



        function onClickMenuHandler(event) {
            event.preventDefault();

            var parent = this.parentElement;

            dropMenu.classList.toggle('open');
            parent.classList.toggle('open');
        }

        function onClickSearchHandler(event){
            event.preventDefault();

            inputSearch.classList.toggle("visible");

        }

        function onClickPowerHandler(event) {

            event.preventDefault();
            this.style.color = this.style.color === "red" ? "white" : "red";

        }

        function onClickToggleChartHandler(event){
            if (showChart.style.display == "block") {
                showChart.style.display = "none";
            }else {
                showChart.style.display = "block";
            }
        }

        for (var i = 0; i < dropHistory.length; i++) {

            historyDetail[i].addEventListener("click", function(event){

                event.preventDefault();
                var elementSibling = this.parentElement.nextElementSibling;
                elementSibling.classList.toggle("show");

            })
        }


        for (var j = 0; j < menuItem.length; j++) {

            menuItem[j].addEventListener("click", function(event){

                for (var k = 0; k < menuItem.length; k++) {

                    menuItem[k].classList.remove("active-menu");
                }

                this.classList.add("active-menu")
            });
        }
    }

    document.addEventListener('DOMContentLoaded', domContentLoadedHandler);
})();
