import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {QueryInfo, TransactionInfo} from '../../models';
import {TransactionService} from '../../services';
import {ActivatedRoute} from '@angular/router';
import Moment from 'moment';
import moment = require('moment');

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
  @Input() transactionsCount = 3;
  @Input() pageSize = 3;

  selectedMonth = '0';
  selectedYear = '0';

  constructor(private transactionService: TransactionService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((value) => {
      this.initWithRouteParams(value);
    });
    this.transactionService.change.subscribe(() => {
      this.getTransactions();
    });
    this.getTransactions();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter() {
    // a combined term to trigger the filter, needs to be at least 3 characters long to be triggered
    this.dataSource.filter = '000' + this.selectedMonth + this.selectedYear;
    this.dataSource.filterPredicate = ((data, filter) => {
      const year = moment(data.date).format('YYYY');
      const month = moment(data.date).format('MM');
      return year === this.selectedYear && month === this.selectedMonth;
    });
  }

  getTransactions() {
    this.transactionService.getTransactions(new QueryInfo(this.transactionsCount)).subscribe((response) => {
      if (response) {
        this.dataSource.data = response;
      }
    });
  }

  initWithRouteParams(value) {
    if (value.withFiltering) {
      this.withFiltering = value.withFiltering;
    }
    if (value.withRedirectButton) {
      this.withRedirectButton = value.withRedirectButton;
    }
    if (value.transactionsCount) {
      this.transactionsCount = value.transactionsCount;
    }
    if (value.pageSize) {
      this.pageSize = value.pageSize;
    }
    if (value.title) {
      this.title = value.title;
    }
  }

  getYears() {
    const years = [];
    for (let i = 2018; i > 2000; i--) {
      years.push(i);
    }
    return years;
  }

  getMonths() {
    const months = [];
    for (let i = 1; i < 13; i++) {
      months.push(i);
    }
    return months;
  }

  getMonthName(number: string) {
    return moment(number, 'MM').format('MMMM');
  }

  formatDate(date: string) {
    return moment(date).format('DD MMMM, YYYY [at] hh:mm');
  }
}
