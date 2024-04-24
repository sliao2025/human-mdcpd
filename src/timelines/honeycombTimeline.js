import { enterFullscreen, exitFullscreen } from "../trials/fullscreen";
import {
  createDebriefTrial,
  endTutorialTrial,
  finishTrial,
  instructionsTrial,
  // preloadTrial,
  welcomeTrial,
} from "../trials/honeycombTrials";
import { createHoneycombBlock, createTutorialTrial } from "./honeycombBlock";

/**
 * This timeline builds the example reaction time task from the jsPsych tutorial.
 * Take a look at how the code here compares to the jsPsych documentation!
 *
 * See the jsPsych documentation for more: https://www.jspsych.org/7.3/tutorials/rt-task/
 */
async function createHoneycombTimeline(jsPsych) {
  const honeycombTrials = await createHoneycombBlock(jsPsych);
  const tutorialTrial = createTutorialTrial(jsPsych);
  const debriefTrial = createDebriefTrial(jsPsych);
  const timeline =
    process.env.REACT_APP_MODE === "tutorial"
      ? [
          welcomeTrial,
          enterFullscreen,
          // preloadTrial,
          instructionsTrial,
          tutorialTrial,
          endTutorialTrial,
          honeycombTrials,
          debriefTrial,
          finishTrial,
          exitFullscreen,
        ]
      : [
          welcomeTrial,
          enterFullscreen,
          // preloadTrial,
          instructionsTrial,
          honeycombTrials,
          debriefTrial,
          finishTrial,
          exitFullscreen,
        ];

  return timeline;
}

export { createHoneycombTimeline };
