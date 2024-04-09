
    function toggleNav() {
        var navList = document.querySelector('.navbar ul');
        if (navList.style.display === "none" || navList.style.display === "") {
            navList.style.display = "block";
        } else {
            navList.style.display = "none";
        }
    }