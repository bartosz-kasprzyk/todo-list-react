import React from "react";
import Section from "../../src/common/Section";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ThemeProvider } from "styled-components";
import { theme } from "../../src/theme";

describe("Section", () => {
  it("should render the title and body", () => {
    render(
      <ThemeProvider theme={theme}>
        <Section title="Test title" body={["item1", "item2"]} />
      </ThemeProvider>
    );

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Test title"
    );
    expect(screen.getByText(/item1/i)).toBeInTheDocument();
    expect(screen.getByText(/item2/i)).toBeInTheDocument();
  });

  it("should render extraContent when provided", () => {
    render(
      <ThemeProvider theme={theme}>
        <Section
          title="Test title"
          body={["item1", "item2"]}
          extraContent={<button>test</button>}
        />
      </ThemeProvider>
    );

    expect(screen.getByRole("button", { name: "test" })).toBeInTheDocument();
  });
});
