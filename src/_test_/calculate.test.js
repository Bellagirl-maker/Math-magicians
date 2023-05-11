import operate from '../logic/operate';
import calculate from '../logic/calculate';
import '@testing-library/jest-dom/extend-expect';

describe('Should perform basic operation', () => {
  it('should Add numbers: 1 + 1 to equal 2', async () => {
    expect(operate('1', '1', '+')).toBe('2');
  });
  it('should Subtract numbers: 2 - 1 to equal 1', async () => {
    expect(operate('2', '1', '-')).toBe('1');
  });
  it('should Divide numbers: 6 ÷ 3 to equal 2', async () => {
    expect(operate('6', '3', '÷')).toBe('2');
  });
});

describe('Should apply correct operation', () => {
  it('should clear the values', () => {
    const clear = calculate({ total: 8 }, 'AC');
    expect(Number(clear.total)).toBe(0);
  });
});
