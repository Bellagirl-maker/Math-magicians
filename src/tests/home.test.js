import { screen, render } from '@testing-library/react';
import Home from '../components/home';
// import renderer from 'react-test-renderer';

describe('Home component', () => {
  it('renders the homepage', () => {
    render(<Home />);
    expect(screen.getByText(/Welcome/)).toBeInTheDocument();
    expect(screen.getByText(/Lorem Ipsum/)).toBeInTheDocument();
  });
});
