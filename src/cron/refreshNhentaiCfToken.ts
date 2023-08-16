import { CronJob } from 'cron';
import { NHentaiConstants } from '../constants/index.js';
import { simulateNHentaiRequest } from '../services/nhentai.js';
import { getTime } from '../utils/index.js';

const cronName = 'NHentai Cloudflare refresh token';

export const refreshCf = async () => {
  const randomId = Math.floor(Math.random() * 400000) + 1;
  try {
    await simulateNHentaiRequest(NHentaiConstants.NHENTAI_GALLERY_ENDPOINT(randomId));
    return console.log(`[${getTime()}] ${cronName} done.`);
  } catch (e: any) {
    return console.log(`[${getTime()}] ${cronName} failed. ${e.message}`);
  }
};

export const refreshNHentaiCfToken = new CronJob('0 */20 * * * *', async () => {
  console.log(`[${getTime()}] ${cronName} started.`);
  await refreshCf();
  console.log(`[${getTime()}] ${cronName} finished.`);
});
