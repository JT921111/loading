function hide(){
  const loadinglist = document.getElementsByClassName('loading');
  const followinglist = document.getElementsByClassName('following');
  for( var i = 0; i < loadinglist.length; i ++){
    loadinglist[i].style.display = "none";
  }
  for( var i = 0; i < followinglist.length; i ++){
    followinglist[i].style.display = "none";
  }
}

function change(){
  const selected = document.getElementById('animate').selectedIndex;
  const loadinglist = document.getElementsByClassName('loading');
  const followinglist = document.getElementsByClassName('following');
  switch(selected){
    case 0:
      document.getElementById('animate').style.backgroundImage = "url(images/arrow.png), url(images/arrow.png)";
      for( var i = 0; i < loadinglist.length; i ++){
        loadinglist[i].style.display = "none";
      }
      for( var i = 0; i < followinglist.length; i ++){
        followinglist[i].style.display = "none";
      }
      break;
    case 1:
      document.getElementById('animate').style.backgroundImage = "none";
      for( var i = 0; i < loadinglist.length; i ++){
        loadinglist[i].style.display = "";
      }
      for( var i = 0; i < followinglist.length; i ++){
        followinglist[i].style.display = "none";
      }
      break;
    case 2:
      document.getElementById('animate').style.backgroundImage = "none";
      for( var i = 0; i < loadinglist.length; i ++){
        loadinglist[i].style.display = "none";
      }
      for( var i = 0; i < followinglist.length; i ++){
        followinglist[i].style.display = "";
      }
      break;
  }
}