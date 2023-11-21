// 変数の初期化
let untyped='';
let typed='';
// html要素の取得
const untypedfield=document.getElementById('untyped');
const typedfield=document.getElementById('typed');
const wrap=document.getElementById('wrap');
const start=document.getElementById('start');
const count=document.getElementById('count');
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
  typed='';
  typedfield.textContent=typed;

  let random=Math.floor(Math.random()*textList.length);

  // untypedがtextListの一番目
  untyped=textList[random];
  // htmlにtextcontentでuntypedfieldについか
  untypedfield.textContent=untyped;
};

// キー入力の判定
const keyPress=e=>{

  // 誤タイプ（入力内容とUntypedの先頭が不一致だと返す）
  if(e.key!==untyped.substring(0,1)){
    // クラスの追加
    wrap.classList.add('mistyped');
    // 0.1秒後に背景色をもとに戻す
    setTimeout(()=>{
      // mistypedのクラスの削除
      wrap.classList.remove('mistyped');
    },100);
    return;
  }
  // 正タイプ（入力された文字をtypedに移動する）
  // クラスの削除
  wrap.classList.remove('mistyped');
  typed+=untyped.substring(0,1);
  untyped=untyped.substring(1);
  typedfield.textContent=typed;
  untypedfield.textContent=untyped;
// もしuntypedが0文字になったら新しいテキストを表示
  if(untyped==''){
    createText();
  }
};

// タイピングスキルのランクを判定
const rankCheck=score=>{};

// ゲーム終了
const gameOver=id=>{
  clearInterval(id);
  console.log('ゲーム終了!');
};

// カウントダウンタイマー
const timer=()=>{
  // タイマー部分のＨＴＭＬ要素を取得する
  let time=count.textContent;
  const id=setInterval(()=>{
    // 処理①カウントダウンする(countのテキストコンテンツから)
    time--;
    count.textContent=time;

    // 処理②カウントが0になったらタイマーを停止する
    if(time<=0){
      gameOver(id);
    }
  },1000);
};

// ゲームスタート時の処理
start.addEventListener('click',()=>{
// カウントダウンタイマーを開始する(関数の挿入)
  timer();
// ランダムなテキスト表示（関数の挿入）
  createText();
  // スタートボタンの非表示
  start.style.display='none';

  // キーボードのイベント処理
  document.addEventListener('keypress',keyPress);
});

untypedfield.textContent='スタートボタンで開始';