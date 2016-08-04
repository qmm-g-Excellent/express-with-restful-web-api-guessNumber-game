const Controller = require('../../controllers/item-controller');

describe('ItemController', () => {

  let controller;

  beforeEach(() => {
    controller = new Controller();
  });

  it('#index', () => {
    const res = jasmine.createSpyObj('res', ['send']);
    controller.index({}, res);
    expect(res.send).toHaveBeenCalledWith('Success!');
  });

  it('#show', () => {
    const res = jasmine.createSpyObj('res', ['send']);
    controller.show({}, res);
    expect(res.send).toHaveBeenCalledWith('Success!');
  });

  it('#create', () => {
    const res = jasmine.createSpyObj('res', ['send']);
    controller.create({}, res);
    expect(res.send).toHaveBeenCalledWith('Success!');
  });

  it('#update', () => {
    const res = jasmine.createSpyObj('res', ['send']);
    controller.update({}, res);
    expect(res.send).toHaveBeenCalledWith('Success!');
  });

  it('#destroy', () => {
    const res = jasmine.createSpyObj('res', ['send']);
    controller.destroy({}, res);
    expect(res.send).toHaveBeenCalledWith('Success!');
  });
});
