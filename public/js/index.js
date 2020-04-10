$(document).ready(function () {
 
  $("#progress-bar").onscroll();
  window.onload = function () {    
    var token = localStorage.getItem("token");
    if (token != null) {
      $.post('/tokencheck', { token: token }, function (data) {
        if (data == 404) { alert('session expired'); localStorage.removeItem("token");location.replace('/'); }
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

  $("#forgotpassword").click(function(e){
    $(".passwordgrpcon").css('display','none');
    $("#h3login").html("Enter your Email");
    $("#signup-call").css('display','none');
    $("#forgotpassword").css('display','none');
    $("#btn-sub").css('display','none');
    $("#btn-forgot").css('display','block');
    e.preventDefault();
  })

$("#btn-forgot").click(function(e){
  var email = $("#email").val();
  if(email == ""){alert("please enter your email"); }
  else{
    $.post('/forgotpassword',{email:email},function(data){
      if(data.stat == 200){
        alert(data.message);
        location.replace('/');
      }
      else if(data.stat == 404){
        alert(data.message);
      }
      else{
        alert('Internal sever ERROR');
        location.replace('/');
      }
    })
  }
  
    e.preventDefault();
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
        $("#signup-sub").attr("disabled", true);
        if (data.stat == 500) { alert(data.message.errmsg);$("#signup-sub").attr("disabled", false); }
        else {
          $("#signup-sub").attr("disabled", true);
          alert(data.message);
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

  // $("#livestatlink").click(function(e){    ///////////////protecting navbar mein id bhi dena h
  //   const token = localStorage.getItem("token");
  //   if(!token){location.replace('/#popup');}
  //   else{
  //     $.post('/protect',{token:token},function(data){
  //       if(data.name == 'JsonWebTokenError'){
  //         alert(data.message);
  //         location.replace('/');
  //       }
  //       else if(data.stat= 200){
  //          location.replace('/livestat');
  //        }
  //       else if(data.stat = 404){
  //         location.replace('/#popup');
  //       }
  //      else{
  //          alert('something wrong');
  //        }
  //     })
  //   }
  //   e.preventDefault();
  // })


  $("#buy").click(function(e){
    const token = localStorage.getItem("token");
    if(!token){location.replace('#popup');}
    else{
      $.get(`/buyer/${token}`,{token:token},function(data){
        if(data == 'true'){
          location.replace('/buyertab');
        }
        else{
          alert('session timed out');
          location.replace('/#popup');
        }
      })
    }
    e.preventDefault();
  })

  $("#sell").click(function(e){
    const token = localStorage.getItem("token");
    if(!token){location.replace('#popup');}
    else{
      $.get(`/buyer/${token}`,{token:token},function(data){
        if(data == 'true'){
          location.replace('/sellertab');
        }
        else{
          alert('session timed out');
          location.replace('/#popup');
        }
      })
    }
    e.preventDefault();
  })

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