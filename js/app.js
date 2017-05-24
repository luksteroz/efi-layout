document.addEventListener("DOMContentLoaded", function () {

    const buttonMenu = document.querySelector(".dropdown-toggle");
    const dropMenu = document.querySelector(".hamburger-menu");
    const costHistory = document.querySelectorAll(".cost");
    const buttonSearch = document.querySelector(".glyphicon-search");
    const inputSearch = document.getElementById("search");
    const historyDetail = document.querySelectorAll(".glyphicon-menu-down");
    const dropHistory = document.querySelectorAll(".details-history");

    for (var i = 0; i < costHistory.length; i++) {
        if (parseInt(costHistory[i].dataset.value) > 0) {
            costHistory[i].style.color = "green";
        } else{
            costHistory[i].style.color = "black";
        }
    }

    console.log(dropMenu);

    buttonMenu.addEventListener("click", function () {
        event.preventDefault();
        dropMenu.classList.toggle("open");
        this.parentElement.classList.toggle("open");
    });



    buttonSearch.addEventListener("click", function () {
        event.preventDefault();
        inputSearch.classList.toggle("visible");
    });

    const power = document.querySelector(".glyphicon-off")
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

    const toggleButton = document.querySelector(".slider")
    const showChart = document.getElementById("chart");
    toggleButton.addEventListener("click", function(){
        if (showChart.style.display == "block") {
            showChart.style.display = "none";
        }else {
            showChart.style.display = "block";

        }
    });


});
