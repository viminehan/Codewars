function getGrade (s1, s2, s3) {
    let bigGrade = s1 + s2 + s3;
    let avgGrade = bigGrade / 3;
    
    if (avgGrade <= 100 && avgGrade >= 90) {
      return 'A';
    } else if (avgGrade < 90 && avgGrade >= 80) {
      return 'B';
    } else if (avgGrade < 80 && avgGrade >= 70) {
      return 'C';
    } else if (avgGrade < 70 && avgGrade >= 60) { 
      return 'D';
    } else if (avgGrade < 60 && avgGrade >= 0) {
      return 'F';
    };
} 
