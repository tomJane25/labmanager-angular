import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ok } from 'assert';

import { ClientService } from '../client.service';
import { Client } from '../../models';

const testClient: Client = {
  id: '1',
  name: 'test',
  address: 'test',
  email: 'test@mail.com'
};

xdescribe('ClientService', () => {
  let service: ClientService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClientService]
    });
    service = TestBed.inject(ClientService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should get clients', () => {
    const mockClientsResponse: Client[] = [
      {
        id: '1',
        name: 'test',
        address: 'test',
        email: 'test@mail.com'
      }
    ];
    service.getClients().subscribe(response => {
      expect(response).toBe(mockClientsResponse);
    });
    const request = httpTestingController.expectOne(
      'https://my-json-server.typicode.com/tomJane25/labmanager_JSON/clients');
    expect(request.request.method).toEqual('GET');
    request.flush(mockClientsResponse);
  });

  it('should add client', () => {
    service.addClient(testClient).subscribe(response => {
      expect(response).toEqual(testClient);
    });
    const request = httpTestingController.expectOne(
      'https://my-json-server.typicode.com/tomJane25/labmanager_JSON/clients');
    expect(request.request.method).toEqual('POST');
    expect(request.request.body).toEqual(testClient);
    request.flush(testClient);
  });

  it('should update client', () => {
    service.updateClient(testClient).subscribe(response => {
      expect(response).toEqual(testClient);
    });
    const request = httpTestingController.expectOne(
      `https://my-json-server.typicode.com/tomJane25/labmanager_JSON/clients/${testClient.id}`);
    expect(request.request.method).toEqual('PUT');
    expect(request.request.body).toEqual(testClient);
    request.flush(testClient);
  });

  it('should delete client', () => {
    service.deleteClient(testClient).subscribe(response => ok(true));
    const request = httpTestingController.expectOne(
      `https://my-json-server.typicode.com/tomJane25/labmanager_JSON/clients/${testClient.id}`);
    expect(request.request.method).toEqual('DELETE');
    request.flush(null, {status: 200, statusText: 'OK'});
  });

  afterEach(() => httpTestingController.verify());
});
