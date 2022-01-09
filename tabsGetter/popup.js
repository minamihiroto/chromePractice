//結果を表示する領域を取得
let results = document.getElementById("results");

//結果を格納する配列を宣言
let array = [];

//ブラウザのタブを取得,tabsにタブ情報が入っている
chrome.tabs.query({lastFocusedWindow: true},(tabs) => {

 //取得したタブ数分を繰り返し
 for(let i=0; i<tabs.length; i++){
   let output = tabs[i].url; //urlを取得
   array.push(output);
 }

results.value = array.join("\n\n"); //arrayの要素を改行で区切ってresultsに表示
results.select(); //resultsを選択状態に
});
