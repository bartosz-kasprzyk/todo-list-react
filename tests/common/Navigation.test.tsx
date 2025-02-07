import React from "react";
import { Navigation } from "../../src/common/Navigation";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ThemeProvider } from "styled-components";
import { theme } from "../../src/theme";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Navigation", () => {
  const renderComponent = () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </ThemeProvider>
    );
    return {
      firstButton: screen.getByRole("link", { name: "Zadania" }),
      secondButton: screen.getByRole("link", { name: "O autorze" }),
    };
  };

  it('should render two buttons "Zadania" and "O autorze"', () => {
    const { firstButton, secondButton } = renderComponent();

    expect(firstButton).toBeInTheDocument();
    expect(secondButton).toBeInTheDocument();
  });

  it("should link to correct URL", async () => {
    const { firstButton, secondButton } = renderComponent();
    const user = userEvent;

    await user.click(firstButton);
    expect(window.location.pathname).toBe("/zadania");

    await user.click(secondButton);
    expect(window.location.pathname).toBe("/autor");
  });
});
