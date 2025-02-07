import React from "react";
import { AuthorPage } from "../../../src/features/AuthorPage";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../src/theme";

describe("AuthorPage", () => {
  it("should render Header and Section with correct content", () => {
    render(
      <ThemeProvider theme={theme}>
        <AuthorPage />
      </ThemeProvider>
    );

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "O autorze"
    );
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Bartosz Kasprzyk"
    );
    expect(screen.getByText(/magister matematyki/i)).toBeInTheDocument();
    expect(screen.getByText(/front-end developer/i)).toBeInTheDocument();
  });
});
