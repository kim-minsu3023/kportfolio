    // 네비게이션 활성화 및 페이드인
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("#nav ul li a");

    function activateNavLink() {
      let scrollY = window.scrollY;
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active");
            }
          });
        }
      });
    }

    function revealOnScroll() {
      document.querySelectorAll(".onscroll-fade-in").forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("visible");
        }
      });
    }

    document.addEventListener("scroll", () => {
      activateNavLink();
      revealOnScroll();
    });
    window.addEventListener("load", () => {
      activateNavLink();
      revealOnScroll();
    });

    // 타이핑 애니메이션
    const targetText = "김민수의 포트폴리오";
    const typingElement = document.getElementById("typing-text");
    let idx = 0;
    function typingEffect() {
      if (idx <= targetText.length) {
        typingElement.textContent = targetText.slice(0, idx);
        idx++;
        setTimeout(typingEffect, 110);
      }
    }
    window.addEventListener("DOMContentLoaded", typingEffect);