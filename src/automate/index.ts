import puppeteer from "puppeteer-core";
import { config } from "dotenv";

config();

const app = puppeteer;

export const runPuppeteer = async () => {
  try {
    const browser = await app.launch({
      executablePath: process.env.CHROMIUM,
      headless: true,
    });
    console.log("Open Browser")
    const page = await browser.newPage();
    await page.goto(process.env.URL, {
      waitUntil: "networkidle0",
    });
    await page.waitForNetworkIdle();
    await page.type("input[type=text]", process.env.EMAIL);
    await page.type("input[type=password]", process.env.PASSWORD);
    await page.click("button[type=submit]");
    console.log("Login...")
    await page.waitForNetworkIdle();
    await page.goto("https://tripisia.id/cms/dashboard/add_poi", {
      waitUntil: "domcontentloaded",
    });
    console.log("Input data...")
    await page.type("input[name=input-title]", "babi");
    await page.type(
      "input[name=input-image-url]",
      "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png"
    );
    await browser.close()
    console.log("Close Browser")
  } catch (err) {
    throw err;
  }
};
