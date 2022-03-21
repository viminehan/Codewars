function find_average(array) {
  
    let arrayTotal = 0;
      
    if (array.length == 0) {
      return 0;
    } else {  
    for (i = 0; i < array.length; i++) {
      arrayTotal += array[i];
    }
      return (arrayTotal / array.length);
    }
    }
      