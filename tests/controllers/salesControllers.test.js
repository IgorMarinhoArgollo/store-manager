const { expect } = require('chai');
const {
  describe, it, before, after,
} = require('mocha');
const sinon = require('sinon');
const { salesController } = require('../../controllers');
const { salesService } = require('../../services');

describe('Verify allProducts', () => {
  const req = {};
  const res = {};
  let next = {};

  before(async () => {
    req.body = {};

    next = sinon.stub().returns();
    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns();

    sinon.stub(salesService, 'allSales').resolves([{ product: 1 }, { product: 2 }]);
  });

  after(async () => {
    salesService.allSales.restore();
  });

  it('verify the controller.allSales status', async () => {
    await salesController.allSales(req, res, next);
    expect(res.status.calledWith(200)).to.be.equal(true);
  });
});

describe('Verify saleById success', () => {
  const req = {};
  const res = {};
  let next = {};

  before(async () => {
    req.params = 1;

    next = sinon.stub().returns();
    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns();

    sinon.stub(salesService, 'saleById').resolves([{
      id: 1,
      name: 'Martelo de Thor',
    }]);
  });

  after(async () => {
    salesService.saleById.restore();
  });

  it('verify the controller.saleById status', async () => {
    await salesController.saleById(req, res, next);
    expect(res.status.calledWith(200)).to.be.equal(true);
  });
});

describe('Verify saleById fail', () => {
  const req = {};
  const res = {};
  let next = {};

  before(async () => {
    req.params = 99;

    next = sinon.stub().returns();
    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns();

    sinon.stub(salesService, 'saleById').resolves({ code: 404, message: 'Product not found' });
  });

  after(async () => {
    salesService.saleById.restore();
  });

  it('verify the controller.saleById status', async () => {
    await salesController.saleById(req, res, next);
    expect(res.status.calledWith(404)).to.be.equal(true);
  });
});

describe('Verify createSale sucess', () => {
  const req = {};
  const res = {};
  let next = {};

  before(async () => {
    req.body = [
      {
        productId: 1,
        quantity: 1,
      },
      {
        productId: 2,
        quantity: 5,
      },
    ];

    next = sinon.stub().returns();
    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns();

    sinon.stub(salesService, 'createSale').resolves({
      id: 4,
      name: 'Product X',
    });
  });

  after(async () => {
    salesService.createSale.restore();
  });

  it('verify the controller.productById status', async () => {
    await salesController.createSale(req, res, next);
    expect(res.status.calledWith(201)).to.be.equal(true);
  });
});

describe('Verify deleteSale success', () => {
  const req = {};
  const res = {};
  let next = {};

  before(async () => {
    req.params = 1;

    next = sinon.stub().returns();
    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns();

    sinon.stub(salesService, 'deleteSale').resolves({ status: 'ok' });
  });

  after(async () => {
    salesService.deleteSale.restore();
  });

  it('verify the controller.deleteSale status', async () => {
    await salesController.deleteSale(req, res, next);
    expect(res.status.calledWith(204)).to.be.equal(true);
  });
});

describe('Verify deleteSale fail', () => {
  const req = {};
  const res = {};
  let next = {};

  before(async () => {
    req.params = 99;

    next = sinon.stub().returns();
    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns();

    sinon.stub(salesService, 'deleteSale').resolves({ code: 404, message: 'Product not found' });
  });

  after(async () => {
    salesService.deleteSale.restore();
  });

  it('verify the controller.deleteSale status', async () => {
    await salesController.deleteSale(req, res, next);
    expect(res.status.calledWith(404)).to.be.equal(true);
  });
});

describe('Verify updateSale success', () => {
  const req = {};
  const res = {};
  let next = {};

  before(async () => {
    req.params = 1;
    req.body = [
      {
        productId: 1,
        quantity: 10,
      },
      {
        productId: 2,
        quantity: 50,
      },
    ];

    next = sinon.stub().returns();
    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns();

    sinon.stub(salesService, 'updateSale').resolves({ status: 'ok' });
  });

  after(async () => {
    salesService.updateSale.restore();
  });

  it('verify the controller.updateSale status', async () => {
    await salesController.updateSale(req, res, next);
    expect(res.status.calledWith(200)).to.be.equal(true);
  });
});

describe('Verify updateSale fail', () => {
  const req = {};
  const res = {};
  let next = {};

  before(async () => {
    req.params = 99;
    req.body = [
      {
        productId: 1,
        quantity: 10,
      },
      {
        productId: 2,
        quantity: 50,
      },
    ];

    next = sinon.stub().returns();
    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns();

    sinon.stub(salesService, 'updateSale').resolves({ code: 404, message: 'Product not found' });
  });

  after(async () => {
    salesService.updateSale.restore();
  });

  it('verify the controller.updateSale status', async () => {
    await salesController.updateSale(req, res, next);
    expect(res.status.calledWith(404)).to.be.equal(true);
  });
});
