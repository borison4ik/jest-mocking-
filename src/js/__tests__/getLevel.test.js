import fetchData from '../components/http';
import getLevel from '../components/getLevel';

jest.mock('../components/http');

describe('getLevel function:', () => {
  let responseSuccess;
  let responseError;

  beforeEach(() => {
    responseSuccess = {
      status: 'ok',
      level: 1,
    };
    responseError = {
      status: 'error',
    };
  });

  test('return level 1', () => {
    fetchData.mockReturnValue(responseSuccess);
    const level = getLevel(1);
    expect(level).toBe('Ваш текущий уровень: 1');
  });

  test('return level 1', () => {
    fetchData.mockReturnValue(responseError);
    const level = getLevel(1);
    expect(level).toBe('Информация об уровне временно недоступна');
  });
});
