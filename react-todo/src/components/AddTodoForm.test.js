import { render, screen, fireEvent } from "@testing-library/react";
import AddTodoForm from "../components/AddTodoForm";
test("renders AddTodoForm with input and button", () => {
  const addform = jest.fn();
  // eslint-disable-next-line no-undef
  render(<AddTodoForm onAddTodo="" addTodo={addform} />);
  // eslint-disable-next-line no-undef
  expect(screen.getByPlaceholderText("Add a new todo")).toBeInTheDocument();
  // eslint-disable-next-line no-undef
  expect(screen.getByText("Add Todo")).toBeInTheDocument();
});
// eslint-disable-next-line no-undef
test("calls addTodo whenever new todo is added", () => {
  // eslint-disable-next-line no-undef
  const addform = jest.fn();

  render(<AddTodoForm newTodo="Test Todo" addTodo={addform} />);
  fireEvent.click(screen.getByText("Add Todo"));
  expect(addform).toHaveBeenCalled();
});
