function isPasswordValid(input){
  if (hasUpperCase(input) && hasLowerCase(input) && isLongEnough(input) && hasSpecialCharacter(input)){
    console.log('Password Valid');
  }
  if (!hasUpperCase(input)){
    console.log('Error: No UpperCase');
  }
  if (!hasLowerCase(input)){
    console.log('Error: No LowerCase');
  }
  if (!isLongEnough(input)){
    console.log('Error: Too Short');
  }
  if (!hasSpecialCharacter(input)){
    console.log('Error: No Special Characters');
  }
}
function hasUpperCase(input){
  for (var i = 0; i < input.length; i++){
    if (input[i] === input[i].toUpperCase()){
      return true;
    }
  }
}
function hasLowerCase(input){
  for (var i = 0; i < input.length; i++){
    if (input[i] === input[i].toLowerCase()){
      return true;
    }
  }
}
function isLongEnough(input){
  if (input.length >= 8){
    return true;
  }
}
function hasSpecialCharacter(input){
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
  for (var i = 0; i < input.length; i++){
    for (var j = 0; j < specialCharacters.length; j++){
      if (input[i] === specialCharacters[j]){
        return true;
      }
    }
  }
}

isPasswordValid('');