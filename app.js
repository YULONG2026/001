/**
 * 小瓜地理冲冲冲 - Apple Style Design
 * 核心逻辑：每天5道新题 + 错题循环
 */

// ============ 高考真题题库 ============
const GEO_QUESTIONS = [
  {
    id: 'Q0001',
    category: '自然地理',
    subCategory: '地球与地图',
    tags: ['高考真题', '地球与地图', '指向标'],
    difficulty: 2,
    stem: '该类地图的设计方式常见于（   ）',
    options: { A: '房产区位图', B: '世界航海图', C: '国家政区图', D: '气象预报图' },
    answer: 'A',
    explanation: '房产区位图范围较小，常聚焦小区、楼盘及周边环境，需展示与周边设施相对位置关系，因此常根据需要调整指向标，A正确；世界航海图需要真实的地图，一般不进行刻意的倾斜处理，B错误；国家政区图需覆盖全国范围，通常统一使用"上北下南，左西右东"的指向标，便于行政规划，C错误；气象预报图通常使用普通地图，无需进行倾斜处理，D错误。故选A。',
    source: '2025·江苏·高考真题'
  },
  {
    id: 'Q0002',
    category: '自然地理',
    subCategory: '地球与地图',
    tags: ['高考真题', '地球与地图', '指向标'],
    difficulty: 2,
    stem: '该图采用的指向方式，能够（   ）',
    options: { A: '满足显示城市范围需要', B: '便于确定景点相对位置', C: '增加测量距离的准确性', D: '提高交通线路的可读性' },
    answer: 'A',
    explanation: '地图指向标的核心作用是明确方向，帮助判断各元素的相对位置。由上题分析可知，该地图与实际地图相比进行了一定的倾斜处理，这样可以将需要展示的城市范围尽可能地展示出来，A正确。确定景点相对位置和提高交通线路的可读性不需要进行倾斜处理，B、D错误。增加测量距离的准确性主要依靠比例尺的准确性，C错误。故选A。',
    source: '2025·江苏·高考真题'
  },
  {
    id: 'Q0003',
    category: '自然地理',
    subCategory: '地球与地图',
    tags: ['高考真题', '地球与地图', '天体'],
    difficulty: 2,
    stem: '"四星伴月"这一天文现象难得一见，主要是因为各天体（   ）',
    options: { A: '自转周期不同', B: '体积大小不同', C: '自转方向不同', D: '公转周期不同' },
    answer: 'D',
    explanation: '"四星伴月"这一天文现象难得一见，主要是因为各天体公转周期不同，难易同框，D正确；难以同框与自转周期不同、体积大小不同、自转方向不同无关，ABC错误。故选D。',
    source: '2023·江苏·高考真题'
  },
  {
    id: 'Q0004',
    category: '自然地理',
    subCategory: '地球与地图',
    tags: ['高考真题', '地球与地图', '比例尺'],
    difficulty: 2,
    stem: '图中最短的精华路线里程约为（   ）',
    options: { A: '5千米', B: '10千米', C: '15千米', D: '20千米' },
    answer: 'B',
    explanation: '图中最短精华路线是从M学校至传统民居保护地这条线路，根据图中比例尺进行计算，图上1厘米代表实际距离5千米，可以计算出最短的精华路线里程约为10千米，B项正确。故选B。',
    source: '2021·北京·高考真题'
  },
  {
    id: 'Q0005',
    category: '区域地理',
    subCategory: '中国地理',
    tags: ['高考真题', '中国地理', '华北平原'],
    difficulty: 1,
    stem: '该镇（   ）',
    options: { A: '位于北京东南方向', B: '地处华北平原', C: '粮画原料主要是稻米', D: '水路交通便捷' },
    answer: 'B',
    explanation: '北京中心坐标大致为北纬40°，东经116°，结合图中所给当地经纬度可以判断，该镇位于北京西南方位，A项错误；结合当地经纬度可以判断出，该镇位于华北平原，B项正确；该地位于我国北方地区，粮画原料主要是小麦，C项错误；读图可知，当地交通方式主要是以铁路和公路运输为主，水运不便利，D项错误。故选B。',
    source: '2021·北京·高考真题'
  },
  {
    id: 'Q0006',
    category: '自然地理',
    subCategory: '地球运动',
    tags: ['高考真题', '地球运动', '日出'],
    difficulty: 3,
    stem: '当日，甲地日出的地方时为（   ）',
    options: { A: '5点', B: '6点', C: '7点', D: '8点' },
    answer: 'C',
    explanation: '由题干可知，此时丙地的地方时为17点，则乙地为12点，则乙地所在的经线为昼半球的中央经线；由图2可知，乙地为晨昏线与纬线相切的切点，而且"飞机在甲、乙、丙间沿地球的大圆周飞行，"可判断甲、乙、丙为晨昏线，则甲丙所在的纬线为昼弧，甲丙之间经度相差150°，则可以推出甲、丙的昼长为10小时，根据公式"日出=12-昼长/2"可以计算出甲地日出的地方时为7点，C正确。ABD错误。故选C。',
    source: '2020·浙江·高考真题'
  },
  {
    id: 'Q0007',
    category: '自然地理',
    subCategory: '地球运动',
    tags: ['高考真题', '地球运动', '纬度差'],
    difficulty: 3,
    stem: '若飞机匀速、等高飞行，则在甲-乙-丙间单位时间内飞过的纬度差（   ）',
    options: { A: '持续变大', B: '先变大，后变小', C: '持续变小', D: '先变小，后变大' },
    answer: 'D',
    explanation: '飞机在甲-乙-丙间沿大圆周（最短航线）飞行时，是先向东北飞，再向正东飞，后向东南飞。在由甲飞向乙时，随着纬度的升高，飞行方向越接近与纬线平行，所以，单位时间内飞过的纬度差变小；在由乙飞向丙时，随着纬度的降低，飞行方向越接近与经线平行，所以，单位时间内飞过的纬度差变大。因此，飞机在甲-乙-丙间单位时间内飞过的纬度差先变小，后变大。故选D。',
    source: '2020·浙江·高考真题'
  },
  {
    id: 'Q0008',
    category: '人文地理',
    subCategory: '区域发展',
    tags: ['高考真题', '人文地理', '商贸'],
    difficulty: 2,
    stem: '公元17、18世纪基尔瓦商贸地位逐渐衰落的主要原因是（   ）',
    options: { A: '资源枯竭', B: '风沙影响', C: '气候变暖', D: '航道变迁' },
    answer: 'D',
    explanation: '公元17、18世纪基尔瓦商贸地位逐渐衰落的主要原因是航道变迁，因为随着航海技术的发展，让基尔瓦显得有些鸡肋（基尔瓦仅仅是由于早期航海家们需要一个落脚点，充当桑给巴尔岛和索法拉之间的中转站。）。故选D。',
    source: '2021·江苏·高考真题'
  },
  {
    id: 'Q0009',
    category: '自然地理',
    subCategory: '地球与地图',
    tags: ['高考真题', '地球与地图', '距离计算'],
    difficulty: 2,
    stem: '郑和船队若每天航行190km，从科伦坡经摩加迪沙至基尔瓦的最短时间约（   ）',
    options: { A: '2周', B: '4周', C: '6周', D: '8周' },
    answer: 'B',
    explanation: '据图中经纬线可知，从科伦坡到摩加迪沙大致经过35个经度距，且位于赤道附近，故两地距离可计算为111×35=3885km，从摩加迪沙到基尔瓦大致经过10个纬度距，可计算两地距离为10×111=1110km，总距离约4995km，每天航行190km，需要约26天，约4周。故选B。',
    source: '2021·江苏·高考真题'
  },
  {
    id: 'Q0010',
    category: '人文地理',
    subCategory: '历史地理',
    tags: ['高考真题', '人文地理', '对外贸易'],
    difficulty: 2,
    stem: '公元8世纪基尔瓦作为商贸中心兴起时，其对外贸易的主要地区是（   ）',
    options: { A: '阿拉伯海沿岸', B: '南海沿岸', C: '几内亚湾沿岸', D: '地中海沿岸' },
    answer: 'A',
    explanation: '结合时间"公元8世纪"可知当时有东罗马帝国和阿拉伯帝国存在，据图，基尔瓦位于非洲东海岸，东邻阿拉伯海，故判断其对外贸易的主要地区是阿拉伯海沿岸，A项正确，南海沿岸当时人口数量较少，商贸不如阿拉伯海沿岸发达，B项错误；几内亚湾沿岸和地中海沿岸与基尔瓦距离较远，商贸联系较少，CD项错误。故选A。',
    source: '2021·江苏·高考真题'
  },
  {
    id: 'Q0011',
    category: '人文地理',
    subCategory: '传统文化',
    tags: ['高考真题', '人文地理', '航海'],
    difficulty: 2,
    stem: '我国海南先民精确绘制该作业线路图，主要运用了（   ）',
    options: { A: '罗盘和燃香', B: '罗盘和洋流', C: '星象和燃香', D: '星象和洋流' },
    answer: 'A',
    explanation: '根据材料可知，海南先民是根据航向和用航海时间估算的距离而绘制的南海作业线路。古代人们用罗盘来确定方向，用燃香来计算时间，因此主要运用了罗盘和燃香，A正确，BCD错误。故选A。',
    source: '2023·河北·高考真题'
  },
  {
    id: 'Q0012',
    category: '区域地理',
    subCategory: '中国地理',
    tags: ['高考真题', '区域地理', '海岸地貌'],
    difficulty: 1,
    stem: '广东沿海地名多有"澳"字，"澳"字代表（   ）',
    options: { A: '海峡', B: '岛屿', C: '滩涂', D: '海湾' },
    answer: 'D',
    explanation: '根据材料"西南风急则居东澳，东北风急则居西澳，凡南洋海艘俱由此出口"可知东澳和西澳均为海上船只的出口，即港口。根据所学知识可知，港口多选择在水域较深，风浪较小海湾地区，因此"澳"字代表海湾，D正确，ABC错误。故选D。',
    source: '2023·河北·高考真题'
  },
  {
    id: 'Q0013',
    category: '自然地理',
    subCategory: '等高线地形图',
    tags: ['高考真题', '自然地理', '等高线'],
    difficulty: 2,
    stem: '图中Ⅰ～Ⅳ四个地点最易堆积塑料垃圾的是（   ）',
    options: { A: 'Ⅰ', B: 'Ⅱ', C: 'Ⅲ', D: 'Ⅳ' },
    answer: 'C',
    explanation: 'I、Ⅱ两处等深线数值虽然较大，但两点之间的位置等深线数值更大，垃圾会向更深处搬运，AB错误；根据图示信息可知，Ⅲ为等值线图中的闭合区域，根据"大于大值、小于小值"的原则可知，该处等深线数值较大，说明该处地势较低，最易堆积塑料垃圾，C正确，Ⅳ处等深线数值较小，地势较高，不易堆积，D错误。故选C。',
    source: '2025·河北·高考真题'
  },
  {
    id: 'Q0014',
    category: '自然地理',
    subCategory: '等高线地形图',
    tags: ['高考真题', '自然地理', '等高线', '地形'],
    difficulty: 2,
    stem: '该峡谷底部塑料垃圾的搬运方向是（   ）',
    options: { A: '自北向南', B: '自东向西', C: '自南向北', D: '自西向东' },
    answer: 'A',
    explanation: '根据材料信息"这些塑料垃圾是被深海沉积物裹挟沿峡谷底部向下搬运而来的"可知，该峡谷底部塑料垃圾是由地势高处向地势低处搬运。根据图示信息可知，该峡谷等深线数值北小南大，说明该峡谷地势北高南低，因此搬运方向是自北向南，A正确，BCD错误。故选A。',
    source: '2025·河北·高考真题'
  },
  {
    id: 'Q0015',
    category: '自然地理',
    subCategory: '地下水',
    tags: ['高考真题', '自然地理', '地下水'],
    difficulty: 2,
    stem: '考虑区域地质条件，枯水季节地下饮用水水源保护区应重点管控（   ）',
    options: { A: '水库的渗漏污染', B: '地下水平径流污染', C: '河流的渗漏污染', D: '地表垂直渗流污染' },
    answer: 'D',
    explanation: '根据材料可知，该地碳酸盐岩广布，溶蚀空隙和断裂发育，水循环条件和地下水储集条件良好。在枯水季节，地下饮用水水源保护区应重点管控地表垂直渗流污染，因为该地岩溶发育，地表水容易通过垂直渗流进入地下水，D正确；水库渗漏污染、地下水平径流污染、河流的渗漏污染不是重点管控对象，ABC错误。故选D。',
    source: '2024·河北·高考真题'
  },
  {
    id: 'Q0016',
    category: '自然地理',
    subCategory: '地下水',
    tags: ['高考真题', '自然地理', '地下水', '等水位线'],
    difficulty: 2,
    stem: '推测东石楼村附近地下水等水位线出现低值闭合现象的原因是当地（   ）',
    options: { A: '过度开采地下水', B: '地表蒸发加剧', C: '推广节水型农业', D: '大气降水减少' },
    answer: 'A',
    explanation: '从图中可以看到东石楼村附近地下水等水位线高度为48米，出现低值闭合，说明其地下水水位较周边更低。过度开采地下水会导致地下水位下降，形成降落漏斗，A正确；地表蒸发加剧对地下水位影响较小，B错误；推广节水型农业和大气降水减少不是主要原因，CD错误。故选A。',
    source: '2024·河北·高考真题'
  },
  {
    id: 'Q0017',
    category: '自然地理',
    subCategory: '地下水',
    tags: ['高考真题', '自然地理', '地下水流向'],
    difficulty: 2,
    stem: '图中庄里村的地下水流向是（   ）',
    options: { A: '自西北向东南', B: '自东向西', C: '自东北向西南', D: '自北向南' },
    answer: 'C',
    explanation: '从图中可以看到该地地下水等水位线，庄里村位于图中的中部位置，地下水流的流向与地下水等水位线的有关，应由水位高处流向水位低处，且水流方向与地下水等水位线垂直，从图中来看，应由东北部流向西南部，C正确，ABD错误。故选C。',
    source: '2024·河北·高考真题'
  },
  {
    id: 'Q0018',
    category: '人文地理',
    subCategory: '乡村地理',
    tags: ['高考真题', '人文地理', '乡村空间'],
    difficulty: 2,
    stem: '摆手堂（含土王祠）、风雨桥为双凤村村民进行公共活动和交流提供场所，这体现了乡村公共空间的（   ）',
    options: { A: '①②', B: '①③', C: '②④', D: '③④' },
    answer: 'D',
    explanation: '摆手堂和风雨桥为村民提供公共活动和交流的场所，体现了乡村公共空间的社会功能和景观功能，即③④。故选D。',
    source: '2024·新课标卷·高考真题'
  },
  {
    id: 'Q0019',
    category: '人文地理',
    subCategory: '传统民居',
    tags: ['高考真题', '人文地理', '传统民居'],
    difficulty: 2,
    stem: '双凤村传统民居的转角设计主要是为了（   ）',
    options: { A: '适应潮湿环境', B: '便于就地取材', C: '充分利用空间', D: '追求视觉美观' },
    answer: 'C',
    explanation: '双凤村传统民居的转角设计主要是为了充分利用空间，武陵山区腹地地形复杂，民居建筑空间有限，转角设计可以增加使用空间，C正确；适应潮湿环境主要与建筑材料和结构有关，便于就地取材是民居特点但不是转角设计的主要原因，追求视觉美观也不是主要目的，ABD错误。故选C。',
    source: '2024·新课标卷·高考真题'
  },
  {
    id: 'Q0020',
    category: '人文地理',
    subCategory: '乡村地理',
    tags: ['高考真题', '人文地理', '民居分布'],
    difficulty: 1,
    stem: '双凤村传统民居的空间分布特点是（   ）',
    options: { A: '沿等高线分布', B: '沿溪流分布', C: '围绕公共建筑分布', D: '沿公路分布' },
    answer: 'B',
    explanation: '根据材料可知，双凤村地处武陵山区腹地，传统民居沿溪流分布，既方便取水，又减少了对山坡地的开发，B正确；ACD不是主要分布特点。故选B。',
    source: '2024·新课标卷·高考真题'
  },
  {
    id: 'Q0021',
    category: '自然地理',
    subCategory: '地质构造',
    tags: ['高考真题', '自然地理', '地质构造'],
    difficulty: 2,
    stem: '依据图中信息判断，A到B之间的地貌类型是（   ）',
    options: { A: '向斜山', B: '背斜山', C: '向斜谷', D: '背斜谷' },
    answer: 'A',
    explanation: '从图中可以看出，A到B之间岩层向下弯曲，为向斜构造；且地表海拔较高，为山地，故为向斜山，A正确，BCD错误。故选A。',
    source: '2023·天津·高考真题'
  },
  {
    id: 'Q0022',
    category: '自然地理',
    subCategory: '地质年代',
    tags: ['高考真题', '自然地理', '地质年代', '岩浆岩'],
    difficulty: 3,
    stem: '该区域地表出露的花岗岩可能形成于（   ）',
    options: { A: '奥陶纪后，泥盆纪前', B: '志留纪后，石炭纪前', C: '泥盆纪后二叠纪前', D: '二叠纪后，白垩纪前' },
    answer: 'D',
    explanation: '花岗岩为岩浆岩，侵入岩体。岩层显示志留纪、泥盆纪、二叠纪地层覆盖在花岗岩之上，说明花岗岩形成于这些地层之前；而白垩纪地层缺失或被侵蚀，不能确定与花岗岩关系。因此，花岗岩可能形成于二叠纪后，白垩纪前。故选D。',
    source: '2023·天津·高考真题'
  }
];

// ============ 模拟题库 ============
const QUESTION_BANK = [
  {
    id: 'Q001',
    category: '自然地理',
    subCategory: '气候',
    tags: ['等值线', '等温线', '读图'],
    difficulty: 2,
    stem: '下图为某区域等温线分布图（单位：℃），图中A地的气温最可能是：',
    options: { A: '26℃', B: '28℃', C: '30℃', D: '32℃' },
    answer: 'B',
    explanation: '根据等温线分布规律，A地位于28℃与30℃等温线之间，故选B。'
  },
  {
    id: 'Q002',
    category: '自然地理',
    subCategory: '地形',
    tags: ['等高线', '通视'],
    difficulty: 2,
    stem: '下图为某地区等高线地形图，A、B两点之间的通视情况是：',
    options: { A: '均能相互看到', B: '均不能相互看到', C: '只有A能看到B', D: '只有B能看到A' },
    answer: 'D',
    explanation: 'A、B之间有山脊阻挡，只有B点能看到A点。选D。'
  },
  {
    id: 'Q003',
    category: '人文地理',
    subCategory: '人口',
    tags: ['人口增长', '老龄化'],
    difficulty: 1,
    stem: '下图为某国人口年龄结构金字塔图，该国最可能面临的问题是：',
    options: { A: '人口增长过快', B: '劳动力严重不足', C: '性别比例失调', D: '人口分布不均' },
    answer: 'B',
    explanation: '老年人口比重大，老龄化严重，劳动力严重不足。选B。'
  },
  {
    id: 'Q004',
    category: '人文地理',
    subCategory: '产业区位',
    tags: ['工业区位', '主导因素'],
    difficulty: 2,
    stem: '某企业生产羽绒服，影响其布局的主导因素是：',
    options: { A: '原料', B: '市场', C: '劳动力', D: '技术' },
    answer: 'B',
    explanation: '羽绒服属于市场导向型企业，需要接近消费市场。选B。'
  },
  {
    id: 'Q005',
    category: '区域地理',
    subCategory: '中国地理',
    tags: ['区域差异', '气候'],
    difficulty: 1,
    stem: '秦岭-淮河一线以北地区的主要气候特征是：',
    options: { A: '冬季温和少雨', B: '夏季高温多雨', C: '年降水量800mm以上', D: '河流含沙量小' },
    answer: 'B',
    explanation: '秦岭-淮河一线以北属温带季风气候，夏季高温多雨。选B。'
  },
  {
    id: 'Q006',
    category: '图表分析',
    subCategory: '统计图表',
    tags: ['坐标图', '产业结构'],
    difficulty: 2,
    stem: '下图为某城市三个年份的产业结构比重图，该城市的变化特点是：',
    options: { A: '第一产业比重持续上升', B: '第二产业比重先升后降', C: '第三产业比重持续下降', D: '产业结构不断优化' },
    answer: 'D',
    explanation: '第三产业比重上升，产业结构不断优化。选D。'
  },
  {
    id: 'Q007',
    category: '自然地理',
    subCategory: '水循环',
    tags: ['水循环', '水平衡'],
    difficulty: 3,
    stem: '近年来，我国西北内陆湖泊面积不断萎缩，主要原因是：',
    options: { A: '蒸发量减少', B: '降水减少', C: '地表径流汇入增加', D: '过度引水灌溉' },
    answer: 'D',
    explanation: '过度引水灌溉导致入湖水量减少。选D。'
  },
  {
    id: 'Q008',
    category: '人文地理',
    subCategory: '城市化',
    tags: ['城市化', '城市问题'],
    difficulty: 2,
    stem: '某城市空间结构变化表现为城市用地规模扩大、边缘出现新住宅区，该变化是：',
    options: { A: '逆城市化', B: '郊区城市化', C: '再城市化', D: '城市分散' },
    answer: 'B',
    explanation: '城市用地规模扩大，边缘出现新住宅区，是郊区城市化特征。选B。'
  },
  {
    id: 'Q009',
    category: '自然地理',
    subCategory: '大气环流',
    tags: ['气压带', '季风'],
    difficulty: 2,
    stem: '当北印度洋季风洋流呈顺时针方向流动时，正值北半球的：',
    options: { A: '春季', B: '夏季', C: '秋季', D: '冬季' },
    answer: 'B',
    explanation: '夏季受西南季风影响呈顺时针方向流动。选B。'
  },
  {
    id: 'Q010',
    category: '自然地理',
    subCategory: '地质',
    tags: ['地貌', '内力作用'],
    difficulty: 1,
    stem: '下图为某地貌景观图，其形成的主要内力作用是：',
    options: { A: '地壳运动', B: '风化作用', C: '流水侵蚀', D: '风力沉积' },
    answer: 'A',
    explanation: '地表隆起和凹陷是地壳运动（内力作用）造成。选A。'
  },
  {
    id: 'Q011',
    category: '人文地理',
    subCategory: '农业',
    tags: ['农业区位', '水稻种植'],
    difficulty: 2,
    stem: '我国南方水稻种植区有利于水稻生产的主要自然条件是：',
    options: { A: '地形平坦', B: '雨热同期', C: '土壤肥沃', D: '交通便利' },
    answer: 'B',
    explanation: '南方属亚热带季风气候，雨热同期有利于水稻生长。选B。'
  },
  {
    id: 'Q012',
    category: '自然地理',
    subCategory: '岩石',
    tags: ['三大类岩石', '地壳物质循环'],
    difficulty: 2,
    stem: '下列岩石中，可能含有化石的是：',
    options: { A: '岩浆岩', B: '变质岩', C: '沉积岩', D: '花岗岩' },
    answer: 'C',
    explanation: '沉积岩在形成过程中可能埋藏生物遗体，形成化石。选C。'
  },
  {
    id: 'Q013',
    category: '区域地理',
    subCategory: '世界地理',
    tags: ['世界分区', '发达国家'],
    difficulty: 1,
    stem: '下列地区中，以服务业为经济主导产业的是：',
    options: { A: '中东地区', B: '撒哈拉以南非洲', C: '西欧地区', D: '南亚地区' },
    answer: 'C',
    explanation: '西欧属发达地区，第三产业（服务业）比重高。选C。'
  },
  {
    id: 'Q014',
    category: '自然地理',
    subCategory: '地球运动',
    tags: ['昼夜长短', '正午太阳高度'],
    difficulty: 3,
    stem: '当北京（40°N）正午太阳高度为70°时，太阳直射点的纬度是：',
    options: { A: '10°N', B: '20°N', C: '23.5°N', D: '0°' },
    answer: 'B',
    explanation: '正午太阳高度 = 90° - |纬度差|，即70° = 90° - |40° - x|，解得x=20°N。选B。'
  },
  {
    id: 'Q015',
    category: '人文地理',
    subCategory: '交通运输',
    tags: ['交通运输方式', '选择'],
    difficulty: 1,
    stem: '下列货物中，最适合采用航空运输的是：',
    options: { A: '煤炭', B: '石油', C: '急救药品', D: '粮食' },
    answer: 'C',
    explanation: '航空运输速度快，适合急需或贵重物品。急救药品急需时效，选C。'
  }
];

// ============ 成就图标 SVG ============
const ACHIEVEMENT_ICONS = {
  seed: `<svg viewBox="0 0 24 24" fill="none" stroke="#34C759" stroke-width="2"><path d="M12 22V12M12 12C12 7 8 4 3 4c0 5 3 8 9 8zM12 12c0-5 4-8 9-8-1 5-4 8-9 8z"/></svg>`,
  fire3: `<svg viewBox="0 0 24 24" fill="#FF9500"><path d="M12 23c-4.97 0-9-3.58-9-8 0-2.52 1.17-4.83 3-6.36V6c0-.55.45-1 1-1s1 .45 1 1v2.5c.4-.27.85-.44 1.33-.5C8.5 5.4 10.8 3.12 12 2c1.2 1.12 3.5 3.4 3.67 6 .48.06.93.23 1.33.5V6c0-.55.45-1 1-1s1 .45 1 1v2.64c1.83 1.53 3 3.84 3 6.36 0 4.42-4.03 8-9 8z"/></svg>`,
  fire7: `<svg viewBox="0 0 24 24" fill="#FF6B00"><path d="M12 23c-4.97 0-9-3.58-9-8 0-2.52 1.17-4.83 3-6.36V6c0-.55.45-1 1-1s1 .45 1 1v2.5c.4-.27.85-.44 1.33-.5C8.5 5.4 10.8 3.12 12 2c1.2 1.12 3.5 3.4 3.67 6 .48.06.93.23 1.33.5V6c0-.55.45-1 1-1s1 .45 1 1v2.64c1.83 1.53 3 3.84 3 6.36 0 4.42-4.03 8-9 8z"/></svg>`,
  fire30: `<svg viewBox="0 0 24 24" fill="#FF3B30"><path d="M12 23c-4.97 0-9-3.58-9-8 0-2.52 1.17-4.83 3-6.36V6c0-.55.45-1 1-1s1 .45 1 1v2.5c.4-.27.85-.44 1.33-.5C8.5 5.4 10.8 3.12 12 2c1.2 1.12 3.5 3.4 3.67 6 .48.06.93.23 1.33.5V6c0-.55.45-1 1-1s1 .45 1 1v2.64c1.83 1.53 3 3.84 3 6.36 0 4.42-4.03 8-9 8z"/></svg>`,
  trophy: `<svg viewBox="0 0 24 24" fill="#FFD60A" stroke="#FFD60A" stroke-width="1"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4zM7 9H4a1 1 0 00-1 1v2a3 3 0 003 3M17 9h3a1 1 0 011 1v2a3 3 0 01-3 3"/></svg>`
};

// ============ 全局状态 ============
let state = {
  currentTab: 'home',
  currentQuestion: null,
  questionIndex: 0,
  currentTask: [],
  isAnswered: false,
  timer: 0,
  timerInterval: null,
  todayCorrect: 0,
  todayTotal: 0
};

// ============ 工具函数 ============
function getToday() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

function getYesterday() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function daysToGaokao() {
  const gaokao = new Date('2026-06-07');
  const today = new Date();
  return Math.max(0, Math.ceil((gaokao - today) / (1000 * 60 * 60 * 24)));
}

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ============ 数据存储 ============
function getUserData() {
  const data = localStorage.getItem('geoQuizUserData');
  if (data) return JSON.parse(data);
  
  return {
    stats: {
      totalAnswered: 0,
      totalCorrect: 0,
      streakDays: 0,
      lastPracticeDate: ''
    },
    categoryStats: {},
    tagStats: {},
    wrongQuestions: [],
    dailyTasks: {},
    answeredIds: []
  };
}

function saveUserData(data) {
  localStorage.setItem('geoQuizUserData', JSON.stringify(data));
}

// ============ 核心算法 ============
// 合并所有题库
function getAllQuestions() {
  return [...GEO_QUESTIONS, ...QUESTION_BANK];
}

function generateDailyTask() {
  const today = getToday();
  const userData = getUserData();
  const allQuestions = getAllQuestions();

  if (userData.dailyTasks && userData.dailyTasks[today] && 
      userData.dailyTasks[today].questions.length > 0) {
    const task = userData.dailyTasks[today];
    task.remaining = task.questions.filter(id => !task.completed.includes(id));
    return task;
  }

  const answeredIds = new Set(userData.answeredIds || []);
  const newPool = allQuestions.filter(q => !answeredIds.has(q.id));
  const shuffledNew = shuffle(newPool);
  const newQuestions = shuffledNew.slice(0, 5).map(q => q.id);

  const wrongQuestions = userData.wrongQuestions || [];
  const sortedWrong = wrongQuestions
    .map(w => ({ ...w, priority: calcPriority(w) }))
    .sort((a, b) => b.priority - a.priority)
    .slice(0, 5);
  const reviewQuestions = sortedWrong.map(w => w.questionId);

  const allTaskIds = shuffle([...newQuestions, ...reviewQuestions]);

  const task = {
    date: today,
    questions: allTaskIds,
    completed: [],
    remaining: allTaskIds,
    newCount: newQuestions.length,
    reviewCount: reviewQuestions.length
  };

  userData.dailyTasks = userData.dailyTasks || {};
  userData.dailyTasks[today] = task;
  saveUserData(userData);

  return task;
}

function calcPriority(wrongQ) {
  const today = getToday();
  const lastReview = wrongQ.lastReview || wrongQ.addedAt;
  const daysSince = Math.floor((new Date(today) - new Date(lastReview)) / (1000 * 60 * 60 * 24));
  
  return (wrongQ.wrongCount || 1) * 3
       + Math.max(0, 7 - daysSince)
       - (wrongQ.consecutiveCorrect || 0);
}

function handleAnswer(questionId, isCorrect) {
  const userData = getUserData();
  const allQuestions = getAllQuestions();
  const question = allQuestions.find(q => q.id === questionId);

  userData.stats.totalAnswered++;
  state.todayTotal++;

  if (isCorrect) {
    userData.stats.totalCorrect++;
    state.todayCorrect++;
  }

  if (!userData.answeredIds.includes(questionId)) {
    userData.answeredIds.push(questionId);
  }

  if (question) {
    const cat = question.category;
    userData.categoryStats[cat] = userData.categoryStats[cat] || { total: 0, correct: 0 };
    userData.categoryStats[cat].total++;
    if (isCorrect) userData.categoryStats[cat].correct++;

    question.tags.forEach(tag => {
      userData.tagStats[tag] = userData.tagStats[tag] || { total: 0, correct: 0 };
      userData.tagStats[tag].total++;
      if (isCorrect) userData.tagStats[tag].correct++;
    });
  }

  let wrongQuestions = userData.wrongQuestions || [];
  const wrongIdx = wrongQuestions.findIndex(w => w.questionId === questionId);

  if (isCorrect) {
    if (wrongIdx !== -1) {
      wrongQuestions[wrongIdx].consecutiveCorrect++;
      wrongQuestions[wrongIdx].lastReview = getToday();
      if (wrongQuestions[wrongIdx].consecutiveCorrect >= 3) {
        wrongQuestions.splice(wrongIdx, 1);
      }
    }
  } else {
    if (wrongIdx !== -1) {
      wrongQuestions[wrongIdx].wrongCount++;
      wrongQuestions[wrongIdx].consecutiveCorrect = 0;
      wrongQuestions[wrongIdx].lastReview = getToday();
    } else {
      wrongQuestions.push({
        questionId,
        wrongCount: 1,
        consecutiveCorrect: 0,
        addedAt: getToday(),
        lastReview: getToday()
      });
    }
  }

  userData.wrongQuestions = wrongQuestions;

  const today = getToday();
  if (userData.dailyTasks && userData.dailyTasks[today]) {
    if (!userData.dailyTasks[today].completed.includes(questionId)) {
      userData.dailyTasks[today].completed.push(questionId);
    }
  }

  saveUserData(userData);
}

function checkStreak() {
  const userData = getUserData();
  const today = getToday();
  const yesterday = getYesterday();

  if (userData.stats.lastPracticeDate === today) {
    return userData.stats.streakDays;
  }

  if (userData.stats.lastPracticeDate === yesterday) {
    userData.stats.streakDays++;
  } else {
    userData.stats.streakDays = 1;
  }

  userData.stats.lastPracticeDate = today;
  saveUserData(userData);

  return userData.stats.streakDays;
}

// ============ 界面更新 ============
function updateHomePage() {
  const userData = getUserData();
  const today = getToday();
  const task = userData.dailyTasks ? userData.dailyTasks[today] : null;
  const allQuestions = getAllQuestions();

  const completed = task ? task.completed.length : 0;
  const total = task ? task.questions.length : 7;

  document.getElementById('streakDays').textContent = userData.stats.streakDays || 0;
  document.getElementById('todayProgress').textContent = `${completed}/${total}`;
  document.getElementById('progressBar').style.width = `${(completed / total) * 100}%`;
  
  // 显示题库统计
  const totalQuestions = document.getElementById('totalQuestions');
  if (totalQuestions) {
    totalQuestions.textContent = `${allQuestions.length}道题`;
  }

  const startBtn = document.getElementById('startBtn');
  if (completed >= total && total > 0) {
    startBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><polyline points="20 6 9 17 4 12" fill="none" stroke="currentColor" stroke-width="3"/></svg> 已完成`;
    startBtn.classList.add('completed');
  } else {
    startBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> 开始刷题`;
    startBtn.classList.remove('completed');
  }

  const wrongCount = (userData.wrongQuestions || []).length;
  document.getElementById('wrongBadge').textContent = wrongCount > 0 ? wrongCount : '';
  document.getElementById('wrongTip').style.display = wrongCount > 0 ? 'flex' : 'none';
  document.getElementById('wrongTip').querySelector('.highlight').textContent = wrongCount;
  document.getElementById('wrongCountHome').textContent = wrongCount;

  const totalAccuracy = userData.stats.totalAnswered > 0
    ? Math.round(userData.stats.totalCorrect / userData.stats.totalAnswered * 100)
    : 0;
  document.getElementById('totalAccuracy').textContent = `${totalAccuracy}%`;
  document.getElementById('daysToGaokao').textContent = daysToGaokao();
}

function updateReportPage() {
  const userData = getUserData();

  document.getElementById('reportTotal').textContent = userData.stats.totalAnswered;
  document.getElementById('reportAccuracy').textContent = userData.stats.totalAnswered > 0
    ? `${Math.round(userData.stats.totalCorrect / userData.stats.totalAnswered * 100)}%`
    : '0%';
  document.getElementById('reportStreak').textContent = userData.stats.streakDays;

  const categoryList = document.getElementById('categoryList');
  const categories = ['自然地理', '人文地理', '区域地理', '图表分析'];
  
  categoryList.innerHTML = categories.map(cat => {
    const stats = userData.categoryStats[cat] || { total: 0, correct: 0 };
    const accuracy = stats.total > 0 ? Math.round(stats.correct / stats.total * 100) : 0;
    const isWeak = accuracy < 60;
    
    return `
      <div class="category-item">
        <div class="category-header">
          <span class="category-name">${cat}</span>
          <span class="category-accuracy ${isWeak ? 'warning' : ''}">${accuracy}%</span>
        </div>
        <div class="category-bar">
          <div class="category-fill ${isWeak ? 'warning' : ''}" style="width: ${accuracy}%"></div>
        </div>
        <span class="category-total">已做 ${stats.total} 题</span>
      </div>
    `;
  }).join('');

  const weakList = document.getElementById('weakList');
  const tagStats = userData.tagStats || {};
  const weakPoints = Object.entries(tagStats)
    .filter(([tag, s]) => s.total >= 3)
    .map(([tag, s]) => ({
      tag,
      accuracy: Math.round(s.correct / s.total * 100),
      wrongCount: s.total - s.correct
    }))
    .filter(w => w.accuracy < 60)
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, 5);

  weakList.innerHTML = weakPoints.length > 0 ? weakPoints.map(w => `
    <div class="weak-item">
      <div class="weak-left">
        <span class="weak-tag">${w.tag}</span>
        <span class="weak-stat">错${w.wrongCount}题</span>
      </div>
      <span class="weak-accuracy ${w.accuracy < 50 ? 'danger' : ''}">${w.accuracy}%</span>
    </div>
  `).join('') : '<p style="color:#999;text-align:center;padding:20px;">暂无薄弱知识点，继续保持！</p>';

  const suggestion = document.getElementById('suggestion');
  if (weakPoints.length > 0) {
    suggestion.textContent = `建议加强「${weakPoints[0].tag}」的训练，正确率仅${weakPoints[0].accuracy}%`;
  } else if (userData.stats.totalAnswered >= 10 && 
             userData.stats.totalCorrect / userData.stats.totalAnswered >= 0.8) {
    suggestion.textContent = '表现优秀！继续保持，查漏补缺';
  } else if (userData.stats.totalAnswered < 50) {
    suggestion.textContent = '多刷题，积累经验';
  } else {
    suggestion.textContent = '整体表现良好，继续保持';
  }
}

function updateWrongPage() {
  const userData = getUserData();
  const wrongQuestions = userData.wrongQuestions || [];
  const wrongList = document.getElementById('wrongList');
  const wrongEmpty = document.getElementById('wrongEmpty');
  const reviewAllBtn = document.getElementById('reviewAllBtn');

  if (wrongQuestions.length === 0) {
    wrongEmpty.style.display = 'block';
    wrongList.style.display = 'none';
    reviewAllBtn.style.display = 'none';
    return;
  }

  wrongEmpty.style.display = 'none';
  wrongList.style.display = 'flex';
  reviewAllBtn.style.display = wrongQuestions.length > 0 ? 'block' : 'none';

  wrongList.innerHTML = wrongQuestions.map(w => {
    const allQuestions = getAllQuestions();
    const question = allQuestions.find(q => q.id === w.questionId);
    const stem = question ? question.stem.substring(0, 50) + '...' : '题目已删除';
    const cat = question ? question.category : '';

    return `
      <div class="wrong-card">
        <div class="wrong-header">
          <span class="wrong-category">[${cat}]</span>
          <span class="wrong-progress">还需对${3 - (w.consecutiveCorrect || 0)}次移除</span>
        </div>
        <p class="wrong-stem">${stem}</p>
        <div class="wrong-footer">
          <div class="wrong-stat">
            <span>错误${w.wrongCount}次</span>
            <span class="stat-dot">●</span>
            <span>进度${w.consecutiveCorrect || 0}/3</span>
          </div>
          <button class="review-btn" onclick="reviewQuestion('${w.questionId}')">练习</button>
        </div>
      </div>
    `;
  }).join('');
}

function updateProfilePage() {
  const userData = getUserData();

  document.getElementById('profileTotal').textContent = userData.stats.totalAnswered;
  document.getElementById('profileAccuracy').textContent = userData.stats.totalAnswered > 0
    ? `${Math.round(userData.stats.totalCorrect / userData.stats.totalAnswered * 100)}%`
    : '0%';
  document.getElementById('profileStreak').textContent = userData.stats.streakDays;
  document.getElementById('profileWrong').textContent = (userData.wrongQuestions || []).length;

  const achievementList = document.getElementById('achievementList');
  const achievements = [];

  if (userData.stats.totalAnswered > 0) achievements.push({ icon: ACHIEVEMENT_ICONS.seed, name: '初学者', desc: '完成首次刷题' });
  if (userData.stats.streakDays >= 3) achievements.push({ icon: ACHIEVEMENT_ICONS.fire3, name: '连续3天', desc: '打卡3天' });
  if (userData.stats.streakDays >= 7) achievements.push({ icon: ACHIEVEMENT_ICONS.fire7, name: '连续7天', desc: '打卡7天' });
  if (userData.stats.streakDays >= 30) achievements.push({ icon: ACHIEVEMENT_ICONS.fire30, name: '连续30天', desc: '打卡30天' });
  if (userData.stats.totalAnswered >= 10 && 
      userData.stats.totalCorrect / userData.stats.totalAnswered >= 0.9) {
    achievements.push({ icon: ACHIEVEMENT_ICONS.trophy, name: '准确率90%', desc: '总正确率≥90%' });
  }

  achievementList.innerHTML = achievements.length > 0 ? achievements.map(a => `
    <div class="achievement-item">
      <div class="achievement-icon">${a.icon}</div>
      <span class="achievement-name">${a.name}</span>
      <span class="achievement-desc">${a.desc}</span>
    </div>
  `).join('') : '<p style="color:#999;text-align:center;grid-column:1/-1;padding:20px;">继续加油，解锁更多成就！</p>';
}

// ============ 答题流程 ============
function startQuiz() {
  const task = generateDailyTask();
  
  if (task.remaining.length === 0) {
    showResult();
    return;
  }

  state.currentTask = task;
  state.questionIndex = 0;
  state.isAnswered = false;
  state.todayCorrect = 0;
  state.todayTotal = 0;
  state.timer = 0;

  switchTab('quiz');
  loadQuestion();
}

function loadQuestion() {
  const task = state.currentTask;
  if (task.remaining.length === 0) {
    finishQuiz();
    return;
  }

  const questionId = task.remaining[0];
  const allQuestions = getAllQuestions();
  const question = allQuestions.find(q => q.id === questionId);

  if (!question) {
    task.remaining.shift();
    loadQuestion();
    return;
  }

  state.currentQuestion = question;
  state.isAnswered = false;

  const completed = task.completed.length;
  const total = task.questions.length;
  document.getElementById('quizProgressText').textContent = `${completed + 1} / ${total}`;
  document.getElementById('quizProgressFill').style.width = `${((completed) / total) * 100}%`;

  document.getElementById('questionTags').innerHTML = question.tags.map(t => 
    `<span class="tag">${t}</span>`
  ).join('') + `<span class="difficulty">${question.difficulty === 1 ? '简单' : question.difficulty === 2 ? '中等' : '困难'}</span>`;

  document.getElementById('stem').textContent = question.stem;

  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = ['A', 'B', 'C', 'D'].map(key => `
    <div class="option" data-key="${key}" onclick="selectOption('${key}')">
      <span class="option-key">${key}</span>
      <span class="option-text">${question.options[key]}</span>
      <span class="option-icon"></span>
    </div>
  `).join('');

  document.getElementById('explanation').classList.remove('show');
}

function selectOption(key) {
  if (state.isAnswered) return;
  
  state.isAnswered = true;
  const question = state.currentQuestion;
  const isCorrect = key === question.answer;

  const options = document.querySelectorAll('.option');
  options.forEach(opt => {
    const optKey = opt.dataset.key;
    const iconEl = opt.querySelector('.option-icon');

    if (optKey === key) {
      opt.classList.add(isCorrect ? 'correct' : 'wrong');
      if (!isCorrect) {
        iconEl.innerHTML = `<svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
        iconEl.classList.add('show');
      }
    }

    if (optKey === question.answer) {
      opt.classList.add('show-correct');
      iconEl.innerHTML = `<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`;
      iconEl.classList.add('show');
    }
  });

  handleAnswer(question.id, isCorrect);

  const expEl = document.getElementById('explanation');
  document.getElementById('explanationText').textContent = question.explanation;
  expEl.classList.add('show');

  setTimeout(() => {
    nextQuestion();
  }, 2000);
}

function nextQuestion() {
  const task = state.currentTask;
  
  if (!task.completed.includes(state.currentQuestion.id)) {
    task.completed.push(state.currentQuestion.id);
  }
  task.remaining.shift();

  const userData = getUserData();
  const today = getToday();
  userData.dailyTasks[today] = task;
  saveUserData(userData);

  if (task.remaining.length === 0) {
    finishQuiz();
    return;
  }

  loadQuestion();
}

function finishQuiz() {
  stopTimer();
  checkStreak();
  showResult();
}

function showResult() {
  const userData = getUserData();
  const today = getToday();
  const task = userData.dailyTasks ? userData.dailyTasks[today] : null;
  const total = task ? task.completed.length : state.todayTotal;
  const correct = state.todayCorrect;
  const accuracy = total > 0 ? Math.round(correct / total * 100) : 0;

  document.getElementById('resultAccuracy').textContent = `${accuracy}%`;
  document.getElementById('resultCorrect').textContent = correct;
  document.getElementById('resultWrong').textContent = total - correct;
  document.getElementById('resultStreak').textContent = userData.stats.streakDays;

  const resultIcon = document.getElementById('resultIcon');
  const resultTitle = document.getElementById('resultTitle');
  const resultSubtitle = document.getElementById('resultSubtitle');
  
  if (accuracy >= 80) {
    resultIcon.classList.remove('fail');
    resultTitle.textContent = '太棒了！';
    resultSubtitle.textContent = '继续保持，你是最棒的！';
  } else if (accuracy >= 60) {
    resultIcon.classList.remove('fail');
    resultTitle.textContent = '不错的成绩';
    resultSubtitle.textContent = '继续加油，查漏补缺';
  } else {
    resultIcon.classList.add('fail');
    resultTitle.textContent = '继续努力';
    resultSubtitle.textContent = '多复习错题，你会更好';
  }

  switchTab('result');
}

function reviewQuestion(questionId) {
  const allQuestions = getAllQuestions();
  const question = allQuestions.find(q => q.id === questionId);
  if (!question) return;

  state.currentQuestion = question;
  state.isAnswered = false;
  state.currentTask = { questions: [questionId], completed: [], remaining: [questionId] };

  switchTab('quiz');
  loadQuestion();
}

function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

// ============ 导航 ============
function switchTab(tab) {
  state.currentTab = tab;

  document.querySelectorAll('.tab-item').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tab);
  });

  document.querySelectorAll('.page').forEach(p => {
    p.classList.toggle('active', p.id === `page-${tab}`);
  });

  if (tab === 'home') updateHomePage();
  else if (tab === 'report') updateReportPage();
  else if (tab === 'wrong') updateWrongPage();
  else if (tab === 'profile') updateProfilePage();
}

// ============ 事件绑定 ============
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tab-item').forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });

  document.getElementById('startBtn').addEventListener('click', startQuiz);

  document.getElementById('closeQuiz').addEventListener('click', () => {
    stopTimer();
    switchTab('home');
  });

  document.getElementById('backHomeBtn').addEventListener('click', () => {
    switchTab('home');
  });

  document.getElementById('viewReportBtn').addEventListener('click', () => {
    switchTab('report');
  });

  document.getElementById('reviewAllBtn').addEventListener('click', () => {
    const userData = getUserData();
    const wrongQuestions = userData.wrongQuestions || [];
    if (wrongQuestions.length > 0) {
      state.currentTask = {
        questions: wrongQuestions.map(w => w.questionId),
        completed: [],
        remaining: wrongQuestions.map(w => w.questionId)
      };
      state.todayCorrect = 0;
      state.todayTotal = 0;
      state.questionIndex = 0;
      state.isAnswered = false;
      switchTab('quiz');
      loadQuestion();
    }
  });

  document.getElementById('clearDataBtn').addEventListener('click', () => {
    if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
      localStorage.removeItem('geoQuizUserData');
      updateHomePage();
      updateProfilePage();
      alert('数据已清除');
    }
  });

  updateHomePage();
});
