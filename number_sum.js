function number_sum(number)
{
	var numbers = [];
	for(var n = 1; n<=number ; n++)
	{
		numbers.push(n);
	}
	return  eval(numbers.join("+"));
}
