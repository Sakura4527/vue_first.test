import { APIClient } from '@nocobase/sdk';

const api = new APIClient({
  baseURL: 'http://localhost:13000/api',
});

(async () => {
  const response = await api.resource('test').list();
  // 等价于
  // const response = await api.request({
  //   url: 'test:list',
  // });
  console.log(response.data);
})();