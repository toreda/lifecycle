import {generatePhaseTests} from '../_data/lifecycle/tests';
import {TxnPhase, txnPhases} from '../../src';
import {SampleTxn} from '../_data/sample/txn';
import {txnPhase} from '../../src/txn/phase';

const instance = new SampleTxn();

generatePhaseTests<TxnPhase, SampleTxn>('Txn', instance, txnPhases, txnPhase);
