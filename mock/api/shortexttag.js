const Mock = require('mockjs');
// const userList = Mock.mock({
//   // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//   'list|10': [
//     {
//       id: '@id', // 随机id
//       name: '@cname', // 随机名称
//       nickName: '@last', // 随机昵称
//       phone: /^1[34578]\d{9}$/, // 随机电话号码
//       'age|11-99': 1, // 年龄
//       address: '@county(true)', // 随机地址
//       email: '@email', // 随机邮箱
//       isMale: '@boolean', // 随机性别
//       createTime: '@datetime', // 创建时间
//     },
//   ],
// });

const somenum = Mock.mock({
  data: {
    'workAllTextNum|1-100': 1,
    'workLongTextNum|1-100': 1,
    'workShortTextNum|1-100': 1,
    workTime: '@datetime',
  },
  page: {
    'total|1-100': 1,
  },
});
const tagList = Mock.mock({
  'data|5': [
    {
      tagKey: '@id',
      tagValue: '@cname',
    },
  ],
});

const textList = Mock.mock({
  data: {
    'texts|10': [
      {
        textId: '@id',
        content: '@csentence',
      },
    ],
    workBatchId: '@id',
  },
});

export default {
  'get|/mock/text/work/stat': (option) => {
    console.log(option);
    return somenum;
  },
  'get|/mock/text/tag/list': (option) => {
    return tagList;
  },
  'get|/mock/text/load/short': (option) => {
    const textList = Mock.mock({
      data: {
        'texts|10': [
          {
            textId: '@id',
            content: '@csentence',
            version: '@id',
            illegal: false,
          },
        ],
        workBatchId: '@id',
      },
    });
    return textList;
  },
  'put|/mock​/text​/tag​/short': (option) => {},
};
