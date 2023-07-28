import { CronJob } from 'cron';
import { NHentaiConstants } from '../constants/index.js';
import { simulateNHentaiRequest } from '../services/nhentai.js';
import { currentTime } from '../utils/index.js';

export const keepAliveNHentaiCookie = new CronJob(
  '0 0,20,40 * * * *',
  async () =>
    await simulateNHentaiRequest(NHentaiConstants.NHENTAI_KEEP_COOKIE_ALIVE_ENDPOINT)
      .then(() => {
        console.log(`[${currentTime()}] Keep alive NHentai cookie done`);
      })
      .catch((err: any) => {
        console.log(err);
      }),
);
