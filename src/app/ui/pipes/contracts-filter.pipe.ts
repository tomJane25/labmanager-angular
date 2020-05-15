import { Pipe, PipeTransform } from '@angular/core';
import { Contract, ContractsSearchParams } from '../models';

@Pipe({
  name: 'contractsFilter'
})
export class ContractsFilterPipe implements PipeTransform {
  transform(contracts: Contract[], searchParams: ContractsSearchParams): Contract[] {
    if (!searchParams){
      return contracts;
    }
    if (searchParams.clientId) {
      if (searchParams.contractStatus) {
        return this.filterByClientIdAndStatus(contracts, searchParams);
      }
      if (!searchParams.contractStatus) {
        return this.filterByClientId(contracts, searchParams.clientId);
      }
    }
    if (searchParams.contractStatus) {
      return this.filterByStatus(contracts, searchParams.contractStatus);
    }
    return contracts;
  }


  private filterByClientIdAndStatus(contracts, searchParams) {
    return contracts.filter(contract => {
      return contract.clientId === searchParams.clientId && contract.status === searchParams.contractStatus;
    });
  }

  private filterByClientId(contracts, clientId) {
    return contracts.filter(contract => {
      return contract.clientId === clientId;
    });
  }

  private filterByStatus(contracts, status) {
    return contracts.filter(contract => {
      return contract.status === status;
    });
  }
}
