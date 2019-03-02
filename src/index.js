/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
 //jshint esversion:6
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0;
  for (i=1; i <= preferences.length; i++){
    // find 1st pair
    var firstPair = [i,preferences[i-1]];
    // second pair
    if (firstPair[1]>preferences.length) {
      continue;
    } else {
      secondPair = [firstPair[1],preferences[firstPair[1]-1]];
    }
    if (secondPair[1]>preferences.length) {
      continue;
    }
    if (preferences[secondPair[1]-1]==firstPair[0]){
      count++;
    }
    }
    return (count-count%3)/3;
  };
