import { render, screen } from '@testing-library/react';
import UserDisplay from './UserDisplay';

test('UserDisplay shows selected field', () => {
  const userData = {'foo': 'bar'};
  const displayFields = [{'name': 'Foo', value: 'foo'}]; 
  render(<UserDisplay user={ userData } displayFields={ displayFields } />);
  const displayValue = screen.getByText(/bar/i);
  expect(displayValue).toBeInTheDocument()
});

test('UserDisplay does not show unspecified fields', () => {
  const userData = {'foo': 'bar', 'test': 'value'};
  const displayFields = [{'name': 'Foo', 'value': 'foo'}]; 
  render(<UserDisplay user={ userData } displayFields={ displayFields } />);
  const displayValue = screen.queryByText(/value/i);
  expect(displayValue).toBeNull()
});