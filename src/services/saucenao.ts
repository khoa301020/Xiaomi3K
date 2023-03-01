import axios, { AxiosResponse } from 'axios';
import qs from 'qs';
import { Constants } from '../constants/constants.js';
import { ISaucenaoSearchRequest } from '../types/saucenao.js';

export async function saucenao(params: ISaucenaoSearchRequest): Promise<AxiosResponse> {
  return await axios.get(`${Constants.SAUCENAO_API}?${qs.stringify(params)}`);
}

export const convertedFields = (data: any) =>
  Object.entries(data).map(([key, value]) => {
    if (Array.isArray(value) && value.every((v) => v === undefined || v === null)) {
      return { name: key, value: 'N/A' };
    }
    if (value === undefined || value === null || value === '') {
      return { name: key, value: 'N/A' };
    }
    if (Array.isArray(value) && key === 'ext_urls' && value.length > 0)
      return {
        name: key,
        value: value.map((e: any) => `- [${Constants.REGEX_DOMAIN_NAME_ONLY.exec(e)![1]}](${e})`).join('\n- '),
      };

    return { name: key, value: value.toString() };
  });
