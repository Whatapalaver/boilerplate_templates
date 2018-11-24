import React from "react";
import { create } from "react-test-renderer";
import Pet from "../Pet";

test("snapshot", () => {
  const c = create(<Pet />);
  expect(c.toJSON()).toMatchSnapshot();
});
