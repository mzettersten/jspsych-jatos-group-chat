import { startTimeline } from "@jspsych/test-utils";

import jsPsychPluginJspsychJatosWaitingRoom from ".";

jest.useFakeTimers();

describe("my plugin", () => {
  it("should load", async () => {
    const { expectFinished, getHTML, getData, displayElement, jsPsych } = await startTimeline([
      {
        type: jsPsychPluginJspsychJatosWaitingRoom,
        parameter_name: 1,
        parameter_name2: "img.png",
      },
    ]);

    await expectFinished();
  });
});
