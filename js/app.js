// Smooth Scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ⚠️ COLE A URL DO GOOGLE APPS SCRIPT AQUI
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwEPUguBvdW_mLSTEnck2XTlMpUsDjF5iQ2jT80QWBorThNjLu4_6cEv1_-OmCti_U/exec';

// Formulário Hero - Validação e Envio para Google Sheets
const heroForm = document.getElementById('contact-form-hero');
if (heroForm) {
  heroForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Desabilita o botão de envio para evitar múltiplos envios
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    const formData = {
      nome: document.getElementById('nome').value,
      email: document.getElementById('email').value,
      telefone: document.getElementById('telefone').value,
      plano: document.getElementById('plano').value
    };

    try {
      // Envia os dados para o Google Sheets
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Necessário para CORS do Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Como usamos 'no-cors', não podemos ler a resposta
      // Mas se chegou aqui, o envio foi feito

      // Limpa o formulário
      heroForm.reset();

      // Feedback visual discreto
      submitBtn.textContent = '✅ Enviado!';
      submitBtn.style.backgroundColor = '#28a745';

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.backgroundColor = '';
      }, 3000);

    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      submitBtn.textContent = '❌ Erro - Tente novamente';
      submitBtn.style.backgroundColor = '#dc3545';

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.backgroundColor = '';
      }, 3000);
    } finally {
      // Reabilita o botão
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
}

// Máscara para telefone
function phoneMask(value) {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/g, '($1) $2')
    .replace(/(\d)(\d{4})$/, '$1-$2');
}

// Aplicar máscara nos campos de telefone
const phoneInputs = document.querySelectorAll('input[type="tel"]');
phoneInputs.forEach(input => {
  input.addEventListener('input', function(e) {
    e.target.value = phoneMask(e.target.value);
  });
});

// Animação de entrada das operadoras ao scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Elementos para animar (operadoras)
const animateElements = document.querySelectorAll('.operadora-logo');
animateElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Header fixo - adiciona sombra ao scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
  } else {
    header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  }
});

// Validação de email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Adicionar validação em tempo real
const emailInputs = document.querySelectorAll('input[type="email"]');
emailInputs.forEach(input => {
  input.addEventListener('blur', function() {
    if (this.value && !validateEmail(this.value)) {
      this.style.borderColor = 'red';
      alert('Por favor, insira um email válido');
    } else {
      this.style.borderColor = '';
    }
  });
});

// Log para debug
console.log('Site Sandra da Cruz - Scripts carregados com sucesso!');
