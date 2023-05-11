import { screen, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../components/home';
import '@testing-library/jest-dom/extend-expect';

// import renderer from 'react-test-renderer';

describe('Home component', () => {
  it('renders the homepage', () => {
    render(<Home />);
    expect(screen.getByText(/Welcome/)).toBeInTheDocument();
    expect(screen.getByText(/Lorem Ipsum/)).toBeInTheDocument();
  });
});

describe('Home snapshot', () => {
  test('Home snapshot should match dom', () => {
    const tree = renderer.create(<Home />).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
