import { addToCache, getCache, hasCache } from '../../utils/cache';

describe('Cache Suite', () => {
  it('should cache testing for 5 Minutes and return true', () => {
    addToCache('test', 'testing', 300);
  });
  it('should return boolean depends on existing item', () => {
    expect(hasCache('key')).toBeFalse();
  });
  it('should get from previous test testing', () => {
    expect(getCache('test')).toEqual('testing');
  });
});
