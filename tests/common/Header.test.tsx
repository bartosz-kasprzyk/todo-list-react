import React from 'react';
import Header from '../../src/common/Header'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest';

describe('Header', () => {
    it('should render the title', () => {
        render(<Header title="Test Title" />);

        expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Test Title");
    })
})