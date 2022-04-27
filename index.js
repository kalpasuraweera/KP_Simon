

gameStart=false;
$(document).keypress(function(e) {
  if(gameStart==false){
    gameStart=true;
    playList=[];
    clickList=[];
    var newPlate = newPlateGenrator();
    playList.push(newPlate);
    animatePlate(newPlate);
    $('.titletext').text('Level '+ playList.length);
    $('.plate').click(function(){ // button click ekak unbama mee kotasa run wenwa ee nisa loop anm manm ooni naa
      console.log(this.innerHTML);
      animatePlate(this.innerHTML); // animate the clicked plate
      var listid=clickList.length;
      clickList.push(this.innerHTML);
      if(playList[listid]==this.innerHTML){ // aluthen clixk karna ekk gane chek karnwa okkoma check karnna bala inne naa.. ekak hari wardunot refresh wenwa
        console.log('correct');
      }else{
        console.log('wrong');
        location.reload();

      }
      if(playList.length==clickList.length){
        console.log('win');
        clickList=[];
        setTimeout(function (){ 
          newPlate = newPlateGenrator();
          playList.push(newPlate);
          animatePlate(newPlate);
          $('.titletext').text('Level '+ playList.length);
        },1000);


      }
    });



  }
});

// genarate new plate
function newPlateGenrator() {
  var randomNumber = Math.ceil(Math.random() * 4);
  switch (randomNumber) {
    case 1:
      return 'a';
      break;
    case 2:
      return 's';
      break;
    case 3:
      return 'd';
      break;
    case 4:
      return 'f';
      break;
    default:
      return 'a';

  }
}

function animatePlate(plateElement){
  var plateSound = new Audio('sound/' + plateElement + '.mp3');
  plateSound.play();
  $('.' + plateElement).attr('id', 'platepress');
  setTimeout(function() {
    $('.' + plateElement).removeAttr("id");
    console.log(plateElement);
  }, 500);

}
