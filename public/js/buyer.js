$(document).ready(function () {
         var token = localStorage.getItem("token");
        if (token != null) {
            $.post('/getinfo',{token:token},function(data){
                if(data.stat == '200'){
                    $("#inputName").val(data.currentUser.name) ;
                    $("#inputPhone").val(data.currentUser.mobile);
                    $("#Address").val(data.currentUser.address1);
                    $("#inputEmail").val(data.currentUser.email);
                    $("#inputstate").val(data.currentUser.state);
                    $("#inputdistrict").val(data.currentUser.district);
                    
                }
                else{
                    alert('session expired');
                    location.replace('/');
                }
            })
        }
        else{
            alert('session timed out');
            location.replace('/');
        }     
    
    $("#addbtn").click(function(e){
         $("#new").clone().prependTo("#items");
         //$("#addbtn").remove();
        e.preventDefault();
    })


    // $("#buyer-btn").click(function(e){
    //     var name =  $("#inputName").val();
    //     var phone = $("#inputPhone").val();
    //     var email = $("#inputEmail").val();
    //     var address = $("#Address").val();
    //     var order = $("#order_item").val();

    //     alert(order);
    //     e.preventDefault();
    // })

})
