export const site = {
  name: '谢佳涵',
  role: '嵌入式软件工程师',
  description: '一个在嵌入式系统、AI 工具和城市烟火之间不断折腾的人。',
  phone: '13270131998',
  email: '844414645@qq.com',
  github: 'https://github.com/13270131998',
};

export const navigation = [
  { label: '关于我', href: '/#about', code: '01' },
  { label: '生活相册', href: '/#life', code: '02' },
  { label: '工作中的我', href: '/#work', code: '03' },
  { label: '技术分享', href: '/#tech', code: '04' },
  { label: '思考', href: '/#thoughts', code: '05' },
];

export const interests = [
  { title: '坦克世界', detail: '偶尔和朋友组队开几局，研究车辆与地图，也享受互相配合的过程。' },
  { title: 'AI 解决具体问题', detail: '持续尝试新的 AI 工具，把工作和生活里的小想法慢慢做成能用的东西。' },
  { title: '到处闲逛', detail: '不赶行程，沿着湖边和街巷随意走走，看看天色，也顺手留下照片。' },
  { title: '周末和朋友猛吃', detail: '一起寻找好吃的小店，在一桌饭和闲聊里给忙碌的一周收个尾。' },
];

export type GalleryGroup = '无锡' | '南京' | '苏州' | '美食';

export interface GalleryImage {
  src: string;
  alt: string;
  group: GalleryGroup;
  width: number;
  height: number;
}

export const galleryPreview: GalleryImage[] = [
  { src: '/media/gallery/wuxi/14.webp', alt: '暮色映在开阔湖面与远山上', group: '无锡', width: 1706, height: 1279 },
  { src: '/media/gallery/wuxi/48.webp', alt: '夜晚亮起红色灯光的拱桥', group: '无锡', width: 2200, height: 1650 },
  { src: '/media/gallery/wuxi/20.webp', alt: '盛放的粉紫色绣球花', group: '无锡', width: 1650, height: 2200 },
  { src: '/media/gallery/wuxi/23.webp', alt: '黑天鹅游过园林池水', group: '无锡', width: 2200, height: 1650 },
  { src: '/media/gallery/wuxi/61.webp', alt: '夜色里的江南河道与灯火', group: '无锡', width: 2200, height: 1650 },
  { src: '/media/gallery/wuxi/74.webp', alt: '夕阳映在安静的园林水面上', group: '无锡', width: 2200, height: 1291 },
  { src: '/media/gallery/wuxi/82.webp', alt: '白墙黛瓦与游船构成的江南水乡', group: '无锡', width: 2200, height: 1291 },
  { src: '/media/gallery/wuxi/53.webp', alt: '城市天际线被晚霞染成橙红色', group: '无锡', width: 2200, height: 1650 },
];

export interface Project {
  slug: string;
  code: string;
  years: string;
  title: string;
  summary: string;
  role: string;
  result: string;
  technologies: string[];
  cover: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: 'etb-dolphin',
    code: 'P-01',
    years: '2025 - 2026',
    title: 'ETB_Dolphin 光学编码器配置终端',
    summary: '从 Linux 系统适配、触摸屏驱动到 Qt 人机界面，把 ARM、FPGA 与 BiSS-C 通信链路接成一台可落地的产品。',
    role: '负责 AM62x Linux 系统移植、设备树适配、Qt5 HMI、GPMC 通信与固件升级能力。',
    result: '一代产品已小批量生产，用于辅助 ABA128 读数头销售；二代方案已开始向 MCU + LVGL 演进。',
    technologies: ['AM62x', 'Linux 6.1', 'Qt5', 'FPGA', 'BiSS-C', 'GPMC'],
    cover: '/media/work/38.webp',
    images: ['/media/work/38.webp', '/media/work/33.webp', '/media/work/32.webp', '/media/work/27.webp', '/media/work/24.webp'],
  },
  {
    slug: 'garden-light',
    code: 'P-02',
    years: '2024',
    title: '光控庭院遥控灯',
    summary: '在有限程序空间里完成红外遥控、光照检测和多种灯效，把成本约束变成一次扎实的嵌入式练习。',
    role: '使用中微 SC8P054 完成底层驱动和业务逻辑，处理 ADC、定时中断、红外解码与 PWM。',
    result: '在 2K 程序空间内完成完整业务逻辑，产品实现国内外批量出货。',
    technologies: ['SC8P054', 'ADC', 'PWM', '红外解码', '资源优化'],
    cover: '/media/work/04.webp',
    images: ['/media/work/04.webp', '/media/work/01.webp', '/media/work/02.webp', '/media/work/03.webp'],
  },
  {
    slug: 'robot-arm',
    code: 'P-03',
    years: '2022 - 2023',
    title: '桌面级机械臂下棋场景',
    summary: '从电气选型、分模块调试到视觉标定，让一台两自由度机械臂能在真实棋盘上识别并完成取子动作。',
    role: '负责机械臂电控、舵机驱动、传感器接入，并在树莓派上完成视觉标定与运动补偿。',
    result: '产品小批量交付无锡中小学，用于青少年机器人编程教学，并曾在世界机器人峰会展出。',
    technologies: ['Air724', '树莓派 4', 'Python', 'OpenCV', '舵机控制'],
    cover: '/media/work/12.webp',
    images: ['/media/work/12.webp', '/media/work/07.webp', '/media/work/06.webp', '/media/work/10.webp', '/media/work/11.webp'],
  },
];

export const techNotes = [
  { image: '/media/tech/01.webp', code: 'LAB-01', title: '一块板，从拿到手开始', text: '看看接口、翻翻手册、接上调试器。很多有意思的东西，都从第一次点亮开始。' },
  { image: '/media/tech/03.webp', code: 'LAB-03', title: '细长板卡的小实验', text: '空闲时间摸索不同硬件，把不熟悉的器件拆成一个个能验证的小问题。' },
  { image: '/media/tech/07.webp', code: 'LAB-07', title: '让屏幕显示一点喜欢的东西', text: '技术不总是严肃的。能让一块屏幕亮起来，也能让它成为生活里小小的装饰。' },
  { image: '/media/tech/09.webp', code: 'LAB-09', title: '测量，是另一种确认', text: '先观察，再下判断。仪器给出的波形和数字，常常比猜测更诚实。' },
];

export const openSourceThanks = [
  { name: 'DigitalPlatDev / FreeDomain', href: 'https://github.com/DigitalPlatDev/FreeDomain', note: '让个人站点拥有一个更容易被记住的入口。' },
  { name: 'farion1231 / cc-switch', href: 'https://github.com/farion1231/cc-switch', note: '让不同 AI 编程工具之间的切换更顺手。' },
  { name: 'andrej-karpathy-skills', href: 'https://github.com/multica-ai/andrej-karpathy-skills', note: '帮助我理解如何把经验整理成可复用的 AI 工作方式。' },
];

export interface Thought {
  slug: string;
  title: string;
  label: string;
  summary: string;
  quote: string;
  paragraphs: string[];
  bullets?: string[];
}

export const thoughts: Thought[] = [
  {
    slug: 'bayesian-thinking',
    title: '贝叶斯思维',
    label: '判断与修正',
    summary: '判断不是事实，而是当前信息下的可信程度。真正的理性，是愿意根据可靠的新信息调整自己。',
    quote: '判断不是事实，而是当前信息下的可信程度。',
    paragraphs: [
      '人面对不确定的事情时，通常不会先得到正确答案，而是先根据经验形成一个暂时判断，再根据新证据不断调整。',
      '例如，你一开始觉得某家公司经常加班；后来发现只是项目上线，便降低这种判断；再听到多个部门都长期加班，又提高判断。',
      '理性不是永远正确，而是愿意根据可靠的新信息，以合适的幅度修正自己。因此，贝叶斯式思维既反对固执，也反对因为一条消息就轻易改变看法。',
    ],
  },
  {
    slug: 'essence-of-education',
    title: '教育的本质是什么',
    label: '教育与成长',
    summary: '好的教育不是把容器装满，而是唤醒好奇、独立思考、自我认识和对生活负责的能力。',
    quote: '好的教育不是“把容器装满”，而是“把火点燃”。',
    paragraphs: [
      '“教育的本质是唤醒”，是因为真正的教育不只是把知识灌输给学生，而是唤醒他原本拥有的能力。',
      '知识可以被忘记，但一旦一个人开始主动思考、主动探索，他就获得了持续成长的能力。',
    ],
    bullets: ['唤醒好奇心，让他主动提问', '唤醒独立思考，而不是只接受标准答案', '唤醒自我认识，知道自己想成为什么样的人', '唤醒责任感，使他愿意对选择和生活负责'],
  },
  {
    slug: 'view-of-life-and-death',
    title: '《毛泽东选集》的生死观',
    label: '阅读与人生',
    summary: '个人生命有限，但当它投入人民和共同事业时，可以获得超越个人的意义。',
    quote: '生命的价值不只在于活多久，更在于为谁而活、为何而死。',
    paragraphs: [
      '在《为人民服务》中，毛泽东认为死亡不可避免，但意义有轻重。衡量生死价值的标准，是是否有益于人民。',
      '但它并不是单纯鼓励牺牲。结合《论持久战》和《愚公移山》来看，牺牲不是目的，争取胜利、改变现实才是目的；因此既要有不怕牺牲的勇气，也要讲方法、坚持长期奋斗，并依靠群众。',
      '个人生命是有限的，但当它投入人民和共同事业时，可以获得超越个人的意义。',
    ],
  },
];
