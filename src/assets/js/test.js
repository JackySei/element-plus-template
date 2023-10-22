const str =
  '124568<span class="annotator-h3" data-selector="f6b2dbb2-5d9f-4052-b8c0-6adfee0e7279"> certain species. Some scientists thought this would cause krill — the tiny crustaceans that many whales gulp down — to explode in number. But that didn\'t happen<span id="f6b2dbb2-5d9f-4052-b8c0-6adfee0e7279" class="tagclass">[涉黄]</span></span>  124568<span class="annotator-h3" data-selector="f6b2dbb2-5d9f-4052-b8c0-6adfee0e7279"> certain species. Some scientists thought this would cause krill — the tiny crustaceans that many whales gulp down — to explode in number. But that didn\'t happen<span id="f6b2dbb2-5d9f-4052-b8c0-6adfee0e7279" class="tagclass">[涉黄]</span></span>';
const things = [
  { thing: '3', sp: 2 },
  { thing: '7', sp: 5 },
];
const array = str.split('');
const strLength = array.length;
const thingLength = things.length;
let count = 0;
function mainThread(item) {
  setTimeout(function functionName() {
    array.splice(item.sp, 0, item.thing);
    count++;
    if (count >= thingLength) {
      // console.log('结果是：' + array.join(''));
    }
  }, strLength - item.sp);
}
things.forEach(mainThread);
