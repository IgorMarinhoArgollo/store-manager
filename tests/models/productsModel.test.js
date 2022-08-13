const { expect } = require('chai');
const {
  describe, it, before, after,
} = require('mocha');
const sinon = require('sinon');
const { productsModel } = require('../../models');
const connection = require('../../models/connection');

describe('Verify allProducts', () => {
  before(async () => {
    const execute = [[{ product: 1 }, { product: 2 }]];
    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  it('Returns an array of products', async () => {
    const response = await productsModel.allProducts();
    expect(response).to.be.an('array');
  });
});

describe('Verify productById', () => {
  before(async () => {
    const execute = [{ product: 'data' }];
    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  it('Returns an object of a products', async () => {
    const response = await productsModel.productById();
    expect(response).to.be.an('object');
  });
});

describe('Verify postProduct', () => {
  before(async () => {
    const execute = [[{
      id: 1,
      name: 'name of product',
    }]];
    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  it('Returns an object of a products', async () => {
    const response = await productsModel.postProduct();
    expect(response).to.be.an('object');
  });
});

describe('Verify deleteProducst', () => {
  before(async () => {
    const execute = { code: 204 };
    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  it('Returns an object with a code', async () => {
    const response = await productsModel.deleteProduct();
    expect(response).to.be.an('object');
  });
});

describe('Verify putProducts', () => {
  before(async () => {
    const execute = {
      id: 3,
      name: 'product Name',
    };
    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  it('Returns an object of products', async () => {
    const response = await productsModel.putProduct();
    expect(response).to.be.an('object');
  });
});

describe('Verify queryProducst', () => {
  before(async () => {
    const execute = [[{ product: 1 }, { product: 2 }]];
    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  it('Returns an array of products', async () => {
    const response = await productsModel.queryProducts();
    expect(response).to.be.an('array');
  });
});
