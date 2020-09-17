export default function validParenthesis(input: string): boolean {
	const inputArray = input.split('');
	if (inputArray.length === 1) return false;
	checkBracket(inputArray, 0);
	return inputArray.length === 0;
}

function checkBracket(input: string[], index: number): void {
	const bracketPairs: any = {
		"(":")",
		"{":"}",
		"[":"]",
	};

	let currentBracket = input[index];
	if(Object.values(bracketPairs).includes(currentBracket)) {
		return;
	}

	let nextBracket = input[index + 1];
	if(Object.keys(bracketPairs).includes(nextBracket)) {
		checkBracket(input, index + 1);
	}

	let nextNextBracket = input[index + 2];
	if (index + 2 < input.length && Object.keys(bracketPairs).includes(nextNextBracket)) {
		checkBracket(input, index + 2);
	}

	currentBracket = input[index];
	nextBracket = input[index + 1];
	if (nextBracket === bracketPairs[currentBracket]) {
		input.splice(index, 2);
	}
}