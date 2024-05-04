import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Awesork', () => {
    render(<App />);
    const linkElement = screen.getByText(/Awesork/i);
    expect(linkElement).toBeInTheDocument();
});
