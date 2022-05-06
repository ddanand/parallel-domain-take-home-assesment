import React from "react";
import { render, waitForElementToBeRemoved } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';

import DisplayJobs from "./index";
import { jobsData } from "../../data/jobs";


describe("PaymentsAndExpenses", function () {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(jobsData)
    }));
  });
  
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should display jobs grouped by team", async () => {
    let screen;

    act(() => {
      screen = render(<DisplayJobs />);
    });
    expect(screen.getByRole("progressbar")).toBeDefined();
    await waitForElementToBeRemoved(() => screen.getByRole("progressbar"))
    expect(screen.getAllByTestId('team-name').length).toEqual(5);
  });
});