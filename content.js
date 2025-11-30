/* content.js - 网站内容配置文件 */

const siteContent = {
    // --- 全局导航栏 ---
    navbar: {
        logoAlt: "太空字节 Logo",
        home: "首页",
        earthdata: "太空数仓™",
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
                tag: "最新动态",
                text: "AstrByte 成功部署第13个在轨数据节点，开启太空边缘计算新纪元。",
                link: "阅读详情 &rarr;",
                url: "#" // 这里可以放具体的新闻链接
            },
            {
                tag: "技术突破",
                text: "Xbyte 2.0 固件发布：新增深空通信协议支持，延迟降低 40%。",
                link: "具体内容 &rarr;",
                url: "#"
            },
            {
                tag: "合作伙伴",
                text: "AstrByte 与全球顶尖气象机构达成合作，提供实时卫星云图存储服务。",
                link: "了解更多 &rarr;",
                url: "#"
            }
        ],
        stats: {
            title: "运营数据概览",
            capVal: "10", capLabel: "在轨存储容量", capUnit: "Tbyte",
            dataVal: "216", dataLabel: "在轨数据量", dataUnit: "Gbyte",
            userVal: "13", userLabel: "已注册用户数", userUnit: "个",
            uploadVal: "3", uploadLabel: "共计上传数据", uploadUnit: "次"
        },
        earthdata: {
            title: "太空数仓™ (StellaVault™)",
            meaning: "数据前往太空的意义",
            description: "不仅仅是存储，更是人类文明的备份。通过独立子域名访问，体验前所未有的安全与永恒。",
            btnText: "进入太空数仓"
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
            title: "太空数仓™ (StellaVault™)",
            desc: "安全可靠的天空数据中心数据存储和托管服务 将您的重要数据资产安全存储在近地轨道，物理隔离地面自然灾害与人为干扰。"
        },
        features: {
            f1_title: "极致安全", f1_desc: "数据存储于近地轨道，物理隔离地面自然灾害与人为干扰。",
            f2_title: "全球访问", f2_desc: "依托星链技术，在全球任何角落均可高速访问您的数据资产。",
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
            subtitle: "访问太空数仓系统需要企业级授权账号",
            btn: "登录太空数仓™ 系统",
            domain: "earthdata.space"
        }
    },

    // --- Xbyte页 (xbyte.html) ---
    xbyte: {
        hero: {
            title: "探索字节™(XByte™)",
            desc: "连接你与宇宙的私人终端"
        },
        operation: {
            f1_title: "已激活终端", f1_desc: "5000",
            f2_title: "来自太空的金句", f2_desc: "1024",
            f3_title: "绑定IP数量", f3_desc: "12"
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
            text1: "太空字节成立于2025年，核心团队来自顶尖航天机构与互联网巨头。",
            text2: "我们正在重新定义数据中心的边界，将算力和数据推向天空的边缘。"
        },
        contact: {
            title: "联系我们",
            business: "商务合作",
            email: "business@astrbyte.com",
            phone: "010-8888 8888",
            addrTitle: "公司地址",
            addr: "北京市海淀区航天科技园 A座 101室"
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
            spec_band_label: "频段支持",
            spec_band_val: "Ka-band / Ku-band",
            spec_speed_label: "传输速率",
            spec_speed_val: "最高 10 Gbps",
            spec_deploy_label: "部署方式",
            spec_deploy_val: "地面站 / 车载移动端"
        },
        astrnode: {
            title: "ASTRNode 载荷产品",
            desc: "在轨边缘计算节点，具备高算力、低功耗特性，支持在太空中直接处理AI推理任务。",
            // 参数表
            spec_cpu_label: "处理器",
            spec_cpu_val: "AstrAI Neural Chip V2",
            spec_power_label: "功耗",
            spec_power_val: "< 30W",
            spec_weight_label: "重量",
            spec_weight_val: "1.2 kg (标准1U)"
        }
    },

    // --- 媒体库页 (media.html) ---
    media: {
        title: "媒体中心", // 页面标题
        filters: {
            all: "全部",
            story: "用户故事",
            case: "客户案例",
            launch: "发射实录",
            interview: "技术访谈"
        },
        // 视频卡片内容 (这里是静态模拟，实际项目可能由循环生成)
        card1: {
            tag: "用户故事",
            title: "数据如何改变农业监测",
            // 示例视频：地球旋转
            videoUrl: "videos/story.mov"
        },
        card2: {
            tag: "发射实录",
            title: "ASTR-1 卫星发射全过程",
            // 示例视频：火箭发射
            videoUrl: "https://static.videezy.com/system/resources/previews/000/000/170/original/Rocket_Launch.mp4"
        },
        card3: {
            tag: "客户案例",
            title: "某金融机构的异地容灾方案",
             // 示例视频：数据网络
            videoUrl: "https://static.videezy.com/system/resources/previews/000/004/199/original/Nebula_Blue_Particle_Background_Loop.mp4"
        },
        card4: {
            tag: "技术访谈",
            title: "CTO谈下一代星际网络",
            // 示例视频：科技连接
            videoUrl: "https://static.videezy.com/system/resources/previews/000/005/508/original/Plexus_6.mp4"
        }
    }
};