const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'fabric pride type dutch advice margin faculty verb crew square income pattern',
    'https://rinkeby.infura.io/v3/6f64fb9565f54b8697b04c6c89077711'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
  
    console.log('Attempting to deploy from account', accounts[0]);
        
    const result = await new web3.eth.Contract(
        JSON.parse(compiledFactory.interface)
        )
      .deploy({ data: '0x' + compiledFactory.bytecode })
      .send({ /*gas: '1000000',*/ from: accounts[0] });
  
    return;
};

deploy();


