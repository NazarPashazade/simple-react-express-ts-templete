import { fireEvent, render } from '@testing-library/react';
import { Counter } from "./Counter";

describe(Counter, () => {

  it('displays initialCounter count', () => {
    const { getByTestId } = render(<Counter initialValue={10} />);
    const countValue = getByTestId('count').textContent;
    expect(countValue).toEqual('Counter: 10');
  })

  it('count should be incrementred by one', () => {
    const { getByRole, getByTestId } = render(<Counter initialValue={10} />);
    const btn = getByRole('button', { name: '+ Increase' });
    fireEvent.click(btn);
    const countValue = getByTestId('count').textContent;
    expect(countValue).toEqual('Counter: 11');
  })

   it('count should be decremented by one', () => {
    const { getByRole, getByTestId } = render(<Counter initialValue={10} />);
    const btn = getByRole('button', { name: '+ Decrease' });
    fireEvent.click(btn);
    const countValue = getByTestId('count').textContent;
    expect(countValue).toEqual('Counter: 9');
  })
})