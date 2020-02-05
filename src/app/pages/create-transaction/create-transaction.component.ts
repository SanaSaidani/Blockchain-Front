import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { Transaction} from 'src/Blockchain/transaction.js';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {

  public tx;
  public walletKey;

  constructor(private blockchainService : BlockchainService) { 
    this.walletKey = blockchainService.walletKeys[0];
  }

  ngOnInit() {
    this.tx = new Transaction();
  }

  createTransaction()
  {
    this.tx.fromAddress = this.walletKey.publicKey;
    this.tx.signTransaction(this.walletKey.keyObj);
    this.blockchainService.addTransaction(this.tx);

    this.tx = new Transaction();
  }

}
