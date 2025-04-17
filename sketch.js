let bows = [];
let rows = 5; // 行數
let cols = 6; // 列數

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#d8e2dc'); // 設定背景顏色為 d8e2dc

  let cellWidth = width / cols; // 每個網格的寬度
  let cellHeight = height / rows; // 每個網格的高度

  // 交錯生成蝴蝶結
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let offsetX = (row % 2 === 0) ? 0 : cellWidth / 2; // 偶數行不偏移，奇數行向右偏移半個網格
      bows.push({
        x: cellWidth * col + cellWidth / 2 + offsetX, // 網格中心的 x 座標
        y: cellHeight * row + cellHeight / 2, // 網格中心的 y 座標
        size: random(30, 40) // 初始大小
      });
    }
  }
}

function draw() {
  background('#d8e2dc'); // 確保每次繪製時背景顏色一致

  // 計算大小變化幅度
  let sizeOffset = map(mouseX, 0, width, 20, 50);

  // 繪製蝴蝶結
  noStroke();

  for (let bow of bows) {
    let bowSize = bow.size + sizeOffset;

    // 左翼
    fill(255); // 白色
    ellipse(bow.x - bowSize / 4, bow.y, bowSize / 2, bowSize);

    // 右翼
    ellipse(bow.x + bowSize / 4, bow.y, bowSize / 2, bowSize);

    // 中心結
    fill(255); // 中心結顏色改為白色
    ellipse(bow.x, bow.y, bowSize / 4, bowSize / 2);

    // 左尾巴
    fill(255); // 白色
    triangle(
      bow.x - bowSize / 8, bow.y + bowSize / 4, // 從中心結的左下方連接
      bow.x - bowSize / 2, bow.y + bowSize,    // 左下角
      bow.x - bowSize / 4, bow.y + bowSize     // 右下角
    );

    // 右尾巴
    triangle(
      bow.x + bowSize / 8, bow.y + bowSize / 4, // 從中心結的右下方連接
      bow.x + bowSize / 2, bow.y + bowSize,    // 右下角
      bow.x + bowSize / 4, bow.y + bowSize     // 左下角
    );
  }
}