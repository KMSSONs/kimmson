document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('langSelect');
    const elements = {
        heroTitle: {
            en: "Nature through a variety of senses",
            vi: "Thiên nhiên qua nhiều giác quan khác nhau"
        },
        heroSubtitle: {
            en: "Explore the infinite wonders of our exhibition",
            vi: "Khám phá những điều kỳ diệu vô tận của triển lãm của chúng tôi"
        },
        heroButton: {
            en: "Get Started!",
            vi: "Bắt đầu ngay!"
        },
        introText: {
            en: 'Welcome to the "Blooming Blocks" Exhibition. It showcases student interior and architectural projects integrated with works by collaborators. Themed experiential activities are also held throughout the event.',
            vi: 'Chào mừng bạn đến với Triển lãm "Những khối nở hoa". Triển lãm này trưng bày các dự án nội thất và kiến trúc của sinh viên kết hợp với các tác phẩm của các cộng tác viên. Các hoạt động trải nghiệm theo chủ đề cũng được tổ chức trong suốt sự kiện.'
        },
        featureTitle1: {
            en: "Many to Explore",
            vi: "Nhiều điều để khám phá"
        },
        featureText1: {
            en: "Creative Projects<br>Interactive Activities<br>Green space",
            vi: "Dự án sáng tạo<br>Hoạt động tương tác<br>Không gian xanh"
        },
        featureTitle2: {
            en: "Free Entry",
            vi: "Miễn phí vào cửa"
        },
        featureText2: {
            en: "You're welcome to participate in our exhibition with no fee required",
            vi: "Chúng tôi rất vui mừng chào đón bạn đến tham gia triển lãm của chúng tôi mà không mất phí"
        },
        featureTitle3: {
            en: "Takeaways",
            vi: "Quà lưu niệm"
        },
        featureText3: {
            en: "Unique souvenirs that capture your experience",
            vi: "Những món quà lưu niệm độc đáo ghi lại trải nghiệm của bạn"
        },
        featureTitle4: {
            en: "100+ People Visited",
            vi: "100+ Người đã tham quan"
        },
        footerText: {
            en: "&copy; 2024 Architecture Exhibition. All rights reserved.",
            vi: "&copy; 2024 Triển lãm Kiến trúc. Mọi quyền được bảo lưu."
        },
        homeLink: {
            en: "Home",
            vi: "Trang chủ"
        },
        aboutLink: {
            en: "About Us",
            vi: "Về chúng tôi"
        },
        contactLink: {
            en: "Contact",
            vi: "Liên hệ"
        },
        additionalInfoTitle: {
            en: "Additional Information",
            vi: "Thông tin bổ sung"
        },
        additionalInfoText: {
            en: "This section contains more details about our exhibition, activities, and projects.",
            vi: "Phần này chứa thêm chi tiết về triển lãm, các hoạt động và dự án của chúng tôi."
        },
        learnMoreBtn: {
            en: "Learn More!",
            vi: "Tìm hiểu thêm!"
        },
        upcomingTitle: {
            en: "Upcoming!!!",
            vi: "Sắp tới!!!"
        },
        upcomingText: {
            en: "The 'Blooming Blocks' Exhibition, where showcases student interior and architectural projects integrated with works by collaborators",
            vi: "Triển lãm 'Những khối nở hoa', nơi trưng bày các dự án nội thất và kiến trúc của sinh viên kết hợp với các tác phẩm của các cộng tác viên"
        },
        daysLabel: {
            en: "Days",
            vi: "Ngày"
        },
        hoursLabel: {
            en: "Hours",
            vi: "Giờ"
        },
        minutesLabel: {
            en: "Minutes",
            vi: "Phút"
        },
        secondsLabel: {
            en: "Seconds",
            vi: "Giây"
        },
        articleTitle1: {
            en: "How Immersing Yourself in Nature can Make You Happier and Healthier?",
            vi: "Làm thế nào đắm mình trong thiên nhiên có thể làm bạn hạnh phúc và khỏe mạnh hơn?"
        },
        articleText1: {
            en: "People who have increased levels of nature connectedness experience more frequent positive mood, happiness, life satisfaction, meaningful relationships, purpose in life and an increased sense of competence.",
            vi: "Những người có mức độ kết nối với thiên nhiên cao hơn sẽ trải nghiệm tâm trạng tích cực thường xuyên hơn, hạnh phúc, hài lòng với cuộc sống, các mối quan hệ ý nghĩa, mục đích trong cuộc sống và cảm giác năng lực tăng lên."
        },
        articleTitle2: {
            en: "Bringing Nature into Urban Life",
            vi: "Đưa thiên nhiên vào cuộc sống đô thị"
        },
        articleText2: {
            en: "The 'Blooming Blocks' Exhibition, where showcases student interior and architectural projects integrated with works by collaborators",
            vi: "Triển lãm 'Những khối nở hoa', nơi trưng bày các dự án nội thất và kiến trúc của sinh viên kết hợp với các tác phẩm của các cộng tác viên"
        },
        readMoreBtn: {
            en: "Read More",
            vi: "Đọc thêm"
        }
    };

   
    const updateLanguage = (selectedLang) => {
        for (let key in elements) {
            const element = document.getElementById(key);
            if (element) {
                element.innerHTML = elements[key][selectedLang];
            }
        }

        // Update countdown labels
        document.querySelector('.days .label').textContent = elements.daysLabel[selectedLang];
        document.querySelector('.hours .label').textContent = elements.hoursLabel[selectedLang];
        document.querySelector('.minutes .label').textContent = elements.minutesLabel[selectedLang];
        document.querySelector('.seconds .label').textContent = elements.secondsLabel[selectedLang];
    };

    langSelect.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        updateLanguage(selectedLang);
    });

    const learnMoreBtn = document.querySelector('.learn-more-btn');
    learnMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const additionalSection = document.createElement('div');
        additionalSection.classList.add('additional-section');
        const selectedLang = langSelect.value;
        additionalSection.innerHTML = `
            <h2 id="additionalInfoTitle">${elements.additionalInfoTitle[selectedLang]}</h2>
            <p id="additionalInfoText">${elements.additionalInfoText[selectedLang]}</p>
            <a href="#" class="btn">${elements.learnMoreBtn[selectedLang]}</a>
        `;
        document.body.appendChild(additionalSection);
    });

    // Tab navigation functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const pages = document.querySelectorAll('.page');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));

            button.classList.add('active');
            document.querySelector(`#${button.dataset.target}`).classList.add('active');
        });
    });


    // Activate the first tab by default
    if (tabButtons.length > 0) {
        tabButtons[0].classList.add('active');
        pages[0].classList.add('active');
    }

    // Countdown timer functionality
    const countdownElements = {
        days: document.querySelector('.days'),
        hours: document.querySelector('.hours'),
        minutes: document.querySelector('.minutes'),
        seconds: document.querySelector('.seconds')
    };

    const targetDate = new Date('2024-12-12T00:00:00'); // Set your target date here

    function updateCountdown() {
        const currentDate = new Date();
        const totalSeconds = (targetDate - currentDate) / 1000;

        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor((totalSeconds / 3600) % 24);
        const minutes = Math.floor((totalSeconds / 60) % 60);
        const seconds = Math.floor(totalSeconds % 60);

        countdownElements.days.textContent = days;
        countdownElements.hours.textContent = hours;
        countdownElements.minutes.textContent = minutes;
        countdownElements.seconds.textContent = seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Carousel functionality
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
            dots[i].classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    let slideInterval = setInterval(nextSlide, 2000);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            currentIndex = index;
            showSlide(currentIndex);
            slideInterval = setInterval(nextSlide, 2000);
        });
    });

    showSlide(currentIndex);

    // Initialize the page with the selected language
    updateLanguage(langSelect.value);

    // Intersection Observer for reveal effect
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});
