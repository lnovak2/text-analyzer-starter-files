$(document).ready(function(){
	$('button').click(function(event){
		event.preventDefault();
		var text = $('#user-text').val();
		$('.js-wordCount').text(wordCount(text));
		$('.js-uniqueCount').text(uniqueCount(text));
		$('.js-wordLength').text(wordLength(text));
		$('.js-sentenceLength').text(sentenceLength(text));
		$('.text-report').removeClass('hidden');
	})
})

function wordList(text){
	var token = text.replace(/[\r\n]/g, " ");
	return token.toLowerCase().split(/[ ,!.";:-]/).filter(Boolean).sort();
}

function wordCount(text){
	var wordArray = wordList(text);
	return wordArray.length;
}

function uniqueCount(text){
	var uniqueArray = [];
	var wordArray = wordList(text);
	var currentWord = "";
	for (i = 0; i < wordArray.length; i++) {
		if (wordArray[i] != currentWord) {
			uniqueArray.push(wordArray[i]);
			currentWord = wordArray[i];
		}
	}
	return uniqueArray.length;
}

function wordLength(text){
	var wordArray = wordList(text);
	var totalLength = 0;
	for (i = 0; i < wordArray.length; i++){
		totalLength += wordArray[i].length;
	}
	return (totalLength / wordArray.length).toFixed(2);
}

function sentenceLength(text){
	var sentenceArray = text.replace(/[\r\n]/g, " ").split(/[.!?]/);
	var eachLength = [];
	var total = 0;
	for (i = 0; i < sentenceArray.length; i++){
		eachLength.push(sentenceArray[i].split(" ").filter(Boolean).length);
		total += eachLength[i];
	}
	if (eachLength.length > 1){
		return (total / (eachLength.length-1)).toFixed(2);
	}else{
		return (total / (eachLength.length)).toFixed(2);
	}
}