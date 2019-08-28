$(document).ready(function() {
    $('.selectPlayers').hide();
    $('#characterLeft').hide();
    $('#characterRight').hide();

    $('#beach').mouseenter(function(){
        $('.wrapper').css('background-image', 'url(/RoadPunchers/dojo_arena_photos-master/beach.jpg)')
        });
       
    $('#planet').mouseenter(function(){
        $('.wrapper').css('background-image', 'url(/RoadPunchers/dojo_arena_photos-master/earth.jpg)')
        });    

    $('#dojo').mouseenter(function(){
        $('.wrapper').css('background-image', 'url(/RoadPunchers/dojo_arena_photos-master/dojo.jpg)')
        });   

    $('#forest').mouseenter(function(){
        $('.wrapper').css('background-image', 'url(/RoadPunchers/dojo_arena_photos-master/forest.jpg)')
        });    

    $('#matrix').mouseenter(function(){
        $('.wrapper').css('background-image', 'url(/RoadPunchers/dojo_arena_photos-master/matrix.jpg)')
        });   

    $('#snow').mouseenter(function(){
        $('.wrapper').css('background-image', 'url(/RoadPunchers/dojo_arena_photos-master/snow.jpg)')
        });   
    
    $('button').click(function(){
        $('.selectArena').hide(), 
        $('.selectPlayers').show(),
        $('#characterLeft').show(),
        $('#characterRight').show()
    });

    $('select.playerOne').change(function(){
        var selectedPlayer = $(this).children('option:selected').val();
        $('#characterLeft').attr('src', selectedPlayer)
    });

    $('select.playerTwo').change(function(){
        var selectedPlayer = $(this).children('option:selected').val();
        $('#characterRight').attr('src', selectedPlayer)
    });

});