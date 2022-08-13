const { expect } = require('chai');
const {
  describe, it, before, after,
} = require('mocha');
const sinon = require('sinon');
const { productsModel } = require('../../models');
const { productsService } = require('../../services');

describe('Verify allProducts', () => {
  before(async () => {
    const result = [{ product: 1 }, { product: 2 }];
    sinon.stub(productsModel, 'allProducts').resolves(result);
  });

  after(async () => {
    productsModel.allProducts.restore();
  });

  it('Returns an array of products', async () => {
    const response = await productsService.allProducts();
    expect(response).to.be.an('array');
  });
});

describe('Verify productById success', () => {
  before(async () => {
    const result = [{
      id: 1,
      name: 'Martelo de Thor',
    }];

    sinon.stub(productsModel, 'productById').resolves(result);
  });

  after(async () => {
    productsModel.productById.restore();
  });
  it('Returns an object of a products', async () => {
    const response = await productsService.productById(1);
    expect(response).to.be.an('object');
  });
});

describe('Verify productById fail', () => {
  before(async () => {
    const result = [];

    sinon.stub(productsModel, 'productById').resolves(result);
  });

  after(async () => {
    productsModel.productById.restore();
  });
  it('Returns an object with the error code', async () => {
    const response = await productsService.productById(4);
    expect(response).has.property('code');
  });
});

describe('Verify postProduct success', () => {
  before(async () => {
    const result = { id: 4, name: 'metal arm' };

    sinon.stub(productsModel, 'postProduct').resolves(result);
  });

  after(async () => {
    productsModel.postProduct.restore();
  });

  it('Returns an array of products', async () => {
    const response = await productsService.postProduct('metal arm');
    expect(response).to.be.an('object');
  });

  it('Returns an object with the error code(400) of products', async () => {
    const response = await productsService.postProduct();
    expect(response).to.have.property('code');
  });

  it('Returns an object with the error code(422) of products', async () => {
    const response = await productsService.postProduct('abc');
    expect(response).to.have.property('code');
  });
});

describe('Verify deleteProduct success', async () => {
  before(async () => {
    const result = { code: '204' };

    sinon.stub(productsModel, 'deleteProduct').resolves(result);
  });

  after(async () => {
    productsModel.deleteProduct.restore();
  });
  it('Returns an object with the code of success', async () => {
    const response = await productsService.deleteProduct(1);
    expect(response).to.have.property('code');
  });
});

describe('Verify deleteProduct fail', async () => {
  before(async () => {
    const result = { code: '404' };
    sinon.stub(productsModel, 'deleteProduct').resolves(result);
  });

  after(async () => {
    productsModel.deleteProduct.restore();
  });
  it('Returns an object with the error code(422) of products', async () => {
    const response = await productsService.deleteProduct(8);
    expect(response).to.have.property('code');
  });
});

describe('Verifying name and success on putProduct', async () => {
  before(async () => {
    const result = { id: 1, name: 'Thors Hammer' };
    sinon.stub(productsModel, 'putProduct').resolves(result);
  });

  after(async () => {
    productsModel.putProduct.restore();
  });

  it('Verify missing name', async () => {
    const response = await productsService.putProduct();
    expect(response).to.have.property('code');
  });

  it('Verify name shorter than 5 characteres ', async () => {
    const response = await productsService.putProduct(1, 'abc');
    expect(response).to.have.property('code');
  });

  it('Verify correct output', async () => {
    const response = await productsService.putProduct(1, 'Thors Cape');
    expect(response).to.be.an('object');
  });
});

describe('Verify product not found on put', async () => {
  before(async () => {
    const result = {};
    sinon.stub(productsModel, 'putProduct').resolves(result);
  });

  after(async () => {
    productsModel.putProduct.restore();
  });

  it('Returns an object with the error code(404) of products', async () => {
    const response = await productsService.putProduct(8, 'abcdefg');
    expect(response).to.have.property('code');
  });
});

describe('Verify queryProducts', async () => {
  before(async () => {
    const result = [{}];
    sinon.stub(productsModel, 'queryProducts').resolves(result);
  });

  after(async () => {
    productsModel.queryProducts.restore();
  });
  it('Returns an array of products', async () => {
    const response = await productsService.queryProducts('Hammer');
    expect(response).to.be.an('array');
  });
});
