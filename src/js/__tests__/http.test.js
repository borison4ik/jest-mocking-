import fetchData from '../components/http';

describe('fetchData function:', () => {
  test.each(['url', 1, true, null, { url: 'http://localhost' }])('always return Err', () => {
    expect(() => {
      fetchData('url');
    }).toThrow('Mock this!');
  });
});
