$(document).ready(function (e) {

   var token = localStorage.getItem("token");
   if (token != null) {
      $.post('/getinfo', { token: token }, function (data) {
         if (data.stat == '200') {
            $.post('/getMyOrder', { token: token }, function (data) {
               if (data.stat == 200) {
                  const bookedproduct = data.bookedProduct;
                  const unbookedproduct = data.unbookedProduct;

                  bookedproduct.map((el) => {
                     ul = $("<ul>")
                     var orderlength = el.order_item.length;
                     for (var i = 0; i < orderlength; i++) {
                        li = $(`<li>${el.order_item[i]} - ${el.quantity[i]}</li>`)
                        ul.append(li);
                     }
                     statCard = $(`<div class="shadow bg-color stat-card mr-4 mb-4">`)
                     statCard.append(ul);
                     statCard.append($(`<h2>Status :- Booked</h2>`));
                     statCards = $(".stat-cards");
                     statCards.append(statCard);

                  })

                  unbookedproduct.map((el) => {
                     ul = $("<ul>")
                     var orderlength = el.order_item.length;
                     for (var i = 0; i < orderlength; i++) {
                        li = $(`<li>${el.order_item[i]} - ${el.quantity[i]}</li>`)
                        ul.append(li);
                     }
                     statCard = $(`<div class="shadow bg-color stat-card mr-4 mb-4">`);
                     statCard.append(ul);
                     statCard.append($(`<h2>Status :- Unbooked</h2>`));
                     statCards = $(".stat-cards");
                     statCards.append(statCard);

                  })
               }
               else if (data.stat == 404) {
                  alert('Session timed out');
                  localStorage.clear();
                  location.replace('/');
               }
               else {
                  alert('there is something error');
                  localStorage.clear();
                  location.replace('/');
               }
            })
         }
         else {
            alert('session expired');
            location.replace('/');
         }
      })
   }
   else {
      alert('session timed out');
      location.replace('/');
   }

})