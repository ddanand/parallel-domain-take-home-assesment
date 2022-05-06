import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import JobsPerTeam from "./index";
import { jobsData } from "../../data/jobs";

const navigateFn = jest.fn();

Object.defineProperty(window, 'open', {
  writable: true,
  value: navigateFn
});

describe("PaymentsAndExpenses", function () {
  it("should display jobs", function () {
    const screen = render(<JobsPerTeam jobs={jobsData} />);

    expect(screen.getAllByTestId('job-div').length).toEqual(jobsData.length);
    expect(screen.getAllByText(jobsData[0].text)[0]).toBeDefined();
    expect(screen.getAllByText (jobsData[0].categories.location)[0]).toBeDefined();
    expect(screen.getAllByText('Apply')[0]).toBeDefined();
  });

  it("should display jobs", function () {
    const screen = render(<JobsPerTeam jobs={jobsData} />);

    fireEvent.click(screen.getAllByTestId('job-div')[0]);
    expect(navigateFn).toHaveBeenCalledTimes(1);
  });
});