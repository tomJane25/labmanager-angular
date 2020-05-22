import { SpinnerService } from '../spinner.service';

describe('SpinnerService', () => {
  let service: SpinnerService;

  beforeEach(() => {
    service = new SpinnerService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('setIsLoading() should set next value to isLoading$', () => {
    let result = null;
    service.isLoading$.subscribe(value => result = value);

    service.setIsLoading(true);
    expect(result).toBeTruthy();

    service.setIsLoading(false);
    expect(result).toBeFalse();
  });
});
