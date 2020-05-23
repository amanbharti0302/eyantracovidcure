const currentUserData = async () => {
   var token = localStorage.getItem("token");
   if (token != null) {
      $(".stat_dist_data").removeClass("hide");
      $.post('/liveData', { token: token }, function (data) {
         console.log(data);
         const state = data.state;
         const district = data.district;
         const statewise = data.statewise;
         var stat_active, stat_confirmed, dist_active, dist_confirmed, dist_recovered, stat_recovered;
         for (var i = 0; i < statewise.length; i++) {
            if (statewise[i].state == state) {
               stat_active = statewise[i].active;
               stat_confirmed = statewise[i].confirmed;
               stat_recovered = statewise[i].recovered;
               dist_active = statewise[i].district[district].active;
               dist_confirmed = statewise[i].district[district].confirmed;
               dist_recovered = statewise[i].district[district].recovered;
               break;
            }
         }

         $("#stat_name").html(state);
         $("#dist_name").html(district);
         $("#stat_recovered").html(stat_recovered);
         $("#stat_active").html(stat_active);
         $("#stat_confirmed").html(stat_confirmed);
         $("#dist_active").html(dist_active);
         $("#dist_confirmed").html(dist_confirmed);
         $("#dist_recovered").html(dist_recovered);
      })
   }
   else {
      console.log('currently logged off');
   }
}

currentUserData();