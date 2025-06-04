// 体重を代入
let weight = 68;

// 身長を代入
let height = 1.7;

// BMIの計算
let bmi = weight / (height * height);

// BMIの計算結果をHTMLに出力
document.getElementById('bmi-result').innerText = 'あなたのBMIは ' + bmi + ' です。';

console.log(bmi);