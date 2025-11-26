document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. 导航栏滚动变色效果 ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 2. 移动端汉堡菜单开关 ---
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // 切换菜单显示
        nav.classList.toggle('nav-active');
        
        // 汉堡图标变形动画
        burger.classList.toggle('toggle');
    });

    // 点击链接后自动收起菜单
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
        });
    });

    // --- 3. 元素滚动浮现动画 (Scroll Reveal) ---
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // 元素进入视口多少像素后触发

        revealElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // 初始化检查一次

    // --- 4. 数字滚动动画 (Counter Animation) ---
    const statsSection = document.getElementById('stats');
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false; // 保证动画只执行一次

    // 使用 Intersection Observer 监听元素是否进入视口
    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
            hasAnimated = true;
            
            statNumbers.forEach((num) => {
                const target = +num.getAttribute('data-target');
                const duration = 2000; // 动画总时长 2秒
                const stepTime = 20;   // 每20毫秒更新一次
                const steps = duration / stepTime;
                const increment = target / steps;
                
                let current = 0;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        num.innerText = target;
                        clearInterval(timer);
                    } else {
                        // 如果是小数，保留一位小数；如果是整数，取整
                        if (target % 1 !== 0) {
                            num.innerText = current.toFixed(1);
                        } else {
                            num.innerText = Math.ceil(current);
                        }
                    }
                }, stepTime);
            });
        }
    });

    statsObserver.observe(statsSection);
});