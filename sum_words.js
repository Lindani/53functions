function sum_words(words)
{	
	var splitWords = words.split(" ")
	return eval(splitWords.join("").length);
}
