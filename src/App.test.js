/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-find-by */
/* eslint-disable testing-library/prefer-screen-queries */
/*eslint-disable-next-line testing-library/prefer-find-by*/
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App Test', () => {
  test('Should have heading', () => {
    render(<App />);
    const linkElement = screen.getByText("Original Deck");
    expect(linkElement).toBeInTheDocument();
  });

  test('Should draw card on draw button click', async () => {
    const { getByTestId } = render(<App />);
    const drawButton = await waitFor(() => getByTestId('drawCardButton'));
    const drawCardContainer = await waitFor(() => getByTestId('drawCard-container'));
    fireEvent.click(drawButton);
    expect(drawCardContainer.childElementCount).toBeGreaterThan(0);
  });

  test('Should reset the conatiner on click', async () => {
    const { getByTestId } = render(<App />);
    const drawButton = await waitFor(() => getByTestId('drawCardButton'));
    fireEvent.click(drawButton);
    const resetButton = await waitFor(() => getByTestId('resetButton'));
    const drawCardContainer = await waitFor(() => getByTestId('drawCard-container'));
    fireEvent.click(resetButton);
    expect(drawCardContainer.childElementCount).toEqual(0);
  });
})

