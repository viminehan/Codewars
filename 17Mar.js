function areYouPlayingBanjo(name) {
    let hasBigR = name.startsWith('R');
    let hasLittleR = name.startsWith('r');
     if (hasBigR == true || hasLittleR == true) {
       return name + " plays banjo";
     } else {
       return name + " does not play banjo";
     }
   }