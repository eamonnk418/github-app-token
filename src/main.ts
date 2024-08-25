import { getInput, setFailed, setOutput } from "@actions/core";

export async function run() {
  try {
    const appIds = getInput("app-id").split(",");
    const privateKeys = getInput("private-key").split(",");

    setOutput("app-id", appIds);
    setOutput("private-key", privateKeys);
  } catch (error) {
    if (error instanceof Error) {
      setFailed(error.message);
    }

    throw error;
  }
}
