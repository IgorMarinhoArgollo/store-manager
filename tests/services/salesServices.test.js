const { expect } = require('chai');
const {
  describe, it, before, after,
} = require('mocha');
const sinon = require('sinon');
const { salesModel } = require('../../models');
const { salesService } = require('../../services');

describe('Verify allSales', () => {
  before(async () => {
    const result = [{ sale: 1 }, { sale: 2 }];
    sinon.stub(salesModel, 'allSales').resolves(result);
  });

  after(async () => {
    salesModel.allSales.restore();
  });

  it('Returns an array of products', async () => {
    const response = await salesService.allSales();
    expect(response).to.be.an('array');
  });
});

describe('Verify saleById success', () => {
  before(async () => {
    const result = [{
      sale: 1,
    }];

    sinon.stub(salesModel, 'saleById').resolves(result);
  });

  after(async () => {
    salesModel.saleById.restore();
  });
  it('Returns an object of a sale', async () => {
    const response = await salesService.saleById(1);
    expect(response).to.be.an('array');
  });
});

describe('Verify saleById fail', () => {
  before(async () => {
    const result = [];

    sinon.stub(salesModel, 'saleById').resolves(result);
  });

  after(async () => {
    salesModel.saleById.restore();
  });
  it('Returns an object of a sale', async () => {
    const response = await salesService.saleById(8);
    expect(response).to.be.an('object');
  });
});

describe('Verify createSale success', () => {
  before(async () => {
    const result = {
      id: 3,
      itemsSold: [
        {
          productId: 1,
          quantity: 1,
        },
        {
          productId: 2,
          quantity: 5,
        },
      ],
    };

    sinon.stub(salesModel, 'createSale').resolves(result);
  });

  after(async () => {
    salesModel.createSale.restore();
  });
  it('Returns an object of a sale', async () => {
    const response = await salesService.createSale([{ productId: 1 }, { quantity: 12 }]);
    expect(response).to.be.an('object');
  });
});

describe('Verify deleteSale success', () => {
  before(async () => {
    const result = { status: 'ok' };

    sinon.stub(salesModel, 'deleteSale').resolves(result);
  });

  after(async () => {
    salesModel.deleteSale.restore();
  });
  it('Returns an object of a sale', async () => {
    const response = await salesService.deleteSale(1);
    expect(response).to.have.property('status');
  });
});

describe('Verify deleteSale fail', () => {
  before(async () => {
    const result = { code: '404' };

    sinon.stub(salesModel, 'deleteSale').resolves(result);
  });

  after(async () => {
    salesModel.deleteSale.restore();
  });
  it('Returns an object of a sale', async () => {
    const response = await salesService.deleteSale(99);
    expect(response).to.have.property('code');
  });
});

describe('Verify updateSale fail', () => {
  before(async () => {
    const result = { code: '404' };

    sinon.stub(salesModel, 'updateSale').resolves(result);
  });

  after(async () => {
    salesModel.updateSale.restore();
  });
  it('Returns an object of a sale', async () => {
    const response = await salesService.updateSale(99);
    expect(response).to.have.property('code');
  });
});

describe('Verify updateSale success', () => {
  before(async () => {
    const result = {
      saleId: 2,
      itemsSold: [{ quantity: 10, productId: 1 },
        { quantity: 12, productId: 2 }],
    };

    sinon.stub(salesModel, 'updateSale').resolves(result);
  });

  after(async () => {
    salesModel.updateSale.restore();
  });
  it('Returns an object of a sale', async () => {
    const arr = [
      {
        productId: 1,
        quantity: 10,
      },
      {
        productId: 2,
        quantity: 50,
      },
    ];
    const response = await salesService.updateSale(1, arr);
    expect(response).to.be.an('object');
  });
});
