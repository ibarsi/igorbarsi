import { PRODUCTION_URL, LOCAL_URL } from './config';

export const isProduction = process.env.NODE_ENV === 'production';

export const BASE_URL = isProduction ? PRODUCTION_URL : LOCAL_URL;
