function longest_word(words)
		{
			var thelongestWord = "";
			var splitWords = words.split(" ");
			
			
			for (var i =0; i< splitWords.length; i++)//loop through all the words
			{
				if (splitWords[i].length>thelongestWord.length)
				{
					thelongestWord = splitWords[i];
				}
			}
				//find the longest word	
			
			return thelongestWord;//return the longest word
			
		}
