const PRODUCTION_URL = 'https://www.igorbarsi.com';
const LOCAL_URL = 'http://localhost:8000';

const isProduction = process.env.NODE_ENV === 'production';

export const BASE_URL = isProduction ? PRODUCTION_URL : LOCAL_URL;
export const { FB_APP_ID } = process.env;
export const FEATURE_SWITCHES = {
  NEWSLETTER: false,
};
