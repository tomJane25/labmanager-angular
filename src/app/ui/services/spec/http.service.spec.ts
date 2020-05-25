import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpService } from '../http.service';
import { Entity } from '../../models';

class MockData extends Entity {
  name: string;
}

describe('HttpService', () => {
  let service: HttpService;
  let httpTestingController: HttpTestingController;
  const mockUrl = '/test';
  const mockData: MockData = {name: 'test data'};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make GET request', () => {
    const mockDataArray: MockData[] = [{name: 'test data'}];

    service.get<MockData>(mockUrl).subscribe(data =>
      expect(data).toEqual(mockDataArray)
    );

    const req = httpTestingController.expectOne(mockUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockDataArray);
  });

  it('should make POST request', () => {
    service.post<MockData>(mockUrl, mockData).subscribe(data =>
      expect(data).toEqual(mockData)
    );

    const req = httpTestingController.expectOne(mockUrl);
    expect(req.request.method).toEqual('POST');
    req.flush(mockData);
  });

  it('should make PUT request', () => {
    service.put<MockData>(mockUrl, mockData).subscribe(data =>
      expect(data).toEqual(mockData)
    );

    const req = httpTestingController.expectOne(mockUrl);
    expect(req.request.method).toEqual('PUT');
    req.flush(mockData);
  });

  it('should make DELETE request', () => {
    service.delete<MockData>(mockUrl).subscribe(data =>
      expect(data).toEqual({})
    );

    const req = httpTestingController.expectOne(mockUrl);
    expect(req.request.method).toEqual('DELETE');
    req.flush({});
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
