const extendHex = (shortHex) => {
  // write your code here
	
	return shortHex.charAt(0) + shortHex.charAt(1) + shortHex.charAt(1) +
           shortHex.charAt(2) + shortHex.charAt(2) +
           shortHex.charAt(3) + shortHex.charAt(3) ;
	

};

// Do not change the code below.          
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
