function RedOrGreen(elementTag)
{
	var newSquare = document.createElement(elementTag);

	this.makeGreen = function()
	{
		newSquare.style.backgroundColor = "green";
		newSquare.innerHTML="Passed!";
		document.getElementById("container").appendChild(newSquare);
	}
	this.makeRed = function(expectedResult ,result)
	{
		newSquare.style.backgroundColor = "red";
		newSquare.innerHTML="Failed! Returned : "+ result + " " + "Expected: "+expectedResult;
		document.getElementById("container").appendChild(newSquare);

	}
	
};