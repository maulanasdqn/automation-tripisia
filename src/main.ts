import { InputData, Login } from "./automate/";
import puppeteer from "puppeteer-core";

const app = puppeteer;

const MainApp = async () => {
  try {
    const browser = await app.launch({
      executablePath: process.env.CHROMIUM,
      headless: false,
    });
    const page = await browser.newPage();
    await page.goto(process.env.URL, {
      waitUntil: "networkidle0",
    });
    await Login(page);
    console.log("Input data...");
    await InputData(page);
    // await browser.close();
  } catch (err) {
    throw err;
  }
};

try {
  MainApp();
} catch (err) {
  throw err;
}
