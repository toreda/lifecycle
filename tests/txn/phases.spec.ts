import {generatePhaseTests} from '../_data/lifecycle/tests';
import {TxnPhase} from '../../src/txn/phase';
import {txnPhases} from '../../src/txn/phases';
import {SampleTxn} from '../_data/sample/txn';
import {txnPhase} from '../../src/txn/phase';

const instance = new SampleTxn();

generatePhaseTests<TxnPhase, SampleTxn>('Txn', instance, txnPhases, txnPhase);
