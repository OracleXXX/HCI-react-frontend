### 一、Global

- 手机端，ipad端 toggle问题和尺寸问题（设计还没出 所以没写）

### 二、Header

#### 	1. Navbar

- hover目前是显示边框1px solid #ffffff => 改成在字下面显示一个类似长方体矩形的效果，并且加入入场动画

####      2. Banner

- 加入跑马灯组件，一共四页
  - 每页切换背景图片
  - 每页切换文字
  - 每页的搜索房屋编号的搜索框保持不变
- 搜索框加入更改placeholder的margin时focus时光标没了

### 三、 We offer

- 目前没有问题，

### 四、NewProjectDemo

- 轮播图breakpoint没做目前还不知道有没有bug

### FlowChart

- 写的有点儿乱
- 数据都放在了InvestmtFLowChart.js中，没有放在state里面（不确定需不需要放）
- render函数里面用了两遍this.flowchart() ，有重复操作（希望可以优化）
- InvestmtFLowChart.js中部分函数代码重复，不够简洁（需要优化）
- css组件大规模重复，如果再加上mobile端的breakpoint，彻底就写成意大利面条了（特别需要优化）

