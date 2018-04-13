import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import PaymentForm from './util/PaymentForm';
import {AccountDetailInfo, PaymentInfo} from '../../models';
import {TransactionService} from '../../services';

@Component({
  selector: 'wed-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  @Output() paymentExecuted = new EventEmitter<PaymentInfo>();

  public paymentForm: PaymentForm = new PaymentForm();
  // could be probably optimized?
  public accountDetail: AccountDetailInfo = new AccountDetailInfo();
  public targetAccountDetail: AccountDetailInfo;

  constructor(private transactionService: TransactionService) {
    this.getAccountDetails();
  }

  ngOnInit() {
  }

  doPay(paymentForm: PaymentForm) {
    if (paymentForm && paymentForm.valid) {
      this.transactionService.transfer(PaymentInfo.fromDto(paymentForm.value)).subscribe((response) => {
        if (response) {
          this.getAccountDetails();
          this.transactionService.change.emit();
          this.paymentExecuted.emit(PaymentInfo.fromDto(response));
        }
      });
    } else {
      console.log('Form is not valid');
      console.log(paymentForm);
    }
  }

  onTargetAccountChange(accountNr: number) {
    this.transactionService.getAccount(accountNr).subscribe((response) => {
      this.targetAccountDetail = response;
    });
  }

  public getAccountDetails() {
    this.transactionService.getAccountDetails().subscribe((response) => {
      if (response) {
        this.accountDetail = response;
      }
    });
  }
}
