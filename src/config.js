const config = {
	//网页元数据
	metaData: {
		title: '晨殇的个人主页🎉Ciallo~(∠・ω< )⌒☆',
		description: 'Ciallo~ 欢迎来到晨殇的世界！',
		keywords: 'Chenn,chenn,个人主页,个人网站',
		icon: '/img/favicon.ico'   //网页图标，支持外链
	},

	avatar: "/img/avatar.jpg", // 头像
	welcometitle: "Hi, I'm Chenn", // 标题

	// 颜色配置
	color: {
		themecolor: "#FFFFFF", // 主题颜色，推荐趋于亮白可带有轻微色调，例： #D1FFEC
		welcometitlecolor: "#FFFFFF", // 标题颜色 例： #7BFFC9
		turntablecolor1: "#FFFF00",  // 转盘渐变色一
		turntablecolor2: "#00FFFF"   // 转盘渐变色二
	},

	brightness: 80, // 背景亮度 --%
	blur: 3, // 毛玻璃模糊效果

	// 我的标签
	tags: ['极度社恐',  '二次元', '游戏宅', '科技宅拯救世界', '赛码娘(bushi)'],

	// 默认背景壁纸
	background: {
		"pc": {   //pc端
			"type": "pic",   //"pic":静态壁纸;"video":动态壁纸
			"datainfo": {
				"title": "步枪女孩",
				"preview": "/img/wallpaper/static/步枪女孩/image-pre.webp",
				"url": "/img/wallpaper/static/步枪女孩/image.png",     //当然，也可填写网络地址或壁纸api，如随机PC壁纸api："url":"https://t.mwm.moe/pc"
			},
		},
		"mobile": {   //移动端
			"type": "video",
			"datainfo": {
				"title": "Doodle-小猫女仆降临",
				"preview": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4"  //同理，随机移动端壁纸："url":"https://t.mwm.moe/mp"
			}
		}

	},

	//极坐标图数据
	polarChart: {
		skills: ['Java', 'Python', 'Linux', 'Fiddler', 'Postman', 'Redis', 'Jmeter', 'MySQL', 'C++', 'Unity','Navicat'],
		skillPoints: [60, 90, 90, 80, 85, 70, 85, 65, 75, 80, 80],
	},

	//社交按钮
	socialPlatformIcons: [
		{ icon: "mdi-github", link: "https://github.com/chenn114" },  //Link:  https://www.bilibili.com/video/BV1UT42167xb/?spm_id_from=333.337.search-card.all.click&vd_source=3c97ead915ba96fdc0f35a1b8cf430dd
		{ icon: "mdi-email", link: "mailto:2698395241@qq.com" },
		{ icon: "mdi-qqchat", link: "https://im.qq.com/" },
		{ icon: "mdi-wechat", link: "https://wx.qq.com/" },
		{ icon: "mdi-youtube", link: "https://www.youtube.com" },
		{ icon: "mdi-facebook", link: "https://www.facebook.com" }
	],

	//打字机
	typeWriterStrings: [
		"愿你驶过洞天，观无量寿数摹绘生命的华彩",
		"愿你览历梦海，为醉人幻境奏响清脆的舞曲。",
		"愿你终抵彼岸，于桑榆暮景坐看云起云舒。",
		"愿此行，终抵群星"
	],

	//音乐播放配置，采用MetingJS Api(https://github.com/metowolf/MetingJS)
	musicPlayer: {
		server: 'netease',  //服务提供商 --网易云音乐
		type: 'playlist',   //歌单类型
		id: '17475985954'  //歌单id ---> music.163.com/#/playlist?id=2028178887
	},

	//壁纸数据 -----可以将壁纸文件上传到图床获取网络直链。若想调用api，请前往脚本自行修改逻辑
	wallpaper: {
		pic: [
			{ "title": "海洋女孩", "preview": "/img/wallpaper/static/海洋女孩/image-pre.webp", "url": "/img/wallpaper/static/海洋女孩/image.png" },
			{ "title": "步枪女孩", "preview": "/img/wallpaper/static/步枪女孩/image-pre.webp", "url": "/img/wallpaper/static/步枪女孩/image.png" },
			{ "title": "书房夜晚", "preview": "/img/wallpaper/static/书房夜晚/image-pre.webp", "url": "/img/wallpaper/static/书房夜晚/image.png" },
			{ "title": "安逸舒适", "preview": "/img/wallpaper/static/安逸舒适/image-pre.webp", "url": "/img/wallpaper/static/安逸舒适/image.png" },
			{ "title": "jswcMaMj", "preview": "https://s21.ax1x.com/2025/07/23/pVGli59.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGli59.jpg" },
			{ "title": "pgtTqoqq", "preview": "https://s21.ax1x.com/2025/07/23/pVGlmDO.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlmDO.jpg" },
			{ "title": "cvKMKhue", "preview": "https://s21.ax1x.com/2025/07/23/pVGlNqS.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlNqS.jpg" },
			{ "title": "XpxvQVoP", "preview": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.jpg" },
			{ "title": "fVEEjEOA", "preview": "https://s21.ax1x.com/2025/07/23/pVGlEgx.md.webp", "url": "https://s21.ax1x.com/2025/07/23/pVGlEgx.webp" },
			{ "title": "jgnIKMpd", "preview": "https://s21.ax1x.com/2025/07/23/pVGldaQ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGldaQ.jpg" },
			{ "title": "mgqyySeh", "preview": "https://s21.ax1x.com/2025/07/23/pVGl82t.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGl82t.jpg" },
			{ "title": "dSXZfZp", "preview": "https://s21.ax1x.com/2025/07/23/pVGlaVg.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlaVg.jpg" },
		],
		picMobile: [
			{ "title": "0001", "preview": "/img/wallpaper/static-mobile/0001/image-pre.webp", "url": "/img/wallpaper/static-mobile/0001/image.png" },
			{ "title": "0002", "preview": "/img/wallpaper/static-mobile/0002/image-pre.webp", "url": "/img/wallpaper/static-mobile/0002/image.png" },
			{ "title": "0003", "preview": "/img/wallpaper/static-mobile/0003/image-pre.webp", "url": "/img/wallpaper/static-mobile/0003/image.png" },
			{ "title": "0004", "preview": "/img/wallpaper/static-mobile/0004/image-pre.webp", "url": "/img/wallpaper/static-mobile/0004/image.png" },
			{ "title": "DfNHPPcc", "preview": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.jpg" },
			{ "title": "cZZwzhis", "preview": "https://s21.ax1x.com/2025/07/23/pVG1Vij.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1Vij.jpg" },
			{ "title": "aANKZHPX", "preview": "https://s21.ax1x.com/2025/07/23/pVGlIR1.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlIR1.jpg" },
		],
		video: [
			{
				"title": "尼尔：机械纪元 团队",
				"preview": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team-pre.webm",
				"url": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team.webm"
			},
			{
				"title": "向往航天的女孩",
				"preview": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane-pre.webm",
				"url": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane.webm"
			},
			{
				"title": "世界很温柔《龙族》上杉绘梨衣",
				"preview": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85-pre.webm",
				"url": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85.webm"
			},
		],
		videoMobile: [
			{
				"title": "幻觉镇-gaako_illust",
				"preview": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4"
			},
			{
				"title": "chuva",
				"preview": "/img/wallpaper/dynamic-mobile/chuva/chuva-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/chuva/chuva.mp4"
			},
			{
				"title": "Doodle-小猫女仆降临",
				"preview": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12.mp4"
			},
		],
	},

	//项目卡片 其中 字段"show"控制初始卡片的text是否展开
	projectcards: [
		{ go: "🚀 前往", img: "/img/SectorImg/GithubSector.jpg", title: "Chenn的github主页", subtitle: "一个菜鸟的github主页", text: "包含了一些小项目和一些笔记.", url: "https://github.com/chenn114", show: false },//github主页：https://github.com/chenn114
		{ go: "🗂️ 前往", img: "/img/SectorImg/GameSector.jpg", title: "Chenn的游戏作品集", subtitle: "一个游戏爱好者的自学作品", text: "包含两个游戏作品：Survival-Shoot和Tank-Fight;", url: "https://pan.baidu.com/s/1oeIIMtzVqhccS9Y_ZJUCyg", show: false },//游戏作品集：https://pan.baidu.com/s/1oeIIMtzVqhccS9Y_ZJUCyg
		{ go: "📝 前往", img: "/img/SectorImg/SZUSector.jpg", title: "深圳大学网站", subtitle: "欢迎来到深圳大学", text: "深大官方网站", url: "https://www.szu.edu.cn/", show: false },//深圳大学网站：https://www.szu.edu.cn/
		{ go: "👍 前往", img: "/img/SectorImg/About-siteSector.jpg", title: "小站使用教程", subtitle: "关于本站的一些介绍和用法", text: "站在巨人肩膀上搭起来的网站", url: "/projects/about-site/about-site.html", show: false },
		{ go: "🗃 前往", img: "/img/SectorImg/TestSector.jpg", title: "Unity相机操作", subtitle: "知识分享", text: "Unity设置相机跟随玩家的操作", url: "/projects/Project5/test.html", show: false },
		{ go: "🎨 前往", img: "/img/SectorImg/TestProjectSector.jpg", title: "简单的自动化测试", subtitle: "web自动化登录测试案例", text: "小白都可以看懂的测试案例", url: "/projects/Project-Test/test.html", show: false },
		{ go: "💍 前往", img: "/img/SectorImg/BeggingSector.jpg", title: "赛博要饭", subtitle: "生活不易，卖身也卖艺(", text: "求有钱人包养QAQ", url: "/sbyf/donate.html", show: false },
		{ go: "🔍 前往", img: "/img/SectorImg/QiongMeiSector.jpg", title: "我也不知道是什么", subtitle: "穹妹赛高！(小声BB)", text: "仅用于个人学习，请勿用于商业用途。", url: " /projects/Game/test.html", show: false }, //链接: https://pan.quark.cn/s/192aa295ae6f 提取码: XHJe
		
	],

	statement: ["备案号：XXICP备123456789号", "Copyright © 2025 Chenn"],
}

export default config