# CurrencyConverter

## Descrição
O projeto desenvolvido consiste em um conversor de moedas utilizando a API "ExchangeRate-API v6" 
---
## Como Rodar o Projeto

1. **Instale a extensão “Live Server”** no VS Code  

2. **Abra o projeto no VS Code**  
   - Coloque todos os arquivos na mesma pasta  
   - Exemplo:
     ```
     C:\Users\SeuUsuario\Documents\CurrencyConverter\
     ```

3. **Execute o projeto**  
   - Clique com o botão direito no arquivo `main.html`  
   - Escolha **“Open with Live Server”**  
   - O navegador abrirá automaticamente em:
     ```
     http://127.0.0.1:5500/CurrencyConverter/main.html
     ```

5. **Certifique-se da chave pessoal da API**
   - Para o funcionameto da API utilizada é necessário inserir o valor da sua chave pessoal na constante "apiKey" dentro do arquivo "apiKey.mjs":
   - Após a inserção o conversor ja torna-se funcional. 
   - Clique no botão 🔄 para inverter as conversões.
---

##  API Utilizada

**ExchangeRate API**  
Link: [https://www.exchangerate-api.com](https://www.exchangerate-api.com)

- O arquivo `apiKey.mjs` deve conter sua **chave pessoal da API**, por exemplo:

```javascript
const apiKey = "sua_chave";
export default apiKey;
```

## Funcionalidades
- Conversão automática entre **Dólar (USD)** e **Real (BRL)** em tempo real  
- Exibição da **cotação atual** via API ExchangeRate  
- Alternância entre **modo claro** e **modo escuro**   
