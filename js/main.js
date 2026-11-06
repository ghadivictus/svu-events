/* 
  ملف الجافاسكريبت الرئيسي
  يشمل: التحقق من النماذج، الفلترة البسيطة، زر العودة للأعلى، والوضع المظلم.
*/

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. زر العودة للأعلى (Bonus)
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    window.onscroll = function() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
      } else {
        scrollTopBtn.style.display = "none";
      }
    };
    scrollTopBtn.onclick = function() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    };
  }

  // 2. تفعيل الوضع المظلم (Bonus)
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '🌙 وضع مظلم';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '☀️ وضع مضيء';
      }
    });
  }

  // 3. التحقق من نموذج صفحة اتصل بنا
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name === '' || email === '' || message === '') {
        showAlert('يرجى تعبئة جميع الحقول المطلوبة بشكل صحيح.', 'danger');
      } else if (!email.includes('@') || !email.includes('.')) {
        showAlert('يرجى إدخال بريد إلكتروني صحيح.', 'warning');
      } else {
        showAlert('تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا.', 'success');
        contactForm.reset();
      }
    });
  }

  function showAlert(message, type) {
    const alertBox = document.getElementById('formAlert');
    alertBox.className = `alert alert-${type} mt-3`;
    alertBox.textContent = message;
    alertBox.style.display = 'block';
    setTimeout(() => {
      alertBox.style.display = 'none';
    }, 4000);
  }

  // 4. فلترة الفعاليات البسيطة في صفحة الفعاليات
  const filterInput = document.getElementById('eventSearch');
  if (filterInput) {
    filterInput.addEventListener('keyup', function() {
      const term = filterInput.value.toLowerCase();
      const cards = document.querySelectorAll('.event-card');
      cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        if (title.includes(term)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

});