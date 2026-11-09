import { render, screen, fireEvent } from '@testing-library/react';
import Contact from './Contact';

test('a failed send shows the reason and keeps what the visitor typed', async () => {
  render(<Contact />);
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Ali' } });
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'ali@example.org' } });
  fireEvent.change(screen.getByLabelText('Subject'), { target: { value: 'Hello' } });
  fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Long message' } });
  fireEvent.click(screen.getByRole('button', { name: /send message/i }));
  expect(await screen.findByText(/not set up yet/)).toBeInTheDocument();
  expect(screen.getByLabelText('Message')).toHaveValue('Long message');
});
