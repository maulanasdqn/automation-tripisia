import { InputData, Login } from "./automate/";
import puppeteer from "puppeteer-core";
import { Scraping } from "./scrap";

const app = puppeteer;

const MainApp = async () => {
  try {
    const browser = await app.launch({
      executablePath: process.env.CHROMIUM,
      headless: false,
    });
    const page = await browser.newPage();
    const Automate = async () => {
      await page.goto(process.env.BASE_URL + "/signin", {
        waitUntil: "networkidle0",
        timeout: 0,
      });
      await Login(page);
      console.log("Input data...");
      await page.waitForNetworkIdle();
      await InputData(page);
    };

    const Scrap = async () => {
      await Scraping(page);
    };

    await Automate();
    // await Scrap();
    await browser.close();
  } catch (err) {
    throw err;
  }
};

try {
  MainApp();
} catch (err) {
  throw err;
}
