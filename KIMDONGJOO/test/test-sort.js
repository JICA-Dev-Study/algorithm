const assert = require('assert');
const Sort = require('../class/Sort');

// 1. diff methods (Duplicate)
// 2. swap methods

describe('Sort', () => {
  describe('diff methods', () => {
    it('input 1, 2 => output false', () => {
      assert.equal(false, Sort.diff(1, 2));
    });
  });
});

describe('Sort', () => {
  describe('diff methods', () => {
    it('input 2, 1 => output true', () => {
      assert.equal(true, Sort.diff(2, 1));
    });
  });
});

describe('Sort', () => {
  describe('swap methods', () => {
    it('input [2, 1], 0 => output [1, 2]', () => {
      let arr = [2, 1];
      assert.deepEqual([1, 2], Sort.swap(arr, 0));
    });
  });
});

describe('Sort', () => {
  describe('swap methods', () => {
    it('input [1, 3, 2], 1 => output [1, 3, 2]', () => {
      let arr = [1, 2, 3];
      assert.deepEqual([1, 3, 2], Sort.swap(arr, 1));
    });
  });
});

describe('Sort', () => {
  describe('swap methods', () => {
    it('input [1, 3, 2], 1 => output [1, 2, 3]', () => {
      let arr = [1, 3, 2];
      if(Sort.diff(arr, 1)) assert.deepEqual([1, 2, 3], Sort.swap(arr, 1));
      else assert.deepEqual([1, 3, 2], arr);
    });
  });
});

describe('Sort', () => {
  describe('sort methods', () => {
    it('input [1, 2] => output [2, 1]', () => {
      let arr = [2, 1];
      assert.deepEqual([1, 2], Sort.sort(arr));
    });
  });
});

describe('Sort', () => {
  describe('sort methods', () => {
    it('input [5, 4, 3] => output [3, 4, 5]', () => {
      let arr = [5, 4, 3];
      assert.deepEqual([3, 4, 5], Sort.sort(arr));
    });
  });
});

describe('Sort', () => {
  describe('sort methods', () => {
    it('input [5, 4, 3, 2, 1] => output [1, 2, 3, 4, 5]', () => {
      let arr = [5, 4, 3, 2, 1];
      assert.deepEqual([1, 2, 3, 4, 5], Sort.sort(arr));
    });
  });
});

describe('Sort', () => {
  describe('sort methods', () => {
    it('input [5, 5, 3, 2, 1] => output [1, 2, 3, 5]', () => {
      let arr = [5, 5, 3, 2, 1];
      assert.deepEqual([1, 2, 3, 5], Sort.sort(arr));
    });
  });
});

describe('Sort', () => {
  describe('sort methods', () => {
    it('input [5, 4, 5, 3, 5, 3, 1, 2] => output [1, 2, 3, 4, 5]', () => {
      let arr = [5, 4, 5, 3, 5, 3, 1, 2];
      assert.deepEqual([1, 2, 3, 4, 5], Sort.sort(arr));
    });
  });
});