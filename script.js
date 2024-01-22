document.addEventListener('DOMContentLoaded', function () {
    console.log("Javascript is Running")
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
           
            alert('Pricing tier selected!');
         

        });
    });
});
