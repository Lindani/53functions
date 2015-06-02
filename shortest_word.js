function shortest_word(words)
{
	var word = words.split(" ")
	var shortestWord = word[word.length-1];
	for(var i = 0; i < word.length; i++)
	{
		if (word[i].length < shortestWord.length)
		{
			shortestWord = word[i];					
		}
		return shortestWord;
	}
}
