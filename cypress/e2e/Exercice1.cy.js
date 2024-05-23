import pairNumbers from "../../Exercice1/index";

describe('Exercice 1 Validation', () => {
  it('Returns all 5 pair numbers from 1 to 10', ()=>{
    const numbers = pairNumbers(1,10);
    const arrayOfNumbers = numbers.split(',')
    expect(arrayOfNumbers.length).to.eq(5)
  })
  it('Returns a strung with \'2,4,6,8,10\'', ()=>{
    const numbers = pairNumbers(1,10);
    expect(numbers).to.eq('2,4,6,8,10')
  })
  it('Returns an empty string when start is greater than end', ()=>{
      const numbers = pairNumbers(10,1);
      expect(numbers).to.eq('')
  })
  it('Returns an empty string when end is equal to start', () => {
    const numbers = pairNumbers(1,1);
    expect(numbers).to.eq('')
  })
  it('BONUS :: Works passing numbers as string', ()=> {
    const numbers = pairNumbers('1','10');
    const arrayOfNumbers = numbers.split(',')
    expect(arrayOfNumbers.length).to.eq(5)
    expect(numbers).to.eq('2,4,6,8,10')
  })
})
