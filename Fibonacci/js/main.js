$(document).ready(function () {
    var counter = 0;
    $('#fibonacciClick').click(function () {
        if(counter<1) {
            $('#fibonacciClick').append(' sequence');
            counter++;
        }
    });

    var reseted = 0;
    var numbers = [1,1];
    function nextNumber(){
        var n = numbers.length;
        var num1 = numbers[n-1];
        var num2 = numbers[n - 2];
        var newNum = num1 + num2;
        numbers.push(newNum);
        $('#field').append(" " + newNum);
    }
    $('#button').click(function() {
                nextNumber();
         $('#field').slideDown('slow');
            });


    $('#hide').click(function(){
        $('#field').slideUp('slow');
    });

    $('#show').click(function(){
        $('#field').slideDown('slow');
    });

    $('#reset').click(function(){
        $('#field').text("0 1 1");
        numbers = [1,1];
    });
});
