import fs from "fs";

export const InputData = async (page: any) => {
  let datas = JSON.parse(fs.readFileSync(process.env.DATASET, "utf8"));
  await page.goto(process.env.BASE_URL + "/dashboard/add_poi", {
    waitUntil: "domcontentloaded",
  });
  for (const data of datas) {
    console.log("Input data", data.title);
    await page.type("input[name=input-title]", data.title);
    const uploadImage = await page.$("input[id=image-file]");
    await uploadImage.uploadFile("assets/" + data.title + ".jpg");
    await page.type("input[name=input-image-url]", data.url_image);
    await page.type("textarea[name=input-description]", data.description);
    await page.type("textarea[name=input-brief]", data.short_description);
    await page.type("textarea[name=input-how]", data.how);
    await page.type("textarea[name=input-tips]", data.tips);
    await page.type("input[name=input-address]", data.address);
    await page.type("input[name=input-lat]", data.lat.replace(",", "."));
    await page.type("input[name=input-lng]", data.lng.replace(",", "."));
    await page.type("input[name=input-phone]", data.phone);
    await page.type("input[name=input-price-min]", data.price_min);
    await page.type("input[name=input-price-max]", data.price_max);
    await page.type("input[name=input-website]", data.website);
    const destination = await page.$x(
      '//*[@id="form-validation"]/div[13]/div/div/div/div/button'
    );
    await destination[0].click();
    const destinationList = await page.$x(
      '//*[@id="form-validation"]/div[13]/div/div/div/div/div/ul/li[41]'
    );
    await destinationList[0].click();
    const typePoi = await page.$x(
      '//*[@id="form-validation"]/div[14]/div/div/div/div/button'
    );
    await typePoi[0].click();
    const typePoiList = await page.$x(
      '//*[@id="form-validation"]/div[14]/div/div/div/div/div/ul/li[2]'
    );
    await typePoiList[0].click();
    const category = await page.$x(
      '//*[@id="form-validation"]/div[15]/div/div/div/div/button'
    );
    await category[0].click();
    const categoryList = await page.$x(
      `//*[@id="form-validation"]/div[15]/div/div/div/div/div/ul/li[${data.category}]`
    );
    await categoryList[0].click();
    const tags = await page.$x(
      '//*[@id="form-validation"]/div[16]/div/div/div/div/button'
    );
    await tags[0].click();
    const tagsList = await page.$x(
      '//*[@id="form-validation"]/div[16]/div/div/div/div/div/ul/li[4]'
    );
    await tagsList[0].click();
    const tagsOuter = await page.$x('//*[@id="navbar-collapse"]');
    await tagsOuter[0].click();
    const days = await page.$x(
      '//*[@id="form-validation"]/div[18]/div/div[2]/div[2]/div/div/div/button'
    );
    await days[0].click();
    const daysList = await page.$x(
      '//*[@id="form-validation"]/div[18]/div/div[2]/div[2]/div/div/div/div/ul/li[1]'
    );
    await daysList[0].click();
    const daysOuter = await page.$x(
      '//*[@id="form-validation"]/div[18]/div/div[2]/div[1]'
    );
    await daysOuter[0].click();
    const openHour = await page.$x(
      '//*[@id="form-validation"]/div[18]/div/div[3]/div[2]/div/div/input'
    );
    await openHour[0].click();
    const openHourList = await page.$x(`//*[@id="h-${data.open_hour}"]`);
    await openHourList[0].click();
    const openBtn = await page.$x("/html/body/div[6]/div/div[2]/button[4]");
    await openBtn[0].click();
    const openMinuteClick = await page.$x(`//*[@id="m-${data.open_minute}"]`);
    await openMinuteClick[0].click();
    await openBtn[0].click();
    const closeHour = await page.$x(
      '//*[@id="form-validation"]/div[18]/div/div[4]/div[2]/div/div/input'
    );
    await closeHour[0].click();
    const closeHourList = await page.$x(`//*[@id="h-${data.close_hour}"]`);
    await closeHourList[0].click();
    const closeBtn = await page.$x("/html/body/div[7]/div/div[2]/button[4]");
    await closeBtn[0].click();
    await closeBtn[0].click();

    const addOpenCloseHour = await page.$x(
      '//*[@id="form-validation"]/div[18]/div/div[5]/div/button'
    );
    await addOpenCloseHour[0].click();
    const mustSee = await page.$x('//*[@id="form-validation"]/label');
    await mustSee[0].click();
    await page.click("button[type=submit]");
    await page.waitForNetworkIdle();
    await page.goto("https://tripisia.id/cms/dashboard/add_poi", {
      waitUntil: "domcontentloaded",
    });
  }
};
