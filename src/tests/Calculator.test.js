import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Should display calculator component', () => {
  it('should render calculator components', async () => {
    render(<Calculator />);
    expect(screen.getByText('AC')).toBeInTheDocument();
    expect(screen.getByText('=')).toBeInTheDocument();
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
