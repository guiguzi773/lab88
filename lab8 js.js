// 学生名单
const students = [
    "张三", "李四", "王五", "赵六", "钱七", 
    "孙八", "周九", "吴十", "郑十一", "王十二",
    "刘十三", "陈十四", "杨十五", "黄十六", "赵十七"
];

// 获取DOM元素
const displayArea = document.getElementById("displayArea");
const selectedArea = document.getElementById("selectedArea");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

let timer = null;
let isRunning = false;

// 随机选择学生函数
function getRandomStudent() {
    // 使用Math.random()生成0-1的随机数，乘以学生数组长度
    // 使用Math.floor()向下取整得到随机索引
    const randomIndex = Math.floor(Math.random() * students.length);
    return students[randomIndex];
}

// 开始随机选择
startBtn.addEventListener("click", function() {
    if (isRunning) return;
    
    isRunning = true;
    startBtn.disabled = true;
    stopBtn.disabled = false;
    
    // 使用setInterval定时器快速切换显示不同的学生
    timer = setInterval(function() {
        displayArea.textContent = getRandomStudent();
    }, 100); // 每100毫秒切换一次
});

// 停止随机选择
stopBtn.addEventListener("click", function() {
    if (!isRunning) return;
    
    // 清除定时器
    clearInterval(timer);
    isRunning = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    
    // 显示最终选中的学生
    const selectedStudent = displayArea.textContent;
    selectedArea.textContent = `选中学生: ${selectedStudent}`;
    
    // 高亮显示
    displayArea.style.backgroundColor = "#d4edda";
    displayArea.style.color = "#155724";
    displayArea.style.border = "2px solid #c3e6cb";
    
    // 2秒后恢复原样式
    setTimeout(function() {
        displayArea.style.backgroundColor = "#f9f9f9";
        displayArea.style.color = "#2c3e50";
        displayArea.style.border = "2px dashed #ccc";
    }, 2000);
});