import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import ButtonError from './ButtonError';
import { user } from '../../__test__/setupTests';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

describe('Error button component', () => {
  test('renders correctly', () => {
    render(<ButtonError />);
    expect(screen.getByRole('button', { name: /error/gi })).toBeInTheDocument();
  });
  test('state changes', async () => {
    render(
      <ErrorBoundary>
        <ButtonError />
      </ErrorBoundary>
    );
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    await user.click(btn);
    expect(btn).not.toBeInTheDocument();
  });
});
