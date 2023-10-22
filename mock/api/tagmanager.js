const Mock = require('mockjs');
const userList = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|10': [
    {
      id: '@id', // 随机id
      name: '@cname', // 随机名称
      nickName: '@last', // 随机昵称
      phone: /^1[34578]\d{9}$/, // 随机电话号码
      'age|11-99': 1, // 年龄
      address: '@county(true)', // 随机地址
      email: '@email', // 随机邮箱
      isMale: '@boolean', // 随机性别
      createTime: '@datetime', // 创建时间
    },
  ],
});
export default {
  'post|/mock/manager/text/list': (option) => {
    const textList = Mock.mock({
      'data|10': [
        {
          content: '@cparagraph',
          editTime: '@datetime',
          editor: '@cname',
          illegal: '@boolean',
          'paraTags|2': [
            {
              'endIndex|1-10': 1,
              'startIndex|10': 1,
              'tagKey|1-4': 1,
              tagValue: '@cname',
            },
          ],
          textId: '@id',
          'textLenType|1-2': 1,
          'version|1-10': 1,
        },
      ],
      page: {
        'total|2000-3000': 1,
      },
    });
    return textList;
  },
  'post|/mock/manager/text/delete': (option) => {},
  'put|/mock/manager/text/tag/long': (option) => {},
};
