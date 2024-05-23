import calculate from "../../Exercice2/index.js";

describe('Exercice 2 Validation', () => {
  it('Returns 8 on calculate 5 + 3', ()=>{
    expect(calculate(5,3,'+')).to.eq(8)
  })
  it('Returns 6 on calculate 10 - 4', ()=>{
    expect(calculate(10,4,'-')).to.eq(6)
  })
  it('Returns  14 on calculate 7 * 2', ()=>{
    expect(calculate(7,2,'*')).to.eq(14)
  })
  it('Returns 4 on calculate 12 / 3', ()=>{
    expect(calculate(12,3,'/')).to.eq(4)
  })
  it('Returns \'Division by zero is not allowed\' on calculate 8 / 0', ()=>{
    expect(calculate(8,0,'/')).to.eq('Division by zero is not allowed')
  })
  it('Returns \'Invalid operator\' on calculate 4 % 5', ()=>{
    expect(calculate(4,5,'%')).to.eq('Invalid operator')
  })
  it('BONUS :: Returns 8 on calculate \'5\' + \'3\'', ()=>{
    expect(calculate('5','3','+')).to.eq(8)
  })
  it('BONUS :: Returns  \'Invalid operator\' when indicating whatever not expected character as operator', ()=>{
    expect(calculate(4,5,'@')).to.eq('Invalid operator')
    expect(calculate(4,5,4)).to.eq('Invalid operator')
    expect(calculate(4,5,'')).to.eq('Invalid operator')
  })

})
