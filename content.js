/* content.js - 网站内容配置文件 */

const siteContent = {
    // --- 全局导航栏 ---
    navbar: {
        logoAlt: "太空字节 Logo",
        home: "首页",
        earthdata: "太空数舱™",
        xbyte: "探索字节™",
        products: "产品与方案",
        media: "媒体库",
        about: "关于我们"
    },

    // --- 底部 Footer ---
    footer: {
        copyright: "&copy; 2025 太空字节科技有限公司. 保留所有权利.",
        privacy: "隐私政策",
        terms: "服务条款",
        icp: "粤ICP备2025432865号"
    },

    // --- 首页 (index.html) ---
    home: {
        hero: {
            title: "连接太空与数据的未来",
            subtitle: "SPACE DATA CENTER & AI INFRASTRUCTURE",
            btnText: "探索更多"
        },
        news: [
           {
                tag: "市场动态",
                text: "把算力送上太空！我国发布太空数据中心建设规划方案",
                link: "阅读详情 &rarr;",
                url: "https://baijiahao.baidu.com/s?id=1850086926422699552&wfr=spider&for=pc" // 这里可以放具体的新闻链接
            },
            {
                tag: "最新动态",
                text: "AstrByte 成功签约第1个在轨共享存储节点，开启太空存储新纪元。",
                link: "阅读详情 &rarr;",
                url: "#" // 这里可以放具体的新闻链接
            },
            {
                tag: "技术突破",
                text: "XByte1.0 固件发布：新增太空通信协议支持。",
                link: "具体内容 &rarr;",
                url: "#"
            },
            {
                tag: "合作伙伴",
                text: "AstrByte 与之江实验室达成合作，提供数据上传太空服务。",
                link: "了解更多 &rarr;",
                url: "#"
            }
        ],
        stats: {
            title: "运营数据概览",
            capVal: "10", capLabel: "在轨存储容量", capUnit: "Tbyte",
            dataVal: "216", dataLabel: "在轨数据量", dataUnit: "Gbyte",
            userVal: "6", userLabel: "已注册用户数", userUnit: "个",
            uploadVal: "1", uploadLabel: "共计上传数据", uploadUnit: "次"
        },
        earthdata: {
            title: "太空数舱™ (StellaVault™)",
            meaning: "近地轨道太空存储体验",
            description: "数据前往太空的意义，不仅仅是存储，更是人类文明的备份，点击进入“太空数舱”，让你的“数字资产”体验前所未有的安全与永恒。",
            btnText: "进入太空数舱"
        },
        xbyte: {
            title: "探索字节™ (XByte™)",
            meaning: "来自太空的礼物",
            description: "每一台XByte™设备都连接着浩瀚宇宙。扫码绑定，解锁来自太空的独家IP内容与金句。",
            btnText: "选择你的第一台XByte™设备"
        },
        partners: {
            title: "携手合作伙伴 共筑太空数据中心",
            partnerA: "之江实验室",
            partnerB: "中国科学院计算技术研究所",
            partnerC: "中国科学院软件研究所",
            partnerD: "中国科学院软件研究所"
        },
        about: {
            title: "关于我们",
            description: "太空字节致力于构建星际间的数据高速公路。我们结合航天技术与人工智能，为人类提供永续的数据存储解决方案。",
            contactTitle: "联系我们",
            contactEmail: "Email: business@astrbyte.com",
            contactPhone: "Tel: +86 10 8888 8888",
            socialDouyin: "抖音官方账号: @AstrByte",
            socialRedbook: "小红书官方账号: AstrByteOfficial"
        }
    },

    // --- 太空数仓页 (earthdata.html) ---
    earthdata: {
        hero: {
            title: "太空数舱™ (StellaVault™)",
            desc: "近地轨道太空数据存储和托管服务 将您的重要数据资产安全存储在近地轨道，物理隔离地面自然灾害与人为干扰。"
        },
        features: {
            f1_title: "极致安全", f1_desc: "数据存储于太空环境，物理隔离地面自然灾害与人为干扰。",
            f2_title: "资产托管", f2_desc: "在稀缺的太空存储节点，每一份数据都将获得由国家平台认证的唯一数字身份，转化为可确权、可验证的安全资产",
            f3_title: "永久备份", f3_desc: "为人类文明提供异地容灾备份，数据留存长达百年。"
        },
        operation: {
            title: "实时运营状态",
            f1_title: "系统可用性", f1_desc: "99%",
            f2_title: "平均延时", f2_desc: "24ms",
            f3_title: "加密标准", f3_desc: "AES-256"
        },
        login: {
            title: "准备好将您的数据资产放入太空了吗？",
            subtitle: "访问太空数舱™ 系统需要企业级授权账号",
            btn: "登录太空数舱™ 系统",
            domain: "stellavault.space"
        }
    },

    // --- Xbyte页 (xbyte.html) ---
    xbyte: {
        hero: {
            title: "探索字节™(XByte™)",
            desc: "连接你与宇宙的私人终端"
        },
        operation: {
            f1_title: "已激活终端", f1_desc: "3000",
            f2_title: "绑定IP数量", f2_desc: "3",
            f3_title: "在轨太空金句", f3_desc: "386",
            f4_title: "已投放太空金句", f3_desc: "234"
        },
        mobile: {
            title: "选择你的 探索字节™(XByte™) 设备",
            subtitle: "通往三体宇宙",
            desc: "直接扫描微信小程序二维码，接收来自太空的金句。"
        }
    },

    // --- 关于我们页 (about.html) ---
    about: {
        hero: {
            title: "我们是太空数据中心运营商",
            desc: "ASTRO + BYTE = FUTURE"
        },
        intro: {
            title: "团队介绍",
            text1: "太空字节成立于2025年，核心团队来自国内顶尖的航天企业和人工智能公司。",
            text2: "我们正在重新定义数据中心的边界，将算力和数据推向天空的边缘。"
        },
        contact: {
            title: "联系我们",
            business: "商务合作",
            email: "contact@astrbyte.com",
            phone: "16601920713",
            addrTitle: "公司地址",
            addr: "深圳市宝安区福海街道稔田社区凤塘大道22-13号新田商务中心"
        }
    },
    // ... (前面是 home, earthdata, xbyte, about 等内容) ...

    // --- 产品与方案页 (products.html) ---
    products: {
        hero: {
            title: "技术与产品"
        },
        sgst: {
            title: "SGST 星地链路产品",
            desc: "专为高通量卫星数据传输设计，提供极低延迟的星地通信解决方案。支持多频段自适应调制。",
            // 参数表
            spec_band_label: "通信速率",spec_band_val: "上行：100Gbps下行：100Gbps",spec_band_renmark:"对称",
            spec_speed_label: "通信距离",spec_speed_val: "≥1500km，100～1500km可调",spec_speed_remark: "对可兼容星间通信距离",
            spec_deploy_label: "通信波长",spec_deploy_val: "1540/1563nm",spec_deploy_remark: "兼容星网/千帆标准通信波长",
            spec_label4: "天线口径",spec_label4_val: "200mm",spec_label4_remark: "收发共口径",
            spec_label5: "捕获范围",spec_label5_val: "不小于-0.02º～0.02º",spec_label5_remark: "",
            spec_label6: "最大捕获角速度",spec_label6_val: "不小于0.2º/s",spec_label6_remark: "",
            spec_label7: "跟踪精度",spec_label7_val: "≤5μmad（3σ）",spec_label7_remark: "@NASDA微振动条件",
            spec_label8: "捕获方式",spec_label8_val: "无独立信标光",spec_label8_remark: "",
            spec_label9: "通信误码率",spec_label9_val: "≤1×10-7@100Gbps",spec_label9_remark: "译码后",
            spec_label10: "重量",spec_label10_val: "≥8kg",spec_label10_remark: "含热控、电缆等",
            spec_label11: "供电接口",spec_label11_val: "28V",spec_label11_remark: "",
            spec_label12: "最大功耗",spec_label12_val: "2120W",spec_label12_remark: ""
        },
        astrnode: {
            title: "ASTRNode 载荷产品",
            desc: "在轨边缘计算节点，具备高算力、低功耗特性，支持在太空中直接处理AI推理任务。",
            // 参数表
            spec_cpu_label: "存储能力", spec_cpu_val: "20TB/40TB/60TB/80TB/100TB",spec_cpu_remark: "可按20TB每节点扩容",
            spec_power_label: "计算能力", spec_power_val: "275TOPS",spec_power_remark: "单节点算力能力",
            spec_weight_label: "内存", spec_weight_val: "64GB",spec_weight_remark: "",
            spec_label4: "对外接口",spec_label4_val: "网络TCP/IP",spec_label4_remark: "",
            spec_label5: "供电",spec_label5_val: "28V",spec_label5_remark: "",
            spec_label6: "重量",spec_label6_val: "3kg",spec_label6_remark: "",
            spec_label7: "最大功耗",spec_label7_val: "90W",spec_label7_remark: "",
            spec_label8: "操作系统",spec_label8_val: "9Linux Ubuntu22.04",spec_label8_remark: "K8S虚拟技术",
            spec_label9: "软件功能",spec_label9_val: "支持容器技术CubeFS，分布式文件系统，支持S3对象存储文件协议，时空网格数据库",spec_label9_remark: "应用（容器）/ 数据隔离设计"
        }
    },

    // --- 媒体库页 (media.html) ---
    media: {
        title: "媒体中心", // 页面标题
        filters: {
            all: "全部",
            story: "用户故事",
            launch: "发射实录",
            team: "企业成长",
            interview: "技术访谈"
        },
        // 视频卡片内容 (这里是静态模拟，实际项目可能由循环生成)
        card1: {
            tag: "用户故事",
            title: "数据如何改变农业监测",
            // 示例视频：地球旋转
            videoUrl: "https://www.douyin.com/root/search/太空字节?modal_id=7571030529580784275&type=video",
            coverUrl: "images/media1.jpeg" // 【新增】你的封面路径
        },
        card2: {
            tag: "发射实录",
            title: "ASTR-1 卫星发射全过程",
            // 示例视频：火箭发射
            videoUrl: "https://static.videezy.com/system/resources/previews/000/000/170/original/Rocket_Launch.mp4",
            coverUrl: "images/media2.jpeg" // 【新增】你的封面路径
        },
        card3: {
            tag: "企业成长",
            title: "太空字节人集合",
             // 示例视频：数据网络
            videoUrl: "videos/astrobyte_team.mp4",
            coverUrl: "images/media3.jpeg" // 【新增】你的封面路径
        },
        card4: {
            tag: "技术访谈",
            title: "中美太空数据中心对比",
            // 示例视频：科技连接
            videoUrl: "videos/astrobyte_tech_1.mp4",
            coverUrl: "images/media4.jpeg" // 【新增】你的封面路径
        }
    }
};