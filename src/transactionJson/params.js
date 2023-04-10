import { accounts } from './accounts';
export const transactionParams = {
  'TransferContract': {
    to: accounts[0].base58,
    amount: 10e6,
    from: accounts[2].base58s
  },
  'TransferAssetContract': {},
  'ParticipateAssetIssueContract': {},
  'TriggerSmartContract': {},
  'FreezeBalanceContract': {},
  'UnfreezeBalanceContract': {},
  'WithdrawBalanceContract': {},
  'FreezeBalanceV2Contract': {},
  'UnfreezeBalanceV2Contract': {},
  'DelegateResourceContract': {},
  'UnDelegateResourceContract': {},
  'WithdrawExpireUnfreezeContract': {},
  'WitnessCreateContract': {},
  'VoteWitnessContract': {},
  'CreateSmartContract': {},
  'ClearABIContract': {},
  'UpdateBrokerageContract': {},
  'AssetIssueContract': {},
  'AccountCreateContract': {},
  'AccountUpdateContract': {},
  'SetAccountIdContract': {},
  'ProposalCreateContract': {},
  'ProposalDeleteContract': {},
  'ProposalApproveContract': {},
  'ExchangeCreateContract': {},
  'ExchangeInjectContract': {},
  'ExchangeWithdrawContract': {},
  'ExchangeTransactionContract': {},
  'UpdateSettingContract': {},
  'UpdateEnergyLimitContract': {},
  'AccountPermissionUpdateContract': {},
  'UpdateAssetContract': {}
};
