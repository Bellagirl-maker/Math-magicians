import { screen, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';
import '@testing-library/jest-dom/extend-expect';

describe('Quote Component', () => {
  it('renders the Quote component', async () => {
    render(<Quote />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});

describe('Quote snapshot', () => {
  test('Quote snapshot should match dom', () => {
    const tree = renderer.create(<Quote />).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
