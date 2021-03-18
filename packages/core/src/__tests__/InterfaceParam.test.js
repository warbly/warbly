import InterfaceParam from '../InterfaceParam';

describe('testing interface parameter factory function', () => {
  test('has prototype of constructor', () => {
    const fooParam = new InterfaceParam();
    expect(Object.getPrototypeOf(fooParam)).toEqual(InterfaceParam.prototype);
  });

  test('has defaultValue property', () => {
    expect(new InterfaceParam({ defaultValue: 'DEFAULT' })).toHaveProperty(
      'defaultValue',
      'DEFAULT'
    );
  });

  test('has value property', () => {
    expect(new InterfaceParam({ value: 'VALUE' })).toHaveProperty(
      'value',
      'VALUE'
    );
  });

  test('has default property if no value argument', () => {
    expect(new InterfaceParam({ defaultValue: 'DEFAULT' })).toHaveProperty(
      'value',
      'DEFAULT'
    );
  });
});
