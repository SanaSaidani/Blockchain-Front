import { Injectable } from '@angular/core';
import { Blockchain} from 'src/Blockchain/blockchain.js';

import { ec } from 'elliptic';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  public blockchainInsatance = new Blockchain();
  public walletKeys = [];

  constructor() 
  { 
    this.blockchainInsatance.minePendingTransactions('mine');
    this.generateWalletKeys();
  }

  getBlocks() 
  {
    return this.blockchainInsatance.chain;
  }

  addTransaction(tx)
  {
    this.blockchainInsatance.addTransaction(tx);
  }

  getPendingTransactions()
  {
    return this.blockchainInsatance.pendingTransactions;
  }

  minePendingTransactions()
  {
    this.blockchainInsatance.minePendingTransactions(
      this.walletKeys[0].publicKey
    );
  }
  private generateWalletKeys() 
  {
    
    const EC = new ec('secp256k1');
    const key = EC.genKeyPair();

    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex')
    });

  }
  
}
