# Integração com Google Sheets

## Passo 1: Configurar o Google Apps Script

1. Abra sua planilha: https://docs.google.com/spreadsheets/d/1I5R6D9MZ3ucmDuUJgaKep3u-l5cfDyzOAc4yZGxuSyI/edit

2. Clique em **Extensões** → **Apps Script**

3. Delete todo o código que aparecer e cole este código:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse dos dados recebidos
    const data = JSON.parse(e.postData.contents);
    
    // Data e hora atual
    const timestamp = new Date();
    
    // Adiciona uma nova linha com os dados
    sheet.appendRow([
      timestamp,
      data.nome,
      data.email,
      data.telefone,
      data.plano
    ]);
    
    // Retorna sucesso
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Retorna erro
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Clique em **Salvar** (ícone de disquete)

5. Clique em **Implantar** → **Nova implantação**

6. Clique no ícone de engrenagem ⚙️ ao lado de "Selecionar tipo" e escolha **Aplicativo da Web**

7. Configure:
   - **Descrição**: "Receber dados do formulário"
   - **Executar como**: "Eu (seu email)"
   - **Quem tem acesso**: "Qualquer pessoa"

8. Clique em **Implantar**

9. **COPIE A URL** que aparece (algo como: https://script.google.com/macros/s/XXXXXX/exec)

10. Clique em **Concluído**

## Passo 2: Configurar os Cabeçalhos da Planilha

Na sua planilha, adicione estes cabeçalhos na primeira linha:

| A | B | C | D | E |
|---|---|---|---|---|
| Data/Hora | Nome | Email | Telefone | Plano |

## Passo 3: Atualizar o script.js

Cole a URL copiada no passo 1.9 no arquivo `script.js` onde está indicado `SUA_URL_AQUI`.

O código já foi atualizado automaticamente!

## Testando

1. Preencha o formulário no site
2. Verifique se os dados apareceram na planilha
3. Se tiver algum erro, verifique o console do navegador (F12)

## Observações

- Os dados são enviados PRIMEIRO para a planilha
- O usuário NÃO é redirecionado para o WhatsApp automaticamente
- Você pode ver os dados chegando em tempo real na planilha
