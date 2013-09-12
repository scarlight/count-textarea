var cs = jQuery.noConflict();

cs(document).ready(function(){

    var maxCount = 500,
        currentCount = 0,
        form = cs("form#commenting"),
        textarea = form.find("textarea#comment"),
        counter = form.find("span.counter"),
        error = "<span class=\"comment-error\" style=\"color:red; font:inherit;\"> Please try reduce your words</span>";

    function showCurrentCount(){
        counter.text(currentCount+"/"+maxCount);
    }

    function errorMessage(){
        if(counter.find("span.comment-error").length > 0){
            counter.find("span.comment-error").stop().delay(50).remove()//delay can keep the error to remain visible when keyboard pressed fast
        }

        showCurrentCount();
        counter.append(error);
        counter.find("span.comment-error").delay(3000).fadeOut(200, function(){
            cs(this).remove();
        });
    }

    function countCharacters(obj){

        currentCount = obj.val().length;
        if((currentCount > maxCount)){
            var trimmed = textarea.val().substring(0, maxCount);
            textarea.val(trimmed);

            currentCount = maxCount;
            errorMessage();
        }
        else{
            showCurrentCount()
        }
    }

    textarea.on("keyup change", function(){
        countCharacters(cs(this));
    });



    cs(window).load(function(){

        // code goes here when window has finish loading

    });

});