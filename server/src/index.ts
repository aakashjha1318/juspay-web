require('regenerator-runtime');
require('dotenv/config');

import app from './lib/app';

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default server;
