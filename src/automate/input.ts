export const InputData = async (page: any) => {
  await page.waitForNetworkIdle();
  await page.goto("https://tripisia.id/cms/dashboard/add_poi", {
    waitUntil: "domcontentloaded",
  });
  console.log("Input data...");
  await page.type("input[name=input-title]", "babi");
  await page.type("input[id=image-file]", "babi");
  await page.type("input[name=input-image-url]", "image url");
  await page.type("textarea[name=input-description]", "lorem");
  await page.type("textarea[name=input-brief]", "lorem");
  await page.type("textarea[name=input-how]", "lorem");
  await page.type("textarea[name=input-tips]", "lorem");
  await page.type("input[name=input-address]", "lorem");
  await page.type("input[name=input-lat]", "lorem");
  await page.type("input[name=input-lng]", "lorem");
  await page.type("input[name=input-phone]", "lorem");
  await page.type("input[name=input-price-min]", "lorem");
  await page.type("input[name=input-price-max]", "lorem");
  await page.type("input[name=input-website]", "lorem");

  const destination = await page.$x(
    '//*[@id="form-validation"]/div[13]/div/div/div/div/button'
  );
  await destination[0].click();
  const destinationList = await page.$x(
    '//*[@id="form-validation"]/div[13]/div/div/div/div/div/ul/li[41]'
  );
  await destinationList[0].click();

  await page.waitForNetworkIdle();
  const typePoi = await page.$x(
    '//*[@id="form-validation"]/div[14]/div/div/div/div/button'
  );
  await typePoi[0].click();
  const typePoiList = await page.$x(
    '//*[@id="form-validation"]/div[14]/div/div/div/div/div/ul/li[2]'
  );
  await typePoiList[0].click();

  await page.waitForNetworkIdle();
  const category = await page.$x(
    '//*[@id="form-validation"]/div[15]/div/div/div/div/button'
  );
  await category[0].click();
  const categoryList = await page.$x(
    '//*[@id="form-validation"]/div[15]/div/div/div/div/div/ul/li[2]'
  );
  await categoryList[0].click();

  await page.waitForNetworkIdle();

  const tags = await page.$x(
    '//*[@id="form-validation"]/div[16]/div/div/div/div/button'
  );

  await page.waitForNetworkIdle();

  await tags[0].click();
  const tagsList = await page.$x(
    '//*[@id="form-validation"]/div[16]/div/div/div/div/div/ul/li[2]'
  );
  tagsList[0].click();

  await page.waitForNetworkIdle();

  await tags[0].click();

  // await page.$x("input[name=input-event-start]");
  // await page.$x("input[name=input-event-end]");

  const days = await page.$x(
    '//*[@id="form-validation"]/div[18]/div/div[2]/div[2]/div/div/div/button'
  );
  await days[0].click();
  await page.waitForNetworkIdle();
  const daysList = await page.$x(
    '//*[@id="form-validation"]/div[18]/div/div[2]/div[2]/div/div/div/div/ul/li[1]'
  );
  await daysList[0].click();
  await page.waitForNetworkIdle();
  const daysOuter = await page.$x(
    '//*[@id="form-validation"]/div[18]/div/div[2]/div[1]'
  );
  await daysOuter[0].click();

  await page.waitForNetworkIdle();

  const openHour = await page.$x(
    '//*[@id="form-validation"]/div[18]/div/div[3]/div[2]/div/div/input'
  );
  await openHour[0].click();
  await page.waitForNetworkIdle();
  const openHourList = await page.$x('//*[@id="h-0"]');
  await openHourList[0].click();
  await page.waitForNetworkIdle();
  const openBtn = await page.$x("/html/body/div[6]/div/div[2]/button[4]");
  await openBtn[0].click();
  const openMinuteClick = await page.$x('//*[@id="m-0"]');
  await openMinuteClick[0].click();
  await openBtn[0].click();

  const closeHour = await page.$x(
    '//*[@id="form-validation"]/div[18]/div/div[4]/div[2]/div/div/input'
  );
  await closeHour[0].click();
  await page.waitForNetworkIdle();
  const closeHourList = await page.$x('//*[@id="h-23"]');
  await closeHourList[0].click();
  await page.waitForNetworkIdle();
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
};
