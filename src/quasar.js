// src/quasar-plugin.js
import { Quasar } from 'quasar';
import 'quasar/src/css/index.sass';

export default {
  install: (app) => {
    app.use(Quasar, {
      // 配置选项
    });
  },
};
