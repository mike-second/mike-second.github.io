//function that fetches question .txt files from server
function getQuestions(){
	//create promise block
	Promise.all([
	//fetch all files from server
	fetch('/easy.txt').then(x => x.text()),
	fetch('/hard.txt').then(x => x.text()),
	fetch('/expert.txt').then(x => x.text())
	
	//shorthand function that takes response objects (easy.txt, hard.txt, expert.txt) 
	//and respectively passes them to parameters easy, hard, expert
	]).then(([easy, hard, expert]) => { 
		//declare 3 constant variables with values of respective text files in array form, delimited with next-line (\n) character
		const easyQlines = easy.split('\n'),
		hardQlines = hard.split('\n'),
		expertQlines = expert.split('\n');	
		//log to console for debugging
		console.log('Easy file contents:', easyQlines);
		console.log('Hard file content:', hardQlines);
		console.log('Expert file content:', expertQlines);
		
		//return array of arrays to function caller
		//use in returning function as:
		//const questions = getQuestions();
		//easyLines = questions[0]
		//hardLines = questions[1]
		//expertLines = questions[2]
		//manipulate data from returning function
		return [easyQlines, hardQlines, expertQlines];
	})
	
}