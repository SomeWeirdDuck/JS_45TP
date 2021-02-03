window.addEventListener('load', function() {
        let button1 = document.getElementById('ff1');
        let button2 = document.getElementById('ff2');
        button1.addEventListener("click", function() {
            window.location.href = "https://shrek-mult.ru/";
        });
    button2.addEventListener("click", function() {
    var x= prompt('Введите цвет:', '');
    document.body.style.background=x;
});
});