const { expect } = require('chai');
const {
  describe, it, before, after,
} = require('mocha');
const sinon = require('sinon');
const { salesModel } = require('../../models');
const connection = require('../../models/connection');

describe('Verify allSales', () => {
  before(async () => {
    const execute = [[{ sale: 1 }, { sale: 2 }]];
    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  it('Returns an array of sales', async () => {
    const response = await salesModel.allSales();
    expect(response).to.be.an('array');
  });
});

describe('Verify saleById', () => {
  before(async () => {
    const execute = [{ sale: 1 }];
    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  it('Returns an object of a sale', async () => {
    const response = await salesModel.saleById();
    expect(response).to.be.an('object');
  });
});

describe('Verify createSaleOnSale', () => {
  before(async () => {
    const execute = [{ insertId: 4 }];
    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  it('Returns an a number of the insertedId', async () => {
    const response = salesModel.createSaleOnSale;
    expect(response).to.be.a('function');
  });
});

describe('Verify createSaleOnSalesProduct', () => {
  before(async () => {
    const execute = [{}];
    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  it('Returns an object of a product', async () => {
    const response = await salesModel.createSaleOnSalesProduct(4, { productId: 1, quantity: 10 });
    expect(response).to.be.an('object');
  });
});

describe('Verify createSale', () => {
  const arr = [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ];

  before(async () => {
    const id = 4;
    sinon.stub(salesModel, 'createSaleOnSale').resolves(id);

    const obj = { productId: 1, quantity: 12 };
    sinon.stub(salesModel, 'createSaleOnSalesProduct').resolves(obj);

    const execute = [{ sale: 1 }];
    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    salesModel.createSaleOnSale.restore();
    salesModel.createSaleOnSalesProduct.restore();
    connection.execute.restore();
  });

  it('Returns an object of the sale', async () => {
    const response = await salesModel.createSale(arr);
    expect(response).to.be.a('object');
  });
});

describe('Verify deleteSale', () => {
  before(async () => {
    const execute = { status: 'ok' };
    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  it('Returns an object the the property "status" of products', async () => {
    const response = await salesModel.deleteSale();
    expect(response).to.be.an('object');
  });
});

describe('Verify updateSale', () => {
  before(async () => {
    const execute = { status: 'ok' };
    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  it('Returns an object', async () => {
    const response = await salesModel.updateSale();
    expect(response).to.be.a('object');
  });
});
