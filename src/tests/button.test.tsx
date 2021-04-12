import {fireEvent, render, screen} from '@testing-library/react';

import Button from '../components/shared/Button';

test('Button emits click event', () => {
  const onClick = jest.fn();

  render(<Button text="Click" click={onClick} />);

  const button = screen.getByTestId('button');

  fireEvent.click(button);

  expect(onClick).toHaveBeenCalled();
});