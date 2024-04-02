import ErrorRepository from './../map';

test('check', () => {
  const res = 'no more unit';
  const map = new ErrorRepository();
  map.add(999, 'no more unit');
  expect(map.translate(999)).toEqual(res);
});
