// 変数の初期化
let untyped='';
// html要素の取得
const untypedfield=document.getElementById('untyped');
// textlist
const textList=[
  'Hello World','This is my App','How are you?',
  'Today is sunny','I love JavaScript!','Good morning',
  'I am Japanese','Let it be','Samurai',
  'Typing Game','Information Technology',
  'I want to be a programmer','What day is today?',
  'I want to build a web app','Nice to meet you',
  'Chrome Firefox Edge Safari','machine learning',
  'Brendan Eich','John Resig','React Vue Angular',
  'Netscape Communications','undefined null NaN',
  'Thank you very much','Google Apple Facebook Amazon',
  'ECMAScript','console.log','for while if switch',
  'var let const','Windows Mac Linux iOS Android',
  'programming'
];
// ランダムなテキスト表示（関数の作成）
const createText=()=>{
  let random=Math.floor(Math.random()*textList.length);

  // untypedがtextListの一番目
  untyped=textList[random];
  // htmlにtextcontentでuntypedfieldについか
  untypedfield.textContent=untyped;
};
// html上に表示
createText();
