import { screen, render } from '@testing-library/react';
import Quote from '../components/Quote';

describe('Quote Component', () => {
  it('renders the Quote component', async () => {
    render(<Quote />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
