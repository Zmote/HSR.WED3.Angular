import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {QueryInfo, TransactionInfo} from '../../models';
import {TransactionService} from '../../services';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'wed-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit, AfterViewInit {

  displayedColumns = ['date', 'from', 'target', 'amount', 'total'];
  dataSource: MatTableDataSource<TransactionInfo> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() title = 'Transactions';
  @Input() withFiltering = false;
  @Input() withRedirectButton = false;

  constructor(private transactionService: TransactionService, private route: ActivatedRoute) {
    this.getTransactions();
  }

  ngOnInit() {
    this.route.data.subscribe((value) => {
      if (value.withFiltering) {
        this.withFiltering = value.withFiltering;
      }
      if (value.withRedirectButton) {
        this.withRedirectButton = value.withRedirectButton;
      }
    });
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
