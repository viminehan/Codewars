// My Solution
function enough(cap, on, wait) {
    if (on + wait > cap) {
     return wait - (cap - on);
   } else {
     return 0;
   } 
   }

   //Their Solution
   function enough(cap, on, wait) {
    return (on+wait > cap) ? on+wait-cap : 0;
  }