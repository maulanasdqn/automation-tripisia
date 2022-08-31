"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runPuppeteer = void 0;
const puppeteer_core_1 = __importDefault(require("puppeteer-core"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const app = puppeteer_core_1.default;
const runPuppeteer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const browser = yield app.launch({
            executablePath: process.env.CHROMIUM,
            headless: true,
        });
        console.log("Open Browser");
        const page = yield browser.newPage();
        yield page.goto(process.env.URL, {
            waitUntil: "networkidle0",
        });
        yield page.waitForNetworkIdle();
        yield page.type("input[type=text]", process.env.EMAIL);
        yield page.type("input[type=password]", process.env.PASSWORD);
        yield page.click("button[type=submit]");
        console.log("Login...");
        yield page.waitForNetworkIdle();
        yield page.goto("https://tripisia.id/cms/dashboard/add_poi", {
            waitUntil: "domcontentloaded",
        });
        console.log("Input data...");
        yield page.type("input[name=input-title]", "babi");
        yield page.type("input[name=input-image-url]", "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png");
        yield browser.close();
        console.log("Close Browser");
    }
    catch (err) {
        throw err;
    }
});
exports.runPuppeteer = runPuppeteer;
