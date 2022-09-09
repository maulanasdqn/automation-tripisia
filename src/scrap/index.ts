import fs from "fs";
export const Scraping = async (page: any) => {
  let datas = JSON.parse(fs.readFileSync(process.env.DATA_SCRAP, "utf8"));
  for (const t of datas) {
    try {
      await page.goto(process.env.SCRAP_URL + "?s=" + t.title, { timeout: 0 });

      try {
        if (
          !(await page.$(
            ".td_module_3.td_module_wrap.td-animation-stack.td-meta-info-hide"
          ))
        )
          throw new Error("Gak ada disini");

        await page.click(
          ".td_module_3.td_module_wrap.td-animation-stack.td-meta-info-hide"
        );

        if (await page.url().includes("#google")) {
          console.log("Google bangsat kau ya", t.title);

          console.log("Reload agar si bangsat googel hilang", t.title);
          await page.reload({
            waitUntil: ["networkidle0", "domcontentloaded"],
          });

          console.log("Klik lagi", t.title);
          await page.click(
            ".td_module_3.td_module_wrap.td-animation-stack.td-meta-info-hide "
          );
        }

        console.log("Iddle menuggu sampai jaringan resolve", t.title);
        await page.waitForSelector(".summary-block", {
          visible: true,
        });

        const res = await page.evaluate(
          () => document.querySelector(".harga-tiket").textContent
        );

        console.log(t.title);
        console.log(res, "\n\n");
      } catch (err) {
        console.log(t.title);
        console.error(err, "\n\n");
      }
    } catch (err) {
      continue;
    }
  }
};
