import { config } from "dotenv";

config();

export const Login = async (page: any) => {
  try {
    await page.waitForNetworkIdle();
    await page.type("input[type=text]", process.env.EMAIL);
    await page.type("input[type=password]", process.env.PASSWORD);
    await page.click("button[type=submit]");
    console.log("Login...");
  } catch (err) {
    throw err;
  }
};
