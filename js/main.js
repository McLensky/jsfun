$(document).ready(function () {




    //Score Keeper

    var total = 0;

    function changeTotal(points) {
        total = total + points;
        return total;
    }
    $('.home button').click(function () {
            total = total + parseInt($(this).text())
            $('.score').text(total);
        })
        /*$('.add1').click(function () {
                newTotal = changeTotal(1);
                $('.score').text(newTotal);
            })
            
                $('.add1').click(function () {
                    total = total + 1;
                    $('.score').text(total);
                })

                $('.add2').click(function () {
                    total = total + 2;
                    $('.score').text(total);
                })

                $('.add3').click(function () {
                    total = total + 3;
                    $('.score').text(total);
                })

                $('.sub1').click(function () {
                    total = total - 1;
                    $('.score').text(total);
                })

                $('.reset').click(function () {
                    total = 0;
                    $('.score').text(total);
                })
            */

    //Compare That
    $('.compare').click(function () {
        //alert('hello');
        var comparison;
        var a = $('#value1').val(); //.val() gets value entered
        var b = $('#value2').val(); //.val() gets value entered

        if (a < b) {
            comparison = '<';
        } else if (a > b) {
            comparison = '>';
        } else if (a == b) {
            comparison = '==';
        } else {
            comparison = 'N/A'
        }

        $('#comparison').text(comparison);
    })

    //Light Switch
    var lights = "on";
    $('.light-switch').click(function () {
        if (lights == "on") {
            $('#light-switch').attr('id', 'dark');
            lights = "off";
        } else {
            $('#light-switch').attr('id', 'light-switch');
            lights = "on";
        }
    })

    $('header ul li a').hover(function () {
        $('.mega-menu').slideDown();
    }, function () {
        $('.mega-menu').slideUp();
    })
    
    $('button.fadeIn').click(function(){
        $(this).next().fadeToggle();
    })
})