import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';




test('renders To-Do List', () => {
  render(<App />);
  const linkElement = screen.getByText(/To-Do List/i);
  expect(linkElement).toBeInTheDocument();
});





test("Input box is visible to user", () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText(/Enter a task!/i);
  expect(linkElement).toBeInTheDocument();
})





test("fireEvent on Submit button", () => {
  render(<App />)
  const submitbutton = screen.getByText("Submit")
  fireEvent.click(submitbutton)
  const deleteButton = screen.getByText("Remove")
  expect(deleteButton).toBeInTheDocument()
});