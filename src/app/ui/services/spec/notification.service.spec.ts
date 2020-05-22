import { NotificationService } from '../notification.service';
import { Notification } from '../../models';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    service = new NotificationService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('success() should set next value to notification$ with success type', () => {
    let result: Notification = null;
    service.notification$.subscribe(value => result = value);
    service.success('test text');

    expect(result.type).toBe('success');
    expect(result.text).toBe('test text');
  });

  it('warning() should set next value to notification$ with warning type', () => {
    let result: Notification = null;
    service.notification$.subscribe(value => result = value);
    service.warning('test text');

    expect(result.type).toBe('warning');
    expect(result.text).toBe('test text');
  });

  it('error() should set next value to notification$ with error type', () => {
    let result: Notification = null;
    service.notification$.subscribe(value => result = value);
    service.error('test text');

    expect(result.type).toBe('error');
    expect(result.text).toBe('test text');
  });
});
