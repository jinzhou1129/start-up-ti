const dimensionMeta = {
  opportunity: {
    title: "第一维度：保密",
    subtitle: "",
    label: "商机敏感度",
  },
  risk: {
    title: "第二维度：保密",
    subtitle: "",
    label: "风险承受能力",
  },
  execution: {
    title: "第三维度：保密",
    subtitle: "",
    label: "执行力与耐心",
  },
  iteration: {
    title: "第四维度：保密",
    subtitle: "",
    label: "学习与迭代能力",
  },
};

const questions = [
  {
    id: 1,
    dimension: "opportunity",
    text: "你排队两小时进了一家网红店：东西一般、定价离谱、服务凑合。你：",
    options: [
      { text: "排队的人有病吧？？", score: 1 },
      { text: "它是营销、选址还是氛围做对了🧐", score: 2 },
      { text: "太好了，用户果然不是要最好，而是要一个足够像“值得买”的理由", score: 3 },
    ],
  },
  {
    id: 2,
    dimension: "opportunity",
    text: "抖音给你推了一个产品，丑、贵、看起来有手就行，但销量极高。你：",
    options: [
      { text: "骗人广告，然后划走", score: 1 },
      { text: "不是，它到底戳中了什么需求？？", score: 2 },
      { text: "秒懂：这不是产品，这是信仰/lifestyle", score: 3 },
    ],
  },
  {
    id: 3,
    dimension: "opportunity",
    text: "你搬到一个陌生国家，发现一个超级基础的东西很难买到。你：",
    options: [
      { text: "大声吐槽这个国家的人没品味，找替代品", score: 1 },
      { text: "做笔记：这里可能有空缺", score: 2 },
      { text: "谁会买、谁能卖、为什么她不卖", score: 3 },
    ],
  },
  {
    id: 4,
    dimension: "risk",
    text: "你发现了一片蓝海正在幸福遨游，发现有家公司和你赛道完全相同，并且全方位碾压你。你：",
    options: [
      { text: "淡定，健康的市场一定是有竞争的", score: 3 },
      { text: "好嫉妒好焦虑，那我还干个毛😇", score: 2 },
      { text: "不想干了，我只想做没有人做的事情", score: 1 },
    ],
  },
  {
    id: 5,
    dimension: "risk",
    text: "你准备做一个项目，逻辑超级顺，但前六个月都没有可预见的显著收入。你：",
    options: [
      { text: "谢谢，我的人生不需要再多一个长期亏损爱好🥲", score: 1 },
      { text: "低成本试试，别把裤子赔掉就行", score: 2 },
      { text: "梭哈！这算什么风险！这顶多算创业的入场动画", score: 3 },
    ],
  },
  {
    id: 6,
    dimension: "risk",
    text: "你把自己的商业想法讲给朋友，她说：“听起来不太靠谱。”你：",
    options: [
      { text: "行，那大概就是我又在做梦", score: 1 },
      { text: "哪块不靠谱，怎么推出来的", score: 2 },
      { text: "更兴奋了🥵所有人都认可的东西往往也赚不到像样的钱", score: 3 },
    ],
  },
  {
    id: 7,
    dimension: "execution",
    text: "一个项目开始三周后进入了真正的日常：回消息、盯进度、改细节、补漏洞、催人、再催人。你：",
    options: [
      { text: "突然觉得自己是被这个项目骗进来的", score: 1 },
      { text: "还能做，但需要不断给自己找点意义感", score: 2 },
      { text: "终于开始了。前面那点激情戏根本不算创业😌", score: 3 },
    ],
  },
  {
    id: 8,
    dimension: "execution",
    text: "你发了个新产品/新服务，第一周数据平平，第二周也没起色。你：",
    options: [
      { text: "好的，确认了，我果然不是这块料", score: 1 },
      { text: "再改改看，来都来了，大过年的", score: 2 },
      { text: "才两周，go on", score: 3 },
    ],
  },
  {
    id: 9,
    dimension: "execution",
    text: "有个方向理论上能长期赚钱，但过程包括：做表、跟进、复盘、沟通、催款、对齐、修流程。你：",
    options: [
      { text: "听到第三个词我已经灵魂出走了🫥", score: 1 },
      { text: "我能做，但别让我永远做", score: 2 },
      { text: "耶，这不就是护城河吗", score: 3 },
    ],
  },
  {
    id: 10,
    dimension: "iteration",
    text: "你进入一个完全陌生的行业，第一页资料就出现一堆术语，看起来像在防外人。你：",
    options: [
      { text: "关掉页面，告诉自己这不是逃避，是尊重专业🤫", score: 1 },
      { text: "慢慢查，慢慢问，先把人话版本拼出来", score: 2 },
      { text: "做中学。术语只是第一道门槛", score: 3 },
    ],
  },
  {
    id: 11,
    dimension: "iteration",
    text: "你第一次做项目，你好认真，火热翻车了。你：",
    options: [
      { text: "默默怀疑：也许我并没有什么商业天赋", score: 1 },
      { text: "复盘❤️‍🩹到底哪一步出的问题啊。。。", score: 2 },
      { text: "很好，又排除了一种死法。失败只要留了样本，就还没白死", score: 3 },
    ],
  },
  {
    id: 12,
    dimension: "iteration",
    text: "你的产品收到三种反馈：有人说太复杂，有人说信息不够，还有人根本没看懂。你：",
    options: [
      { text: "唉，果然toC的东西我做不来", score: 1 },
      { text: "挑几条看起来最合理的先改", score: 2 },
      { text: "先判断这些人是不是同一类用户。不是所有意见都配活到下一版", score: 3 },
    ],
  },
];

const resultsMap = {
  "low-low": {
    title: "安全区理论家",
    tagline: "你对创业最擅长的部分，是替别人的项目挑风险。",
    summary:
      "你不是没有脑子，相反你通常脑子很清醒。但这份清醒常常先把你自己按回座位上。你既不太想乱冲，也不太想长期挨打，于是创业在你这里，经常表现为：想得挺透，动得很慢。",
    shareText:
      "“我对创业最擅长的部分，是替别人的项目挑风险。市场还没打我，我已经先替市场把我劝退了。”",
    strengths: [
      "不容易被风口和大词直接骗走钱包。",
      "对风险、漏洞、扯淡叙事有天然警惕。",
      "适合做稳定结构里的判断和优化。",
    ],
    blindspots: [
      "会把审慎活成拖延，把理性活成围观。",
      "容易高估“准备充分”对创业的意义，低估“先上车再说”的必要性。",
      "很容易在别人真的动起来之前，先把自己论证没了。",
    ],
    industries: ["成熟加盟", "标准化服务", "稳定代理分销", "流程型小生意", "后端支持类业务"],
  },
  "mid-low": {
    title: "灵感收藏夹",
    tagline: "你的推特转帖、小红书收藏夹、相册截图可绕地球一圈。",
    summary:
      "你对机会不是没有感觉，甚至经常比别人先闻到一点味儿。但你的执行没有同步长出来。于是你擅长说“这个其实能做”，也擅长在真正开始之后慢慢失联。",
    shareText:
      "“我的想法都太棒了，我不想放弃任何一个。”",
    strengths: [
      "脑子转得不慢，对机会和变化有反应。",
      "能看懂一些趋势，但不容易太死板。",
      "在前期 brainstorm、内容表达、方向感知上有天赋。",
    ],
    blindspots: [
      "容易把“我已经想明白了”误判成“我已经在做了”。",
      "启动后容易被琐碎和重复劝退。",
      "很需要外部节奏，否则想法会自然风干。",
    ],
    industries: ["内容创业", "策划咨询", "选品研究", "品牌定位", "商务拓展"],
  },
  "high-low": {
    title: "蓝海洁癖",
    tagline: "你是在做事，还是想证明自己不一样？",
    summary:
      "你很会闻商机，甚至带一点狩猎本能。问题是你对竞争的耐受度并不高，或者说，你对“自己不是唯一一个聪明人”这件事有点情绪。你喜欢新鲜、首发、没人做，一旦发现赛道上站着一堆人，热情会迅速蒸发。",
    shareText:
      "“我能下海，但最好那片海只有我一个人游。只要看到同行，我的事业心直接死掉。”",
    strengths: [
      "机会嗅觉强，容易发现别人没讲透的空缺。",
      "启动速度快，不需要别人手把手催。",
      "在0到1和新赛道探索上有天然冲劲。",
    ],
    blindspots: [
      "容易把“有竞争”误判成“没必要做”。",
      "容易追求独特性，高于追求赚钱本身。",
      "项目一旦进入常规化运营，热情就开始撤资。",
    ],
    industries: ["新项目试水", "跨境选品", "招商BD", "流量测试型业务", "趋势捕捉型生意"],
  },
  "low-mid": {
    title: "顶级执行员",
    tagline: "你不一定最会讲故事，但给你一套清楚打法，你真能把活干出来。",
    summary:
      "你不是风口体质，也不太迷恋高概念创业。你更像那种看准一个相对稳的方向，就会老老实实往前推的人。你不爱大起大落，但你对把事情做完整这件事，是真的比很多人有耐性。",
    shareText:
      "“我没你们会讲故事，但真给我一个能跑的模式，我把创业鸡血选手全打飞。”",
    strengths: [
      "执行稳定，能把反复、重复、麻烦的事做完。",
      "不太容易因为情绪化就把整个盘子掀翻。",
      "适合在清晰模式里持续优化，而不是反复换赛道。",
    ],
    blindspots: [
      "对新机会不够敏感，容易错过窗口期。",
      "可能会在不够好的赛道里，用努力硬补天花板。",
      "容易长期埋头做事，忘了抬头看方向。",
    ],
    industries: ["本地服务", "门店运营", "传统贸易", "项目执行", "供应链跟单"],
  },
  "mid-mid": {
    title: "现实小老板",
    tagline: "你不是最极端的那型，但你很有机会做成一个真能活下来的生意。",
    summary:
      "你比较均衡。能看机会，也能做事；能承受一点风险，也没疯到把人生全押上去。你可能不是最有戏剧性的创业人格，但在现实世界里，这反而是很不错的配置：不容易突然飘，也不容易突然碎。",
    shareText:
      "“我没有最夸张的天赋，也没有最离谱的病，所以反而比较像现实世界里真的能把生意开下去的人。”",
    strengths: [
      "综合能力平衡，不太偏科。",
      "既能动脑，也能落地，容错率比较高。",
      "适合小团队、现金流导向、慢慢扩大的生意。",
    ],
    blindspots: [
      "也因为均衡，可能不够狠，不够锋利。",
      "容易在“差不多行了”里停太久。",
      "如果环境特别激烈，可能会显得不够赌。",
    ],
    industries: ["小团队服务公司", "电商品牌", "区域型生意", "咨询教培", "稳步扩张项目"],
  },
  "high-mid": {
    title: "高速试错机",
    tagline: "你对机会有感觉，也敢往里冲，只是系统化和耐心还在加载中。",
    summary:
      "你很适合高变化环境，也适合在不确定里找感觉。你不是完全没耐心，只是更喜欢前期推进，不喜欢后期磨损。你擅长让东西动起来，但不一定擅长把它熬成流程、制度和壁垒。",
    shareText:
      "“我闻到味儿就冲，撞墙了也能改，但让我安静地把一件事熬成系统，我偶尔会开始质疑人类文明。”",
    strengths: [
      "前期敏捷，能迅速验证方向。",
      "不怕试，不怕改，不容易被第一次失败打傻。",
      "适合需要速度和反应力的增长型业务。",
    ],
    blindspots: [
      "容易对稳定运营失去兴趣。",
      "容易在“已经跑起来了”和“已经稳了”之间产生误会。",
      "需要尽早补团队和流程，不然你自己会先烦。",
    ],
    industries: ["增长营销", "DTC品牌", "AI工具应用", "社群电商", "快速验证型项目"],
  },
  "low-high": {
    title: "苦活工程师",
    tagline: "别人忙着讲颠覆世界，你已经把表填了、节点盯了、流程跑了。",
    summary:
      "你对风口未必特别上头，但你对成事这件事是真有功德。你能学、能改、能扛、能磨，尤其擅长把别人嫌烦的部分变成自己真正的壁垒。你不一定是最会起盘的人，但很适合把复杂事情做深。",
    shareText:
      "“别人负责在台上说未来，我负责把表填完、坑填平、钱挣到。浪漫没有，复利很多。”",
    strengths: [
      "耐心强，能长期处理复杂、枯燥、重复的部分。",
      "学习和迭代能力高，不容易被一次打脸打废。",
      "适合长周期、重交付、重流程的行业。",
    ],
    blindspots: [
      "可能不够会找最性感的入口。",
      "容易低估营销、讲故事、造势这些前端动作的重要性。",
      "有时会在好赛道来临时反应偏慢。",
    ],
    industries: ["制造业", "工业服务", "农业供应链", "SaaS实施", "专业服务交付"],
  },
  "mid-high": {
    title: "系统搭建者",
    tagline: "你既能看机会，也能把脏活累活熬成壁垒。",
    summary:
      "你很适合做那种“听起来不够性感，但一旦做起来很难被替代”的业务。你不是最冲的赌徒，也不是纯执行机器，你更像搭系统的人：知道要看方向，也知道最后赚钱靠的往往不是情绪，而是结构。",
    shareText:
      "“我不迷信灵感，也不沉迷蛮干。我更相信，一门生意最后能不能赚钱，主要看它有没有被我熬成系统。”",
    strengths: [
      "方向感和落地能力都在线，适合长期经营。",
      "很适合从0到1再到1到10，而不是只卡在某一段。",
      "能在混乱里逐步建立规则、流程和可复制性。",
    ],
    blindspots: [
      "有时太重视结构，前期可能显得不够野。",
      "容易高估系统化的价值，低估短期传播的重要性。",
      "如果团队跟不上，你容易进入“全都我来”的加班宇宙。",
    ],
    industries: ["企业服务", "法务财税平台", "跨境服务", "物流供应链", "连锁模型"],
  },
  "high-high": {
    title: "破局操盘手",
    tagline: "你对机会有嗅觉，对挫折有麻木，对复杂度有一点危险的自信。",
    summary:
      "你是真的比较适合创业的人。你闻得到机会，也受得了压力；你能启动，也能修正；你不是没病，你只是病得比较适合市场。你的风险不在于不行，而在于太行之后，容易觉得自己什么都能控。",
    shareText:
      "“我对机会有嗅觉，对挫折有麻木，对复杂度有一点危险的自信。适合创业，但也很适合把盘子开太大。”",
    strengths: [
      "能看机会，也敢进场，还能持续把事情往前推。",
      "承压、学习、修正能力都强，适合复杂局。",
      "在资源整合、平台搭建、扩张推进上很有优势。",
    ],
    blindspots: [
      "最容易死于扩张冲动和控制欲过剩。",
      "会高估自己对复杂局面的掌控力。",
      "需要刻意管理节奏，不然容易把自己也当资源耗掉。",
    ],
    industries: ["平台型业务", "复杂撮合", "跨境贸易", "支付/金融科技", "多市场扩张项目"],
  },
};

const dom = {
  homeScreen: document.getElementById("home-screen"),
  quizScreen: document.getElementById("quiz-screen"),
  resultScreen: document.getElementById("result-screen"),
  startBtn: document.getElementById("start-btn"),
  restartBtnTop: document.getElementById("restart-btn-top"),
  retryBtn: document.getElementById("retry-btn"),
  questionNumber: document.getElementById("question-number"),
  dimensionTitle: document.getElementById("dimension-title"),
  dimensionSubtitle: document.getElementById("dimension-subtitle"),
  progressBar: document.getElementById("progress-bar"),
  questionText: document.getElementById("question-text"),
  optionsContainer: document.getElementById("options-container"),
  resultTitle: document.getElementById("result-title"),
  resultTagline: document.getElementById("result-tagline"),
  resultSummary: document.getElementById("result-summary"),
  strengthsList: document.getElementById("strengths-list"),
  blindspotsList: document.getElementById("blindspots-list"),
  industriesList: document.getElementById("industries-list"),
  scoreBars: document.getElementById("score-bars"),
  shareText: document.getElementById("share-text"),
  exploreAxisText: document.getElementById("explore-axis-text"),
  buildAxisText: document.getElementById("build-axis-text"),
};

let currentQuestionIndex = 0;
let scores = createEmptyScores();

function createEmptyScores() {
  return {
    opportunity: 0,
    risk: 0,
    execution: 0,
    iteration: 0,
  };
}

function showScreen(screen) {
  [dom.homeScreen, dom.quizScreen, dom.resultScreen].forEach((item) => {
    item.classList.remove("active");
  });
  screen.classList.add("active");
}

function startQuiz() {
  currentQuestionIndex = 0;
  scores = createEmptyScores();
  showScreen(dom.quizScreen);
  renderQuestion();
}

function restartQuiz() {
  showScreen(dom.homeScreen);
}

function renderQuestion() {
  const question = questions[currentQuestionIndex];
  const meta = dimensionMeta[question.dimension];

  dom.questionNumber.textContent = String(currentQuestionIndex + 1);
  dom.dimensionTitle.textContent = meta.title;
  dom.dimensionSubtitle.textContent = meta.subtitle;
  dom.questionText.textContent = question.text;
  dom.progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;

  dom.optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.type = "button";
    button.innerHTML = `
      <span class="option-letter">${String.fromCharCode(65 + index)}</span>
      <span class="option-copy">${option.text}</span>
    `;
    button.addEventListener("click", () => handleAnswer(option.score));
    dom.optionsContainer.appendChild(button);
  });
}

function handleAnswer(score) {
  const question = questions[currentQuestionIndex];
  scores[question.dimension] += score;

  currentQuestionIndex += 1;

  if (currentQuestionIndex < questions.length) {
    renderQuestion();
    return;
  }

  renderResult();
}

function getLevel(value) {
  if (value <= 4.9) return "low";
  if (value <= 6.9) return "mid";
  return "high";
}

function getAxisLabel(level, axisName) {
  const labels = {
    explore: {
      low: "低开拓：更像谨慎旁观，不太会主动扑向机会",
      mid: "中开拓：能闻到机会，但不至于一闻到就冲",
      high: "高开拓：闻到钱味就会开始自动跑商业模型",
    },
    build: {
      low: "低成事：很会想，也很会在麻烦开始后逐渐蒸发",
      mid: "中成事：能推进，但仍需要反馈、节奏和一点自我哄骗",
      high: "高成事：真能把脏活累活熬成壁垒",
    },
  };

  return labels[axisName][level];
}

function renderResult() {
  const opportunityScore = scores.opportunity;
  const riskScore = scores.risk;
  const executionScore = scores.execution;
  const iterationScore = scores.iteration;

  const exploreAxis = opportunityScore * 0.55 + riskScore * 0.45;
  const buildAxis = executionScore * 0.55 + iterationScore * 0.45;

  const exploreLevel = getLevel(exploreAxis);
  const buildLevel = getLevel(buildAxis);

  const result = resultsMap[`${exploreLevel}-${buildLevel}`];

  dom.resultTitle.textContent = result.title;
  dom.resultTagline.textContent = result.tagline;
  dom.resultSummary.textContent = result.summary;
  dom.shareText.textContent = result.shareText;

  dom.strengthsList.innerHTML = result.strengths.map((item) => `<li>${item}</li>`).join("");
  dom.blindspotsList.innerHTML = result.blindspots.map((item) => `<li>${item}</li>`).join("");
  dom.industriesList.innerHTML = result.industries
    .map((item) => `<span class="tag">${item}</span>`)
    .join("");

  dom.exploreAxisText.textContent = `${exploreAxis.toFixed(1)} / 9 · ${getAxisLabel(exploreLevel, "explore")}`;
  dom.buildAxisText.textContent = `${buildAxis.toFixed(1)} / 9 · ${getAxisLabel(buildLevel, "build")}`;

  renderScoreBars();
  showScreen(dom.resultScreen);
}

function renderScoreBars() {
  const entries = [
    ["opportunity", scores.opportunity],
    ["risk", scores.risk],
    ["execution", scores.execution],
    ["iteration", scores.iteration],
  ];

  dom.scoreBars.innerHTML = entries
    .map(([key, value]) => {
      const percentage = ((value - 3) / 6) * 100;
      return `
        <div class="score-row">
          <div class="bar-meta">
            <span class="bar-label">${dimensionMeta[key].label}</span>
            <span class="bar-value">${value} / 9</span>
          </div>
          <div class="bar-track">
            <div class="bar-fill" style="width: ${Math.max(0, Math.min(100, percentage))}%"></div>
          </div>
        </div>
      `;
    })
    .join("");
}

dom.startBtn.addEventListener("click", startQuiz);
dom.restartBtnTop.addEventListener("click", restartQuiz);
dom.retryBtn.addEventListener("click", startQuiz);
