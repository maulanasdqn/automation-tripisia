import fs from "fs";
import {
  anotherStupidityChecker,
  imageLoader,
  nullSafety,
  stupidCheck,
} from "../utilities/helper";

export const InputData = async (page: any) => {
  let datas = JSON.parse(fs.readFileSync(process.env.DATASET, "utf8"));
  await page.goto(process.env.BASE_URL + "/dashboard/add_poi", {
    waitUntil: "domcontentloaded",
    timeout: 0,
  });
  for (const data of datas) {
    console.log("Input data", nullSafety(data.title));
    await page.type("input[name=input-title]", nullSafety(data.title));
    const uploadImage = await page.$("input[id=image-file]");
    const pattern = /^\s+|\s+$/g
    await uploadImage.uploadFile(imageLoader(data.title.replace(pattern, "")));
    await page.type(
      "input[name=input-image-url]",
      nullSafety(data.url_image) === ""
        ? nullSafety(data.title)
        : nullSafety(data.url_image)
    );
    await page.type(
      "textarea[name=input-description]",
      nullSafety(data.description)
    );
    await page.type(
      "textarea[name=input-brief]",
      nullSafety(data.short_description)
    );
    await page.type("textarea[name=input-how]", nullSafety(data.how));
    await page.type("textarea[name=input-tips]", nullSafety(data.tips));
    await page.type("input[name=input-address]", nullSafety(data.address));
    await page.type("input[name=input-lat]", parseInt(nullSafety(data.lat).replace(",",".")));
    console.log(parseInt(nullSafety(data.lat).replace(",",".")))
    await page.type("input[name=input-lng]", parseInt(nullSafety(data.lng).replace(",",".")));
    await page.type("input[name=input-phone]", nullSafety(data.phone));
    await page.type("input[name=input-price-min]", nullSafety(data.price_min));
    await page.type("input[name=input-price-max]", nullSafety(data.price_max));
    await page.type("input[name=input-website]", nullSafety(data.website));
    const destination = await page.$x(
      '//*[@id="form-validation"]/div[13]/div/div/div/div/button'
    );
    await destination[0].click();
    console.log(data.destination);
    const destinationList = await page.$x(
      `//*[@id="form-validation"]/div[13]/div/div/div/div/div/ul/li[${data.destination}]`
    );
    await destinationList[0].click();
    const typePoi = await page.$x(
      '//*[@id="form-validation"]/div[14]/div/div/div/div/button'
    );
    await typePoi[0].click();
    const typePoiList = await page.$x(
      `//*[@id="form-validation"]/div[14]/div/div/div/div/div/ul/li[${nullSafety(
        data.type_poi
      )}]`
    );
    await typePoiList[0].click();
    const category = await page.$x(
      '//*[@id="form-validation"]/div[15]/div/div/div/div/button'
    );
    await category[0].click();
    const categoryList = await page.$x(
      `//*[@id="form-validation"]/div[15]/div/div/div/div/div/ul/li[${
        nullSafety(data.category) === "Default Data" ||
        nullSafety(data.category) === "x"
          ? 2
          : nullSafety(data.category)
      }]`
    );
    await categoryList[0].click();
    const tags = await page.$x(
      '//*[@id="form-validation"]/div[16]/div/div/div/div/button'
    );
    await tags[0].click();
    for (const babi of anotherStupidityChecker(data.tags)) {
      const tagsList = await page.$x(
        `//*[@id="form-validation"]/div[16]/div/div/div/div/div/ul/li[${babi}]`
      );
      await tagsList[0].click();
    }
    const tagsOuter = await page.$x('//*[@id="navbar-collapse"]');
    await tagsOuter[0].click();
    const days = await page.$x(
      '//*[@id="form-validation"]/div[18]/div/div[2]/div[2]/div/div/div/button'
    );
    await days[0].click();
    const daysList1 = await page.$x(
      '//*[@id="form-validation"]/div[18]/div/div[2]/div[2]/div/div/div/div/ul/li[1]'
    );
    await daysList1[0].click();
    const daysList2 = await page.$x(
      '//*[@id="form-validation"]/div[18]/div/div[2]/div[2]/div/div/div/div/ul/li[2]'
    );
    await daysList2[0].click();
    const daysList3 = await page.$x(
      '//*[@id="form-validation"]/div[18]/div/div[2]/div[2]/div/div/div/div/ul/li[3]'
    );
    await daysList3[0].click();
    const daysList4 = await page.$x(
      '//*[@id="form-validation"]/div[18]/div/div[2]/div[2]/div/div/div/div/ul/li[4]'
    );
    await daysList4[0].click();
    const daysList5 = await page.$x(
      '//*[@id="form-validation"]/div[18]/div/div[2]/div[2]/div/div/div/div/ul/li[5]'
    );
    await daysList5[0].click();
    const daysList6 = await page.$x(
      '//*[@id="form-validation"]/div[18]/div/div[2]/div[2]/div/div/div/div/ul/li[6]'
    );
    await daysList6[0].click();
    const daysList7 = await page.$x(
      '//*[@id="form-validation"]/div[18]/div/div[2]/div[2]/div/div/div/div/ul/li[7]'
    );
    await daysList7[0].click();
    const daysOuter = await page.$x(
      '//*[@id="form-validation"]/div[18]/div/div[2]/div[1]'
    );
    await daysOuter[0].click();
    const openHour = await page.$x(
      '//*[@id="form-validation"]/div[18]/div/div[3]/div[2]/div/div/input'
    );
    await openHour[0].click();
    const openHourList = await page.$x(
      `//*[@id="h-${stupidCheck(data.open_hour)}"]`
    );
    await openHourList[0].click();
    const openBtn = await page.$x("/html/body/div[6]/div/div[2]/button[4]");
    await openBtn[0].click();
    const openMinuteClick = await page.$x(
      `//*[@id="m-${stupidCheck(data.open_minute)}"]`
    );
    await openMinuteClick[0].click();
    await openBtn[0].click();
    const closeHour = await page.$x(
      '//*[@id="form-validation"]/div[18]/div/div[4]/div[2]/div/div/input'
    );
    const closeBtn = await page.$x("/html/body/div[7]/div/div[2]/button[4]");
    await closeHour[0].click();
    const closeHourList = await page.$x(
      `//*[@id="h-${stupidCheck(data.close_hour)}"]`
    );
    await closeHourList[0].click();
    await closeBtn[0].click();
    await page.$x(`//*[@id="m-${stupidCheck(data.close_minute)}"]`);
    await closeBtn[0].click();

    const addOpenCloseHour = await page.$x(
      '//*[@id="form-validation"]/div[18]/div/div[5]/div/button'
    );
    await addOpenCloseHour[0].click();
    const mustSee = await page.$x('//*[@id="form-validation"]/label');
    await mustSee[0].click();
    await page.click('button[type=submit]'),
    await page.waitForNetworkIdle();
    await page.goto("https://tripisia.id/cms/dashboard/add_poi", {
      waitUntil: "domcontentloaded",
    });
  }
};
