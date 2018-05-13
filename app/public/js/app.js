$(document).ready( function(){
    
    var modal = $("#result")
    var span = $(".close");
    modal.hide();
    $(span).on("click", function() {
        modal.hide();
    });

    $(document).on("click","#match", function(event){
        event.preventDefault();
        var q1 = parseInt($("#q1").val());
        var q2 = parseInt($("#q2").val());
        var q3 = parseInt($("#q3").val());
        var q4 = parseInt($("#q4").val());
        var q5 = parseInt($("#q5").val());
        var q6 = parseInt($("#q6").val());
        var q7 = parseInt($("#q7").val());
        var q8 = parseInt($("#q8").val());
        var q9 = parseInt($("#q9").val());
        var q10 = parseInt($("#q10").val());

        var scoresArray = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
        var newFriends ={
            name: $("#name").val().trim(),
            image: $("#newimage").val().trim(),
            scores: scoresArray
        }

        $.post({
            url: "/api/friends", 
            data: JSON.stringify(newFriends),
            contentType: 'application/json',
            method: 'POST'})
            .then(function(data) {     
            $("#matchImage").attr("src",data.image)
            $("#matchName").text(data.name)
            modal.show();
            
        });

        });

});