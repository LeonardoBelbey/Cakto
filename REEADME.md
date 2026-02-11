# QA Automation Test – Cypress + TypeScript

Projeto de automação de testes UI e API desenvolvido com Cypress + TypeScript, aplicando testes funcionais, negativos, validação de contrato (schema) e geração automática de relatórios HTML.

---

## Objetivo

Validar os fluxos principais da aplicação DemoQA (UI) e da API pública EscuelaJS, aplicando testes positivos, negativos, validações funcionais e validação de contrato, com foco em identificar falhas reais de qualidade, inconsistências de API e possíveis riscos para o produto.

---

## Tecnologias Utilizadas

- Cypress
- TypeScript
- Node.js
- Mochawesome Reporter
- Ajv (JSON Schema Validation)
- GitHub Actions (opcional)

---

## Estrutura do Projeto

cypress
├── e2e

│ ├── ui

│ └── api

├── fixtures

├── schemas

├── support


## Estrutura dos Testes

### Testes UI

Automação do formulário disponível em:  
https://demoqa.com/automation-practice-form

**Cenários automatizados:**
- Preenchimento dos campos obrigatórios
- Envio do formulário
- Validação do modal de confirmação
- Validação dos dados exibidos
- Upload de arquivos
- Testes negativos de campos inválidos
- Validação visual e funcional

---


### Testes de API

Automação da API pública de produtos:  
https://api.escuelajs.co/api/v1/products

**Cenários automatizados:**
- Listagem de produtos
- Criação de produto
- Consulta por ID
- Testes negativos
- Validação de status code
- Validação de contrato (JSON Schema)

---


## Estratégia de Testes

Foram aplicadas as seguintes técnicas:

- Testes funcionais
- Testes negativos
- Validação de regras de negócio
- Validação de contrato (Schema Validation)
- Análise de comportamento inesperado da aplicação
- Identificação de inconsistências na API

---


## Execução do Projeto

### Pré-requisitos

- Node.js 18+

### Instalação

- npm install


## Executar testes em modo headless

- npx cypress run


## Executar testes em modo interativo

- npx cypress open



## Relatório de Execução

Ao final da execução dos testes, é gerado automaticamente um relatório HTML unificado, contendo:

- Casos executados

- Status (pass/fail)

- Evidências (screenshots em falha)

- Tempo de execução

## Caminho:

cypress/reports/html/index.html


-----------------------------------------------------


## Observações Importantes sobre a API

Durante a execução dos testes negativos, foram identificados comportamentos inconsistentes na API de Products.

# Endpoint: POST /products

- Cenário: Envio de payload inválido ou incompleto.

- Comportamento esperado:
Retornar HTTP 400 (Bad Request), indicando erro de validação.

- Comportamento observado:
Em diversas execuções, a API retorna HTTP 500 (Internal Server Error).

- Análise:
Esse comportamento indica ausência ou falha no tratamento adequado de validações no backend, resultando em erro interno ao invés de erro de requisição.

- Conclusão:
Os testes foram mantidos com asserção estrita de HTTP 400, de forma proposital, para evidenciar a inconsistência da API e reforçar a importância da validação correta de regras de negócio.


# Endpoint: GET /products/{id}

- Cenário: Consulta de produto inexistente.

- Comportamento esperado:
Retornar HTTP 404 (Not Found).

- Comportamento observado:
A API retorna HTTP 400 (Bad Request).

- Análise:
O ID informado é válido sintaticamente, porém inexistente. Segundo boas práticas REST, o status correto seria 404, indicando que o recurso não foi encontrado.

- Esse comportamento demonstra inconsistência no tratamento de erros da API.


## Autor

Leonardo Belbey - QA Engineer
