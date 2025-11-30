document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. 模版内容渲染引擎 (Global)
    // ==========================================
    function renderContent() {
        if (typeof siteContent === 'undefined') return;
        const elements = document.querySelectorAll('[data-key]');
        
        elements.forEach(el => {
            const keyPath = el.getAttribute('data-key');
            // 辅助函数：根据路径获取值
            const content = keyPath.split('.').reduce((prev, curr) => prev ? prev[curr] : null, siteContent);

            if (content) {
                if (el.tagName === 'P' || el.tagName === 'DIV' || el.tagName === 'SPAN' || el.tagName.startsWith('H')) {
                    el.innerHTML = content;
                } else {
                    el.innerText = content;
                }
            }
        });
    }
    renderContent();

    // ==========================================
    // 2. 导航栏滚动变色 (Global)
    // ==========================================
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // ==========================================
    // 3. 移动端汉堡菜单 (Global)
    // ==========================================
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav-links');
    
    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
        
        nav.querySelectorAll('li').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            });
        });
    }

    // ==========================================
    // 4. 元素滚动浮现动画 (Global)
    // ==========================================
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;
        revealElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // ==========================================
    // 5. 数字滚动动画 (仅在有 stats 的页面运行)
    // ==========================================
    const statsSection = document.getElementById('stats');
    
    // 【关键修复】：先判断 statsSection 是否存在！
    if (statsSection) {
        const statNumbers = document.querySelectorAll('.stat-number');
        let hasAnimated = false;

        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasAnimated) {
                hasAnimated = true;
                statNumbers.forEach((num) => {
                    const target = +num.getAttribute('data-target');
                    const duration = 2000; 
                    const stepTime = 20;
                    const steps = duration / stepTime;
                    const increment = target / steps;
                    let current = 0;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            num.innerText = target;
                            clearInterval(timer);
                        } else {
                            if (target % 1 !== 0) num.innerText = current.toFixed(1);
                            else num.innerText = Math.ceil(current);
                        }
                    }, stepTime);
                });
            }
        });
        
        // 只有元素存在时才观察
        statsObserver.observe(statsSection);
    }

    // ==========================================
    // 6. 新闻轮播逻辑 (仅在有 news 的页面运行)
    // ==========================================
    const newsTextEl = document.getElementById('news-text');
    
    // 【关键修复】：先判断新闻元素是否存在
    if (newsTextEl && typeof siteContent !== 'undefined' && siteContent.home.news) {
        const tagEl = document.getElementById('news-tag');
        const linkEl = document.getElementById('news-link');
        const newsList = siteContent.home.news;
        let currentIndex = 0;

        function updateNews() {
            const item = newsList[currentIndex];
            tagEl.classList.add('fade-out');
            newsTextEl.classList.add('fade-out');
            linkEl.classList.add('fade-out');

            setTimeout(() => {
                tagEl.innerText = item.tag;
                newsTextEl.innerText = item.text;
                linkEl.innerHTML = item.link;
                
                tagEl.classList.remove('fade-out');
                newsTextEl.classList.remove('fade-out');
                linkEl.classList.remove('fade-out');
            }, 500);

            currentIndex = (currentIndex + 1) % newsList.length;
        }
        
        // 初始运行一次，然后设置定时器
        // updateNews(); // 如果想从第二条开始滚可以把这个注释掉，因为content.js已经填了第一条
        setInterval(updateNews, 4000);
    }

    // ==========================================
    // 7. 视频弹窗逻辑 (仅在有 modal 的页面运行)
    // ==========================================
    const modal = document.getElementById('video-modal');
    
    // 【关键修复】：先判断 modal 是否存在
    if (modal) {
        console.log("视频弹窗模块已加载"); // 用于调试
        const modalVideo = document.getElementById('modal-video');
        const closeBtn = document.querySelector('.close-btn');
        const mediaCards = document.querySelectorAll('.media-card');

        // 点击卡片
        mediaCards.forEach(card => {
            card.addEventListener('click', () => {
                // A. 获取该卡片绑定的 data-video-key (例如 "media.card1.videoUrl")
                const videoKeyPath = card.getAttribute('data-video-key');
                
                if (videoKeyPath && typeof siteContent !== 'undefined') {
                    // B. 利用路径在 siteContent 中找到真实的 URL 字符串
                    // 逻辑：把 "media.card1.videoUrl" 拆分，一层层去 siteContent 里找
                    const videoUrl = videoKeyPath.split('.').reduce((prev, curr) => prev ? prev[curr] : null, siteContent);

                    // C. 如果找到了地址，就赋值给播放器
                    if (videoUrl) {
                        modalVideo.src = videoUrl;
                        console.log("正在播放:", videoUrl);
                    } else {
                        console.error("未找到对应的视频地址:", videoKeyPath);
                    }
                }

                // D. 显示弹窗并播放
                modal.style.display = "block";
                if (modalVideo) modalVideo.play();
            });
        });

        // 点击关闭按钮
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = "none";
                if (modalVideo) {
                    modalVideo.pause();
                    modalVideo.currentTime = 0;
                }
            });
        }

        // 点击背景关闭
        window.addEventListener('click', (e) => {
            if (e.target == modal) {
                modal.style.display = "none";
                if (modalVideo) {
                    modalVideo.pause();
                    modalVideo.currentTime = 0;
                }
            }
        });
    }
 // ==========================================
    // 8. 媒体库过滤器逻辑
    // ==========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const mediaCardsGrid = document.querySelectorAll('.media-card'); // 获取所有卡片

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // 1. 按钮样式切换
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // 2. 获取筛选值
                const filterValue = btn.getAttribute('data-filter');

                // 3. 遍历卡片
                mediaCardsGrid.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');

                    if (filterValue === 'all' || filterValue === cardCategory) {
                        // 【匹配：显示并播放动画】
                        
                        // A. 先显示
                        card.style.display = 'block';
                        
                        // B. 强制重置动画 (这是 CSS 动画重播的小技巧)
                        card.classList.remove('animate-in'); // 先移除
                        void card.offsetWidth; // 触发回流 (让浏览器意识到类被移除了)
                        card.classList.add('animate-in'); // 再添加，触发动画播放
                        
                    } else {
                        // 【不匹配：隐藏】
                        card.style.display = 'none';
                        card.classList.remove('animate-in');
                    }
                });
            });
        });
    }
    // ==========================================
    // 9. 图片/二维码放大功能 (Global)
    // ==========================================
    const imgModal = document.getElementById('img-modal');
    
    // 只有当前页面有图片弹窗容器时才执行
    if (imgModal) {
        const modalImg = document.getElementById('img-modal-content');
        const imgCloseBtn = document.querySelector('.img-close');
        // 获取页面上所有的二维码图片
        const qrImages = document.querySelectorAll('.qr-img');

        // 1. 绑定点击事件
        qrImages.forEach(img => {
            img.addEventListener('click', () => {
                imgModal.style.display = "block";
                modalImg.src = img.src; // 把被点图片的地址给弹窗
            });
        });

        // 2. 点击关闭按钮
        if (imgCloseBtn) {
            imgCloseBtn.addEventListener('click', () => {
                imgModal.style.display = "none";
            });
        }

        // 3. 点击背景关闭
        imgModal.addEventListener('click', (e) => {
            // 注意：这里要判断点击的是遮罩层(imgModal)本身，而不是图片(modalImg)
            if (e.target === imgModal) {
                imgModal.style.display = "none";
            }
        });
    }
});