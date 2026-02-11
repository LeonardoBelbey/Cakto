import { productSchema } from "../../schemas/product.schema";
import { productListSchema } from "../../schemas/product-list.schema";
import { errorSchema } from "../../schemas/error.schema";

const baseUrl = 'https://api.escuelajs.co/api/v1';

describe('Products API - Testes Positivos e Negativos', () => {

  it('Deve listar produtos', () => {
    cy.request(`${baseUrl}/products`).then(response => {
      expect(response.status).to.eq(200);
      cy.validateSchema(productListSchema, response.body);
    });
  });

  it('Deve criar um novo produto com sucesso', () => {
    cy.fixture('product').then(product => {
      const payload = {
        ...product,
        title: `${product.title} ${Date.now()}`
      };

      cy.request('POST', `${baseUrl}/products`, payload)
        .then(response => {
          expect(response.status).to.eq(201);
          cy.validateSchema(productSchema, response.body);
        });
    });
  });

  it('Deve consultar produto por ID', () => {
    cy.fixture('product').then(product => {
      const payload = {
        ...product,
        title: `${product.title} ${Date.now()}`
      };

      cy.request('POST', `${baseUrl}/products`, payload).then(create => {
        const productId = create.body.id;

        cy.request(`${baseUrl}/products/${productId}`).then(response => {
          expect(response.status).to.eq(200);
          cy.validateSchema(productSchema, response.body);
        });
      });
    });
  });

  // ---------- NEGATIVOS ----------

  it('Não deve criar produto sem campos obrigatórios', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/products`,
      failOnStatusCode: false,
      body: {}
    }).then(response => {
      expect(response.status).to.eq(400);
      cy.validateSchema(errorSchema, response.body);
    });
  });

  it('Não deve criar produto com payload inválido', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/products`,
      failOnStatusCode: false,
      body: { title: "", price: "abc" }
    }).then(response => {
      expect(response.status).to.eq(400);
      cy.validateSchema(errorSchema, response.body);
    });
  });

  it('Deve retornar 404 ao buscar produto inexistente', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/products/999999999`,
      failOnStatusCode: false
    }).then(response => {
      expect(response.status).to.eq(404);
      cy.validateSchema(errorSchema, response.body);
    });
  });

});