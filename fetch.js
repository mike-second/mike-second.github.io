function getQuestions(){
	
	Promise.all([
	fetch('./easy.txt').then(x => x.text()),
	fetch('hard.txt').then(x => x.text()),
	fetch('expert.txt').then(x => x.text())
	]).then(allResp => {
		let easy = allResp[0];
		let hard = allResp[1];
		let expert = allResp[2];
		console.log('Easy file content:', easy);
    console.log('Hard file content:', hard);
    console.log('Expert file content:', expert);
	})
	
}