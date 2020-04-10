$(document).ready(function(e){

    var token = localStorage.getItem("token");
        if (token != null) {
            $.post('/getinfo',{token:token},function(data){
                if(data.stat == '200'){
                    $.post('/getdataofproduct',{token:token},function(data){
                        if(data.stat == 200){
                            const allproduct = data.allproduct;
                            allproduct.map((el)=>{

                                ol = $("<ol>")
                                var orderlength = el.order_item.length;
                                for(var i=0;i<orderlength;i++)
                                {li = $(`<li>${el.order_item[i]} - ${el.quantity[i]}</li>`)
                                  ol.append(li);
                                }
                                overlay = $(`<div class="overlay" onclick="book('${el.email}')">`)
                                overlay.append($(`<h2 style="font-size:17px;margin-bottom: 0;">${el.name}</h2>`))
                                overlay.append($(`<p style="font-size: 17px;margin-bottom: 0;">phone no:- ${el.mobileno}</>`))
                                overlay.append($(`<p style="font-size: 17px;margin-bottom: 0;">Email:- ${el.email}</p>`))
                                overlay.append($(`<p style="font-size: 17px;margin-bottom: 0;">address: ${el.address}</p>`))
                                overlay.append($(`<a style="font-size: 17px;margin: 0px 0px 0px 10px;">click here to book </a>`))

                                html=$('<div class="order_items col-3">')
                                        .append(ol)
                                        
                                html.append(overlay);                               
                                $(".row").append(html);
                            })
                            
                        }
                        else if(data.stat == 404){
                            alert('Session timed out');
                            localStorage.clear();
                            location.replace('/');
                        }
                        else{
                            alert('there is something error');
                            localStorage.clear();
                            location.replace('/');
                        }
                    })                    
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

})

function book(email){
    const token = localStorage.getItem("token");
    $.post('/bookproduct',{email:email,token:token},function(data){
        if(data.stat== '200'){
            alert(data.message);
            location.reload();
        }
        else{
            alert('there is something error');
        }
    })
}