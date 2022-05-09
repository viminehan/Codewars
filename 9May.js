function even_or_odd(number) {
    let result = number % 2;
    if (result == 0) {
      return "Even";
      } 
    else { 
      return "Odd";
    }
  }
  function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let newSharkSpeed = sharkSpeed;
    let SecondsToPontoon = pontoonDistance / youSpeed;
      
    if (dolphin) {
      newSharkSpeed = sharkSpeed / 2;
    } else {};
    
    let SecondsForSharkToYou =  sharkDistance / newSharkSpeed; 
    
    
    if (SecondsForSharkToYou > SecondsToPontoon) {
      return "Alive!"
    } else if (SecondsForSharkToYou < SecondsToPontoon) { 
      return "Shark Bait!"} else {}
    }
    