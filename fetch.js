function getQuestions(){
	
	Promise.all([
	fetch('/easy.txt').then(x => x.text()),
	fetch('/hard.txt').then(x => x.text()),
	fetch('/expert.txt').then(x => x.text())
	]).then(([easy, hard, expert]) => {
		
		const easyQlines = easy.split('\n');	
		const hardQlines = hard.split('\n');	
		const expertQlines = expert.split('\n');	
		console.log('Easy file contents:', easyQlines);
		console.log('Hard file content:', hardQlines);
		console.log('Expert file content:', expertQlines);
	})
	
}