import React from "react";
import { render } from "@testing-library/react";
import JobsPageHeader from "./index";

describe("JobsPageHeader", function () {
  it("should display heading", function () {
    const screen = render(<JobsPageHeader />);

    expect(screen.getByText("Join Us")).toBeDefined();
    expect(screen.getByText("Grow with Parallel domain")).toBeDefined();
  });
});