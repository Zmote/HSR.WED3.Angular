import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {TransactionService} from '../../services/transaction.service';
import {QueryInfo} from '../../models/query-info';
import {TransactionInfo} from '../../models/transaction-info';

@Component({
  selector: 'wed-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit, AfterViewInit {
  private ELEMENT_DATA: TransactionInfo[] = [];

  displayedColumns = ['date', 'from', 'target', 'amount', 'total'];
  protected dataSource: MatTableDataSource<TransactionInfo> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // Is there a way to do it by only providing the property, like matButton, without attributes?
  @Input() title = 'Transactions';
  @Input() withFiltering = true;
  @Input() withRedirectButton = false;

  constructor(private transactionService: TransactionService) {
    this.getTransactions();
  }

  ngOnInit() {
    this.transactionService.change.subscribe(() => {
      this.getTransactions();
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Dummy filter
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getTransactions() {
    this.transactionService.getTransactions(new QueryInfo()).subscribe((response) => {
      if (response) {
        this.dataSource.data = response;
      }
    });
  }

}
