// -- 문제 -- 
// N개의 숫자를 주어준다.
// 이를 오름차순으로 정렬한다.

// 1. 왼쪽이 크면 true , 오른쪽이 크면 false
// 2. diff = true 일 경우, swap 
// 3. 3개의 배열이 들어왔을 때 오름차순

const assert = require("assert");
const Sort = require('./SortNum-Class');
const sort = new Sort();

describe('Sort', () => {
  describe('diff', () => {
    it('input 1 , 2 => output false', () => {
      assert.equal(false , sort.diff(1, 2));
    });
  })
});
describe('Sort', () => {
  describe('diff', () => {
    it('input 2 , 1 => output true', () => {
      assert.equal(true , sort.diff(2, 1));
    });
  })
});
describe('Sort', () => {
  describe('swap', () => {
    it('input [2, 1] => output [1, 2]', () => {
      assert.deepEqual([1,2] , sort.swap([2,1] , 0));
    });
  })
});
describe('Sort', () => {
  describe('swap', () => {
    it('input [3, 2] => output [2, 3]', () => {
      assert.deepEqual([2,3] , sort.swap([3,2] , 0));
    });
  })
});
describe('Sort', () => {
  describe('sort', () => {
    it('input [3, 2] => output [2, 3]', () => {
      assert.deepEqual([2,3] , sort.sort([3,2]));
    });
  })
});
describe('Sort', () => {
  describe('sort', () => {
    it('input [2, 3] => output [2, 3]', () => {
      assert.deepEqual([2,3] , sort.sort([2,3]));
    });
  })
});
describe('Sort', () => {
  describe('sort', () => {
    it('input [7, 4] => output [4, 7]', () => {
      assert.deepEqual([4,7] , sort.sort([7,4]));
    });
  })
});
describe('Sort', () => {
  describe('sort', () => {
    it('input [7,4,3] => output [3,4,7]', () => {
      assert.deepEqual([3,4,7] , sort.sort([7,4,3]));
    });
  })
});
describe('Sort', () => {
  describe('sort', () => {
    it('input [5,4,3,2,1] => output [1,2,3,4,5]', () => {
      assert.deepEqual([1,2,3,4,5] , sort.sort([5,4,3,2,1]));
    });
  })
});
describe('Sort', () => {
  describe('sort', () => {
    it('input [5,5,4,3,2,1] => output [1,2,3,4,5]', () => {
      assert.deepEqual([1,2,3,4,5] , sort.sort([5,5,4,3,2,1]));
    });
  })
});
