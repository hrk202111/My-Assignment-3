function feetToMile(mile){
    var feet = mile * 0.000189394;
    return feet;
}



function woodCalculator(chair, table, khat){
    var chairWoodCount = chair * 10;
    var tableWoodCount = table * 30;
    var khatWoodCount = khat * 50;
    var totalWoodCount = chairWoodCount + tableWoodCount + khatWoodCount;
    return totalWoodCount;
}




function tinyFriend(friendName){
    var tinyWord = friendName.split(' ');
    var shortest = Infinity;
  
    for (var i = 0; i < tinyWord.length; i++){
      var wordLength = tinyWord[i].length;
      if (wordLength < shortest){
        shortest = wordLength;
      }
    }
    return shortest;
  }
  

  

