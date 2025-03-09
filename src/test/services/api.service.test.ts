import { ApiService } from '@/services/api.service';
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock do Axios
vi.mock('axios');
const mocks = vi.hoisted(() => ({
  get: vi.fn(),
}));

vi.mock('axios', async (importActual) => {
  const actual = await importActual<typeof import('axios')>();

  const mockAxios = {
    default: {
      ...actual.default,
      create: vi.fn(() => ({
        ...actual.default.create(),
        get: mocks.get,
      })),
    },
  };

  return mockAxios;
});

describe('ApiService', () => {
  let apiService: ApiService;

  beforeEach(() => {
    apiService = new ApiService();
  });

  it('deve fazer uma requisição GET corretamente', async () => {
    mocks.get.mockResolvedValueOnce({
      data: [ { id: 1, name: 'John Doe' } ],
    });

    const data = await apiService.get('/');

    expect(mocks.get).toHaveBeenCalled();
    expect(data).toEqual([ { id: 1, name: 'John Doe' } ]);
  });
});
