$(document).ready(function () {
  $("#progress-bar").onscroll();
  window.onload = function () {

    ////////////////////////////////////////////////checks whether it is loged in or not
    var token = localStorage.getItem("token");
    if (token != null) {
      $.post('/tokencheck', { token: token }, function (data) {
        if (data == 404) { alert('session expired'); localStorage.removeItem("token"); }
        else if (data.stat == 200) {
          //alert(data.currentuser.email);
          document.getElementById("popup").style.display = "none";
          document.getElementById("login").style.display = "none";
          document.getElementById("logout").style.display = "block";
        }
        else if (data.stat == 505) { alert(data.message); localStorage.removeItem("token"); }
      })
    }
    else {
      //////////////////////////////////////////////////////////////check token
      document.getElementById("popup").style.display = "block";
      document.getElementById("login").style.display = "block";
      document.getElementById("logout").style.display = "none";
    }

    ////////////////////////////////////////////////for piechart in livedata
    $.get("/totaldata", function (data, status) {
      var options = {
        title: {
          text: "COVID-19 Patient"
        },
        data: [{
          type: "pie",
          startAngle: 45,
          showInLegend: "true",
          legendText: "{label}",
          indexLabel: "{label} ({y})",
          yValueFormatString: "#,##0.#" % "",
          dataPoints: [
            { label: "active", y: data.active },
            { label: "deaths", y: data.deaths },
            { label: "recovered", y: data.confirmed - data.active },
          ]
        }]
      };
      $("#chartContainer").CanvasJSChart(options);
    });
  }

})



$(document).ready(function () {
  ////////////////////////////////////////////login form
  $("#btn-sub").click(function (e) {
    var email = $("#email").val();
    var password = $("#password").val();

    if (email == "" || password == "") alert('please fill the form correctly');
    else {
      $.post("/public/login", { email: email, password: password }, function (data) {
        if (data.stat == -1) { alert(data.message); }
        else {
          const token = data.token;
          localStorage.setItem("token", token);
          document.getElementById("popup").style.display = "none";
          document.getElementById("login").style.display = "none";
          document.getElementById("logout").style.display = "block";
        }
      })
    }
    e.preventDefault();
  })

  /////////////////////////////////////////////////////submit form
  $("#logout").click(function (e) {
    localStorage.removeItem("token");
    document.getElementById("popup").style.display = "block";
    document.getElementById("login").style.display = "block";
    document.getElementById("logout").style.display = "none";
  })


  $("#signup-sub").click(function (e) {                                 /////////////////changed 7 april 2020
    var name = $("#signup-name").val();
    var email = $("#signup-email").val();
    var mobile = $("#signup-mobile").val();
    var state = $("#listBox").val();
    var district = $("#secondlist").val();
    var address1 = $("#address-line1").val();
    var address2 = $("#address-line2").val();
    var password = $("#signup-password").val();
    var passwordconfirm = $("#signup-passwordconfirm").val();

    if (name == "" || email == "" || mobile == "" || state == "" || district == "" || address1 == "" || address2 == "" || password == "" || passwordconfirm == "") alert('please fill the form correctly');
    else if (mobile.length != 10) alert('wrong mobile number');
    else if (password.length < 8) alert('length of password must be greater than equal to 8');
    else if (password != passwordconfirm) { alert("password confirm did not matched"); }

    else {
      $.post("/signup", { name: name, email: email, mobile: mobile, state: state, district: district, address1: address1, address2: address2, password: password, passwordconfirm: passwordconfirm }, function (data) {

        if (data.stat == -1) { alert(data.message.errmsg); }
        else {
          $("#signup-sub").attr("disabled", true);
          const token2 = data.token;
          localStorage.setItem("token", token2);

          location.replace('/');
        }
      });
    }

    e.preventDefault();
  })

  $("#signup-call").click(function (e) {
    location.replace('/signup');
    e.preventDefault();
  })

  // $("#livestatlink").click(function(e){    ///////////////protecting///////////////////////////////////////working funcn changed 7april2020
  //   const token = localStorage.getItem("token");
  //   if(!token){location.replace('/#popup');}
  //   else{
  //     $.post('/protect',{token:token},function(data){

  //       if(data.stat= 200){
  //         location.replace('/livestat');
  //       }
  //       else{
  //         alert('something wrong');
  //       }
  //     })
  //   }
  //   e.preventDefault();
  // })

})

$.fn.onscroll = function (options) {
  // This is the easiest way to have default options.
  var settings = $.extend({
    backgroundColor: "#f00",
    height: '4px',
    position: 'fixed'
  }, options);
  var mySelector = this.selector;
  this.each(function () {
    $(window).scroll(function () {
      var offsettop = parseInt($(this).scrollTop());
      var parentHeight = parseInt($('body, html').height() - $(window).height());
      var vscrollwidth = offsettop / parentHeight * 100;
      $(mySelector).css({ width: vscrollwidth + '%' });
    });
    $(mySelector).css({
      backgroundColor: settings.backgroundColor,
      height: settings.height,
      position: settings.position
    });
  });
  return this;
};

function scrollToTop() {
  $('html,body').animate({ scrollTop: 0 }, 'slow');
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.


}