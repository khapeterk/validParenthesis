import validParenthesis from "./validParenthesis";

describe('valid parenthesis function', () => {
	it('should return true for ()', () => {
		expect(validParenthesis('()')).toBe(true);
	})
	it('should return false for ([)', () => {
		expect(validParenthesis('([)')).toBe(false);
	})
	it('should return true for ()()', () => {
		expect(validParenthesis('()()')).toBe(true);
	})
	it('should return true for (()())', () => {
		expect(validParenthesis('(()())')).toBe(true);
	})
	it('should return true for (()(()))', () => {
		expect(validParenthesis('(()(()))')).toBe(true);
	})
	it('should return true for (()([()]))', () => {
		expect(validParenthesis('(()([()]))')).toBe(true);
	})
	it('should return false for ]', () => {
		expect(validParenthesis(']')).toBe(false);
	})
})