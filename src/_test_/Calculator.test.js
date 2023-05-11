import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';
import '@testing-library/jest-dom/extend-expect';

describe('Should display calculator component', () => {
  it('should render calculator components', async () => {
    render(<Calculator />);
    const clearbtn = screen.getByText('AC');
    const operate = screen.getByText('=');
    expect(clearbtn).toBeInTheDocument();
    expect(operate).toBeInTheDocument();
  });

  it('should display 2 numbers for calculation', async () => {
    render(<Calculator />);
    const btn1 = screen.getByText('8');
    const btn2 = screen.getByText('4');
    const opBtn = screen.getByText('+');

    fireEvent.click(btn1);
    fireEvent.click(opBtn);
    fireEvent.click(btn2);

    const res = screen.getByText('8 + 4');

    expect(res).toBeInTheDocument();
  });
});

describe('Calculator snapshot', () => {
  test('Calculator snapshot should match dom', () => {
    const tree = renderer.create(<Calculator />).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
