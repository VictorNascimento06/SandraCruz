# 🏥 Sandra da Cruz - Corretora de Planos de Saúde

> Landing page moderna e responsiva para corretora de planos de saúde com formulário integrado ao Google Sheets

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📋 Sobre o Projeto

Site profissional desenvolvido para captação de leads e apresentação de serviços de consultoria em planos de saúde. O projeto conta com design moderno, totalmente responsivo e integração direta com Google Sheets para armazenamento de contatos.

### ✨ Principais Funcionalidades

- 📱 **Design Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- 📊 **Integração Google Sheets** - Formulários conectados automaticamente
- 🎨 **Interface Moderna** - Design clean com gradientes e animações suaves
- ⚡ **Performance Otimizada** - Carregamento rápido e animações fluidas
- 🔄 **Scroll Suave** - Navegação agradável entre seções
- 📧 **Formulário de Contato** - Com validação de campos e feedback visual
- 🏢 **Showcase de Operadoras** - Exibição das principais parceiras
- 💬 **Máscaras de Entrada** - Formatação automática de telefone
- 👁️ **Animações on Scroll** - Elementos aparecem conforme rolagem da página

## 🚀 Demonstração

### Seções do Site

1. **Hero Section** - Apresentação com formulário de cotação
2. **Operadoras** - Grid com logos das principais operadoras parceiras
3. **Planos em Destaque** - Cards destacando tipos de planos
4. **Estatísticas** - Números de sucesso e credibilidade
5. **Avaliações** - Depoimentos de clientes
6. **Sobre** - Informações sobre a corretora
7. **FAQ** - Perguntas frequentes
8. **Contato** - Informações de contato e formulário
9. **Botão WhatsApp** - Flutuante para contato rápido

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização com CSS Grid, Flexbox e variáveis CSS
- **JavaScript Vanilla** - Interatividade e integração com API
- **Google Apps Script** - Backend para formulários
- **Intersection Observer API** - Animações on scroll

## 📁 Estrutura do Projeto

```
Sandra/
├── index.html              # Página principal
├── styles.css              # Estilos e design responsivo
├── script.js               # Lógica e interatividade
├── CONFIGURACOES.md        # Guia de configuração
├── INTEGRACAO-GOOGLE-SHEETS.md  # Guia de integração
├── MELHORIAS.md            # Sugestões de melhorias
├── README.md               # Este arquivo
└── images/
    └── logos/              # Logos das operadoras
        ├── amil.png
        ├── sulamerica.png
        ├── unimed.png
        └── ...
```

## 🔧 Como Usar

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/sandra-planos-saude.git
cd sandra-planos-saude
```

### 2. Configurar Google Sheets (Opcional)

Para habilitar a captura de leads, siga o guia completo em [INTEGRACAO-GOOGLE-SHEETS.md](INTEGRACAO-GOOGLE-SHEETS.md)

**Resumo rápido:**
1. Crie uma planilha no Google Sheets
2. Configure o Google Apps Script
3. Cole a URL do script em `script.js`

### 3. Abrir o Site

- **Método 1:** Abra `index.html` diretamente no navegador
- **Método 2:** Use Live Server do VS Code para desenvolvimento
- **Método 3:** Deploy em serviço de hosting (Netlify, Vercel, GitHub Pages)

## ⚙️ Personalização

### Alterar Cores

No arquivo `styles.css`, edite as variáveis CSS:

```css
:root {
  --color-primary: #2563eb;      /* Cor principal */
  --color-secondary: #1d4ed8;    /* Cor secundária */
  --color-gold: #f59e0b;         /* Cor de destaque */
  --color-dark: #1e293b;         /* Texto escuro */
  --color-light-bg: #f8fafc;     /* Fundo claro */
}
```

### Adicionar/Remover Operadoras

No arquivo `index.html`, seção `<section class="operadoras">`:

```html
<div class="operadora-logo">
  <img src="images/logos/nome-operadora.png" alt="Nome Operadora">
  <span>NOME OPERADORA</span>
</div>
```

### Configurar WhatsApp

No arquivo `index.html`, localize o botão flutuante e atualize o número:

```html
<a href="https://wa.me/5541999999999?text=Olá!" class="whatsapp-float">
```

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- **Desktop:** > 1024px
- **Tablet:** 768px - 1024px  
- **Mobile:** < 768px

## 🎯 Funcionalidades JavaScript

### Validação de Formulário

```javascript
// Validação de email em tempo real
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
```

### Máscara de Telefone

```javascript
// Formata automaticamente (XX) XXXXX-XXXX
function phoneMask(value) {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/g, '($1) $2')
    .replace(/(\d)(\d{4})$/, '$1-$2');
}
```

### Animações no Scroll

```javascript
// Intersection Observer para animações
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
});
```

## 📊 Integração com Google Sheets

Os dados dos formulários são enviados para uma planilha do Google Sheets contendo:

| Nome | Email | Telefone | Plano | Data/Hora |
|------|-------|----------|-------|-----------|
| João Silva | joao@email.com | (41) 99999-9999 | Familiar | 28/11/2025 10:30 |

Veja o guia completo: [INTEGRACAO-GOOGLE-SHEETS.md](INTEGRACAO-GOOGLE-SHEETS.md)

## 🚀 Deploy

### GitHub Pages

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

Depois ative GitHub Pages nas configurações do repositório.

### Netlify (Recomendado)

1. Conecte seu repositório GitHub
2. Deploy automático a cada commit
3. HTTPS gratuito

### Vercel

```bash
npm i -g vercel
vercel
```

## 📚 Documentação Adicional

- [CONFIGURACOES.md](CONFIGURACOES.md) - Guia completo de configuração
- [INTEGRACAO-GOOGLE-SHEETS.md](INTEGRACAO-GOOGLE-SHEETS.md) - Como integrar formulários
- [MELHORIAS.md](MELHORIAS.md) - Sugestões de melhorias futuras

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Desenvolvido para Sandra da Cruz**

- Corretora de Planos de Saúde
- Atendimento em Curitiba e região

---

## 🎨 Screenshots

### Desktop
![Desktop View](https://via.placeholder.com/800x400?text=Desktop+View)

### Mobile
![Mobile View](https://via.placeholder.com/300x600?text=Mobile+View)

---

⭐ **Se este projeto foi útil, deixe uma estrela!**

💬 **Dúvidas?** Abra uma [issue](https://github.com/seu-usuario/sandra-planos-saude/issues)
