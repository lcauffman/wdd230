document.addEventListener("DOMContentLoaded", function () {
    var lastModified= document.lastModified;

    var options = { year: 'numeric', month: 'long', day: 'numeric'};

    var formattedDate = newDate(lastModified).toLocaleDateString('en-US', options);
    document.getElementById("lastModified").textContent = "Last Modified: " + formattedDate;
});