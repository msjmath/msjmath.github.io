var header=
  '<div class="header">'+
    '<div style="position:relative;left:7%;top:20px;width:150px;height:60px;overflow:hidden;">'+
      '<img src="logo.png" style="height:75px;width:150px;"/>'+
    '</div>'+
    '<ul style="position:absolute;right:7%;top:33px;width:648px;height:auto;overflow:hidden;background:red;z-index:91;">'+
      '<li><a class="nav" href="index.html">Home</a></li>'+
      '<li><a class="nav" href="lectures.html">Lectures</a></li>'+
      '<li><a class="nav" href="events.html">Events</a></li>'+
      '<li><a class="nav" href="mmt.html">MMT</a></li>'+
      '<li><a class="nav" href="magmar.html">MagMaR</a></li>'+
      '<ul class="nav navbar-nav">'+
      '<li class="dropdown">'+
            '<a href="#" class="dropdown-toggle" data-toggle="dropdown">MagMaR<span class="caret"></span></a>'+
            '<ul class="dropdown-menu" role="menu">'+
             ' <li><a href="/magmar">General Information</a></li>'+
              '<li><a href="/magmar">Schedule</a></li>'+
            '</ul>'+
      '</li>'+
       '</ul>'+
      '<li><a class="nav" href="contact.html">Contact</a></li>'+
    '</ul>'+
    '<div class="line"></div>'+
  '</div>';

var footer=''


setup =function(){
  document.body.innerHTML=header+document.body.innerHTML+footer;
};
