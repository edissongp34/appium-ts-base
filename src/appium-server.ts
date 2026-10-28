import { spawn } from "child_process";

export const startAppium = () => {
  console.log("Starting Appium server...");
  const process = spawn("appium", ["--log-level", "info"], {
    stdio: "inherit",
    shell: true
  });

  return process;
};

startAppium();
