(function() {
    'use strict';

    function onClickMenuHandler(event) {
        event.preventDefault();

        var parent = this.parentElement;

        dropMenu.classList.toggle('open');
        parent.classList.toggle('open');
    }

    function domContentLoadedHandler(event) {
        var buttonMenu = document.querySelector(".dropdown-toggle"),
            dropMenu = document.querySelector(".hamburger-menu"),
            costHistory = document.querySelectorAll(".cost"),
            buttonSearch = document.querySelector(".glyphicon-search"),
            inputSearch = document.getElementById("search"),
            historyDetail = document.querySelectorAll(".glyphicon-menu-down"),
            dropHistory = document.querySelectorAll(".details-history");

        for (var i = 0; i < costHistory.length; i++) {
            if (parseInt(costHistory[i].dataset.value) > 0) {
                costHistory[i].style.color = "green";
            } else{
                costHistory[i].style.color = "black";
            }
        }

        console.log(dropMenu);

        buttonMenu.addEventListener('click', onClickMenuHandler);

        buttonSearch.addEventListener("click", function () {
            event.preventDefault();
            inputSearch.classList.toggle("visible");
        });

        var power = document.querySelector(".glyphicon-off")
        power.addEventListener("click", function () {
            event.preventDefault();
            this.style.color = this.style.color === "red" ? "white" : "red";
        });


        for (var i = 0; i < dropHistory.length; i++) {

            historyDetail[i].addEventListener("click", function(){
                event.preventDefault();
                this.parentElement.nextElementSibling.classList.toggle("show");
            })
        }

        var toggleButton = document.querySelector(".slider")
        var showChart = document.getElementById("chart");
        toggleButton.addEventListener("click", function(){
            if (showChart.style.display == "block") {
                showChart.style.display = "none";
            }else {
                showChart.style.display = "block";

            }
        });
    }

    document.addEventListener('DOMContentLoaded', domContentLoadedHandler);
})();
