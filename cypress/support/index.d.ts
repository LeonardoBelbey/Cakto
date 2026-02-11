declare namespace Cypress {
  interface Chainable {
    validateSchema(schema: any, data: any): void;
  }
}