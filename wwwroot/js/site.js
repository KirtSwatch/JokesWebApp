// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

    <script>
        document.addEventListener('DOMContentLoaded', function () {
    var dynamicElement = document.getElementById('dynamic-element');

        dynamicElement.addEventListener('click', function () {
            dynamicElement.style.backgroundColor = '#ffcc00';
        dynamicElement.style.color = '#2c3e50'; /* Change text color on click */
    });
  });
    </script>
