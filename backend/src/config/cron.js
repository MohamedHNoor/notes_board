import cron from "cron";
import https from "https";

const job = new cron.CronJob("*/14 * * * *", function () {
  https.get(process.API_URL, (res) => {
    if (res.statusCode === 200) {
      return console.log("Render cron job get resquest send successfully!");
    } else {
      return console.log("Render cron job get resquest Failed", res.statusCode);
    }
  });
});

export default job;
