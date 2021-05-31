// @flow
import cors from 'cors';

export const corsOptions = {
  origin:
    process.env.NODE_ENV === 'production' && !process.env.FORCE_DEV
      ? [
          'https://spectrum.gq',
          'https://alpha.spectrum.gq',
          'https://admin.spectrum.gq',
          'https://hyperion.workers.spectrum.gq',
          'https://hyperion.alpha.spectrum.gq',
          process.env.NOW_URL,
        ].filter(Boolean)
      : [/localhost/],
  credentials: true,
};

export default cors(corsOptions);
