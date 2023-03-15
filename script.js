// complete the given function

function palindrome(omg){
	let str = omg.toLowerCase();
	for(let i=0; i<str.length/2; i++){
		
		if(str[i]!==str[(str.length-1)-i]){
			return false;
		}
	}
	return true;
}
module.exports = palindrome
