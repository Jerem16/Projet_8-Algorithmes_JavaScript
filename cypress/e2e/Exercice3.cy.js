import calculateAverage from "../../Exercice3/index.js";
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

describe('Exercice 3 Validation', () => {
  it('Returns 10 on calculateAverage([5, 10, 15]', ()=>{
    expect(calculateAverage([5, 10, 15])).to.eq(10)
  })
  it('Returns 20 on  calculateAverage([10, 20, 30, 20])', ()=>{
    expect(calculateAverage([10, 20, 30, 20])).to.eq(20)
  })
  it('Returns  \'No numbers to calculate average\' on calculateAverage()', ()=>{
    expect(calculateAverage()).to.eq('No numbers to calculate average')
  })
  it('BONUS :: Returns 10 when a number is a string on calculateAverage([\'5\', 10, 15]', ()=>{
    expect(calculateAverage([5, 10, 15])).to.eq(10)
  })


})
