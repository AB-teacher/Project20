function isTouching(object1,object2) {

    var centerDistanceX = object2.width/2 + object1.width/2;
    var centerDistanceY = object2.height/2 + object1.height/2;
    if (object1.x - object2.x < centerDistanceX
      && object2.x - object1.x < centerDistanceX
      && object1.y - object2.y < centerDistanceY
      && object2.y - object1.y < centerDistanceY) {
        //object1.shapeColor = "red";
        //object2.shapeColor = "red";
        return true;
  }
  else {
    //object1.shapeColor = "green";
    //object2.shapeColor = "green";
    return false;
  }
  
  }