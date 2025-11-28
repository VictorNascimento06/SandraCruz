# ⚙️ Configurações do Site - Sandra da Cruz

## 📱 WhatsApp Configurado
**Número:** (21) 99939-7195

## 📧 Email Configurado
**Email:** vhnascimento2808@hotmail.com

---

## 🔄 Como Funciona o Formulário

Quando o cliente preenche o formulário e clica em **"Enviar"**:

1. ✅ Os dados são coletados automaticamente
2. 📱 Uma nova aba abre no WhatsApp Web/App
3. 💬 A mensagem já vem formatada com:
   - Nome do cliente
   - Email do cliente
   - Telefone do cliente
   - Tipo de plano escolhido

### Exemplo da mensagem que chega:
```
*Nova Cotação de Plano de Saúde*

*Nome:* João Silva
*Email:* joao@email.com
*Telefone:* (21) 98765-4321
*Plano:* Familiar
```

---

## 🛠️ Para Alterar o Número do WhatsApp

Edite o arquivo `script.js` na linha que contém:
```javascript
window.open(`https://wa.me/5521999397195?text=${mensagem}`, '_blank');
```

Substitua `5521999397195` pelo novo número no formato:
- **55** = Código do Brasil
- **21** = DDD
- **999397195** = Número sem traços ou espaços

---

## ✅ Testando o Formulário

1. Abra o site no navegador
2. Preencha todos os campos do formulário
3. Clique em "Enviar"
4. O WhatsApp deve abrir automaticamente com a mensagem pronta!

---

**Observação:** O email `vhnascimento2808@hotmail.com` está documentado para referência, mas atualmente o formulário está configurado para enviar apenas via WhatsApp (mais prático e imediato).
