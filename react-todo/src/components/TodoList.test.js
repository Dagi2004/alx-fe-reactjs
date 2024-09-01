import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Use the main import path
import TodoList from "../components/TodoList";

// eslint-disable-next-line no-undef
test("renders TodoList component", () => {
  render(<TodoList />);
  // eslint-disable-next-line no-undef
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  // eslint-disable-next-line no-undef
  expect(screen.getByText('"Build a Todo App')).toBeInTheDocument();
  // eslint-disable-next-line no-undef
  expect(screen.getByText("Build a Project Apph")).toBeInTheDocument();
});
// eslint-disable-next-line no-undef
test("adds a new todo", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText("Add a new todo"), {
    target: { value: "New Todo" },
  });
  fireEvent.click(screen.getByText("Add Todo"));
  // eslint-disable-next-line no-undef
  expect(screen.getByText("New Todo")).toBeInTheDocument();
});
// eslint-disable-next-line no-undef
test("toggles a todo", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Learn React");
  fireEvent.click(todoItem);
  // eslint-disable-next-line no-undef
  expect(todoItem).toHaveStyle("text-decoration: none");

  fireEvent.click(todoItem);
  // eslint-disable-next-line no-undef
  expect(todoItem).toHaveStyle("text-decoration: line-through");
});
// eslint-disable-next-line no-undef
test("deletes a todo item", () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText(/Delete/i)[0];
  fireEvent.click(deleteButton);
  // eslint-disable-next-line no-undef
  expect(screen.queryByText("Learn React in depth")).not.toBeInTheDocument();
});
