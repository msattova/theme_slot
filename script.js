
let selected_flag = false;

window.onload = function() {
  const ul = document.getElementById("themelist");
  //お題リストを動的に作成
  for(let elm of themes){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(elm));
    ul.appendChild(li);
  }
};

function selectThemes() {
  const selected = document.getElementById("selected");
  if (selected_flag){
    const storefield = document.getElementById("stores");
    const stored = document.createElement("div");
    stored.setAttribute("class", "storecard");
    for(const child of selected.children) {
      stored.appendChild(child);
    }
    storefield.insertAdjacentElement("afterbegin", stored);
  }else{
    selected_flag = true;
  }
  selected.innerHTML = ""; //#selectedの中身を空にする
  const ol = document.createElement("ol");
  selected.appendChild(ol);
  const num = parseInt(document.getElementById("num").value);
  for(let i=0;i<num;i++){
    let li = document.createElement("li");
    let ind = getRandomInt(0, themes.length);
    li.appendChild(document.createTextNode(themes[ind]));
    ol.appendChild(li);
  }
}

//min<=n<=maxなランダムな整数nを得るやつ
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const themes = [
  "【目の前に、ありえない姿の死体が転がっていた】から始まる小説",
  "【その指先は、まっすぐに始まりの方へ向けられていた】から始まる小説",
  "【欠落したものが回復する】",
  "【そして東の空へとんでいった】で”終わる”小説",
  "【海辺】",
  "【一人称によるキャラクターの自己紹介】",
  "【空が見えない場所】",
  "【薬】",
  "【TS】",
  "【家族】",
  "【最初と最後を同じ台詞で終わらせる】",
  "【ロリババア】",
  "【架空の長編で世界観や設定の説明が粗方おわったタイミングに出すようなエピソード】",
  "【バイオテックトナカイ】",
  "【ラグランジュポイント】",
  "【刀】",
  "【焼き肉】",
  "【スタンド】",
  "【任意の言語】",
  "【終わりよければすべてよし】",
  "【かくし芸】",
  "【犬】",
  "【現代舞台の怪奇小説】",
  "【犠牲】",
  "【著作権フリーの作品から1行引用】",
  "【任意の作家の文体を真似】",
  "【千円札】",
  "【イマジナリーフレンド】",
  "【慌てない　慌てない】",
  "【夜勤】",
  "【銃】",
  "【病】",
  "【おにぎり！】",
  "【ソシャゲ】",
  "【列車】",
  "【ヒロインとの遭遇】",
  "【二度とやりたくない】",
  "【入れ替わり】",
  "【踵の高い靴】",
  "【染み抜き】",
  "【ここで告白が成功したカップルは永遠に幸せになれる伝説を持つ樹の下で殺し合う男と男】",
  "【おちる】",
  "【革命前夜】",
  "【犯行声明】",
  "【z】",
  "【音】",
  "【ディストピア】",
  "【次回予告】",
  "【百合】",
  "【頭領】",
  "【かける】",
  "【レース】",
  "【ルビ芸】",
  "【賢者】",
  "【探しもの】",
  "【モキュメンタリー】",
  "【埃を拭う】",
  "【遠心分離機】",
  "【市長選挙】",
  "【走る】",
  "【運命】",
  "【前提の崩壊】",
  "【理想の第一話】",
  "【聖体パン】",
  "【ミステリー】"
];
