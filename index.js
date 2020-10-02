const core = require("@actions/core");
const github = require("@actions/github");

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput("who-to-greet");
  console.log(`Hello ${nameToGreet}!`);
  const time = new Date().toTimeString();
  // core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2);
  // const payload = JSON.stringify(process.env, undefined, 2);
  // console.log(`The event payload: ${payload}`);
  const branch = process.env.GITHUB_REF.replace("refs/heads/", "");
  const shortSha = process.env.GITHUB_SHA.slice(0, 8);
  console.log(branch);
  console.log(shortSha);
  core.setOutput("branch", branch);
  core.setOutput("shortsha", shortSha);
} catch (error) {
  core.setFailed(error.message);
}
