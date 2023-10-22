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
  'get|/getUsers': (option) => {
    return {
      status: 200,
      message: 'success',
      data: userList,
    };
  },
  'post|/upload': (option) => {
    const uploadData = Mock.mock({
      'data|1': [
        {
          'texts|2': [
            // {
            //   illegal: '@boolean',
            //   textContent: '@cparagraph(1,60)',
            //   textLenType: '@integer(-0.9,1)',
            // },
            {
              illegal: '@boolean',
              textContent:
                '<div class="xeditor_content app_h5_article"><p><span class="insert-data guba_stock" data-marketcode="HK|02370" data-markettype="116" data-stockcode="02370"><a href="http://quote.eastmoney.com/HK/02370.html">$力高健康生活(HK|02370)$</a> </span> </p><p>8月30号公布竹板高市值 收粮</p><p><span>次新股</span><span>力高健康生活</span><span>6日连涨超30%，现涨9.87%，盘中最高报14.08港元/股，再度刷新历史高价，总市值逼近30亿港元。该股今年3月31日正式登陆港交所，上市仅3个半月，股价翻逾3倍。据悉，公司业务类型除了基础物管服务以及增值服务外，还有康养业务，该业务2021年创造营收约384万元，营收贡献占比5%</span></p></div>',
              // textContent:
              //   '<div class="xeditor_content app_h5_article"><p>技术要点：</p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p>1、 个股在低位经历过一次放量拉升，这样才表明有主力支持，然后股价横盘调整，出现放量摸天花板，之后股价震荡调整，出现一字板后股价迅速升高突破，这表明主力在测压试盘</p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p>2、 经过一段时间调整后，均线被修复，呈多头趋势，当出现第一个板时macd上穿零轴，且始终保持在上方运行，在此期间成交量变小，之后又温和放量</p><p><br></p><p><br></p><p><br></p><p>3、我深耕进入骨海拼杀15年之久，历经两次牛熊转换，悟出属于自己的交易模式，接下来机会在汽车板块中，我复盘156家只汽车龙头，精心选到一只黑马</p><p><br></p><p>这只有三大特征：</p><p><br></p><p>1、该骨属于汽车+新能源车受益龙头，成长价值不比“大港”差</p><p><br></p><p>2、底部持续放量+筹码高度集中</p><p><br></p><p>3、符合热点方向，当前突破底部大平台。上涨趋势成型，想了解的朋友，可在蔚*</p><div class="insert-data wrap-img"><img class="insert-data image ext_img" id="IMGrnd_B15218C6813648CEB937C9CA949FB672" src="http://gbres.dfcfw.com/Files/picture/20220812/0152460778A20338D484054B6E300A3C_w268h103.png" height="139" alt=""></div><p><br></p><p><br></p><p><br></p><p>4、 在调整后期，股价接近前面的压力位，此时形态已呈完整走势，若此时出现一字板，就可考虑布局，跟前面出现的一字板相呼应，好像双龙盘空的形态，这个时候代表行情开始启动了</p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p>使用这个战法时一定要注意控制仓位，做好风控，主力很可能会因为行情的二次启动压力过大继续震荡洗盘，如果这次没启动成功也不要着急操作，等待下一次机会<span class="insert-data guba_stock" data-marketcode="SZ000040" data-markettype="0" data-stockcode="000040"><a href="http://quote.eastmoney.com/SZ000040.html">$东旭蓝天(SZ000040)$</a> </span> <span class="insert-data guba_stock" data-marketcode="SZ002045" data-markettype="0" data-stockcode="002045"><a href="http://quote.eastmoney.com/SZ002045.html">$国光电器(SZ002045)$</a> </span> <span class="insert-data guba_stock" data-marketcode="SZ002241" data-markettype="0" data-stockcode="002241"><a href="http://quote.eastmoney.com/SZ002241.html">$歌尔股份(SZ002241)$</a> </span> </p></div>',
              textLenType: '1',
            },
          ],
          workBatchId: '@id',
        },
      ],
    });
    return {
      status: 200,
      message: 'success',
      data: uploadData,
    };
  },
};
