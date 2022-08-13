const { expect } = require('chai');
const {
  describe, it, before, after,
} = require('mocha');
const sinon = require('sinon');
const { productsController } = require('../../controllers');
const { productsService } = require('../../services');

describe('Verify allProducts', () => {
  const req = {};
  const res = {};
  let next = {};

  before(async () => {
    req.body = {};

    next = sinon.stub().returns();
    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns();

    sinon.stub(productsService, 'allProducts').resolves([{ product: 1 }, { product: 2 }]);
  });

  after(async () => {
    productsService.allProducts.restore();
  });

  it('verify the controller.allProducts status', async () => {
    await productsController.allProducts(req, res, next);
    expect(res.status.calledWith(200)).to.be.equal(true);
  });
});

describe('Verify productById success', () => {
  const req = {};
  const res = {};
  let next = {};

  before(async () => {
    req.params = 1;

    next = sinon.stub().returns();
    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns();

    sinon.stub(productsService, 'productById').resolves([{
      id: 1,
      name: 'Martelo de Thor',
    }]);
  });

  after(async () => {
    productsService.productById.restore();
  });

  it('verify the controller.productById status', async () => {
    await productsController.productById(req, res, next);
    expect(res.status.calledWith(200)).to.be.equal(true);
  });
});

describe('Verify productById fail', () => {
  const req = {};
  const res = {};
  let next = {};

  before(async () => {
    req.params = 99;

    next = sinon.stub().returns();
    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns();

    sinon.stub(productsService, 'productById').resolves({ code: 404, message: 'Product not found' });
  });

  after(async () => {
    productsService.productById.restore();
  });

  it('verify the controller.productById status', async () => {
    await productsController.productById(req, res, next);
    expect(res.status.calledWith(404)).to.be.equal(true);
  });
});

describe('Verify postProduct sucess', () => {
  const req = {};
  const res = {};
  let next = {};

  before(async () => {
    req.body = {
      name: 'Product X',
    };

    next = sinon.stub().returns();
    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns();

    sinon.stub(productsService, 'postProduct').resolves({
      id: 4,
      name: 'Product X',
    });
  });

  after(async () => {
    productsService.postProduct.restore();
  });

  it('verify the controller.productById status', async () => {
    await productsController.postProduct(req, res, next);
    expect(res.status.calledWith(201)).to.be.equal(true);
  });
});

describe('Verify postProduct fail (400)', () => {
  const req = {};
  const res = {};
  let next = {};

  before(async () => {
    req.body = {};

    next = sinon.stub().returns();
    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns();

    sinon.stub(productsService, 'postProduct').resolves({ code: 400, message: '"name" is required' });
  });

  after(async () => {
    productsService.postProduct.restore();
  });

  it('verify the controller.productById status', async () => {
    await productsController.postProduct(req, res, next);
    expect(res.status.calledWith(400)).to.be.equal(true);
  });
});

describe('Verify postProduct fail (422)', () => {
  const req = {};
  const res = {};
  let next = {};

  before(async () => {
    req.body = {
      name: 'abc',
    };

    next = sinon.stub().returns();
    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns();

    sinon.stub(productsService, 'postProduct').resolves({ code: 422, message: '"name" length must be at least 5 characters long' });
  });

  after(async () => {
    productsService.postProduct.restore();
  });

  it('verify the controller.productById status', async () => {
    await productsController.postProduct(req, res, next);
    expect(res.status.calledWith(422)).to.be.equal(true);
  });
});

describe('Verify deleteProduct success', () => {
  const req = {};
  const res = {};
  let next = {};

  before(async () => {
    req.params = 1;

    next = sinon.stub().returns();
    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns();

    sinon.stub(productsService, 'deleteProduct').resolves({});
  });

  after(async () => {
    productsService.deleteProduct.restore();
  });

  it('verify the controller.deleteProduct status', async () => {
    await productsController.deleteProduct(req, res, next);
    expect(res.status.calledWith(204)).to.be.equal(true);
  });
});

describe('Verify deleteProduct fail', () => {
  const req = {};
  const res = {};
  let next = {};

  before(async () => {
    req.params = 99;

    next = sinon.stub().returns();
    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns();

    sinon.stub(productsService, 'deleteProduct').resolves({ code: 404, message: 'Product not found' });
  });

  after(async () => {
    productsService.deleteProduct.restore();
  });

  it('verify the controller.deleteProduct status', async () => {
    await productsController.deleteProduct(req, res, next);
    expect(res.status.calledWith(404)).to.be.equal(true);
  });
});

describe('Verify updateProduct sucess', () => {
  const req = {};
  const res = {};
  let next = {};

  before(async () => {
    req.body = {
      name: 'Product X',
    };
    req.params = 1;

    next = sinon.stub().returns();
    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns();

    sinon.stub(productsService, 'putProduct').resolves({
      id: 1,
      name: 'Product X',
    });
  });

  after(async () => {
    productsService.putProduct.restore();
  });

  it('verify the controller.updateProduct status', async () => {
    await productsController.updateProduct(req, res, next);
    expect(res.status.calledWith(200)).to.be.equal(true);
  });
});

describe('Verify updateProduct fail (400)', () => {
  const req = {};
  const res = {};
  let next = {};

  before(async () => {
    req.body = {};
    req.params = 1;

    next = sinon.stub().returns();
    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns();

    sinon.stub(productsService, 'putProduct').resolves({ code: 400, message: '"name" is required' });
  });

  after(async () => {
    productsService.putProduct.restore();
  });

  it('verify the controller.updateProduct status', async () => {
    await productsController.updateProduct(req, res, next);
    expect(res.status.calledWith(400)).to.be.equal(true);
  });
});

describe('Verify updateProduct fail (422)', () => {
  const req = {};
  const res = {};
  let next = {};

  before(async () => {
    req.body = {
      name: 'abc',
    };
    req.params = 1;

    next = sinon.stub().returns();
    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns();

    sinon.stub(productsService, 'putProduct').resolves({ code: 422, message: '"name" length must be at least 5 characters long' });
  });

  after(async () => {
    productsService.putProduct.restore();
  });

  it('verify the controller.updateProduct status', async () => {
    await productsController.updateProduct(req, res, next);
    expect(res.status.calledWith(422)).to.be.equal(true);
  });
});

describe('Verify queryProductByName sucess', () => {
  const req = {};
  const res = {};
  let next = {};

  before(async () => {
    req.query = 'Hammer';

    next = sinon.stub().returns();
    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns();

    sinon.stub(productsService, 'queryProducts').resolves([{
      id: 1,
      name: 'Thors Hammer',
    }]);
  });

  after(async () => {
    productsService.queryProducts.restore();
  });

  it('verify the controller.queryProductByName status', async () => {
    await productsController.queryProductByName(req, res, next);
    expect(res.status.calledWith(200)).to.be.equal(true);
  });
});
