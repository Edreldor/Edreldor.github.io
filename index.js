const ADDRESS = "0xd97d4E6F7735fd0D02fBae7221360B1A6FA70bf4";
const ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"FRIG_PROVENANCE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"FrigNames","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FrigPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FrigReserve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LICENSE_TEXT","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_Frig","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TenFrigPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ThreeFrigPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipPreSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintEgg","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintTenEggs","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintThreeEggs","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"preSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_reserveAmount","type":"uint256"}],"name":"reserveFrig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"tokenLicense","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"payable","type":"function"}];



const ethereumButton = document.getElementById('enableEthereumButton');
const ethereumButton_text = document.getElementById('enableEthereumButton_text');
const showAccount = document.getElementById('showAccount');
const mint1Button = document.getElementById('mint1Button');
const mint3Button = document.getElementById('mint3Button');
const mint10Button = document.getElementById('mint10Button');
const footerContract = document.getElementById("implementationContract");
const remainingEggs_text = document.getElementById("remainingEggs_text");




// Define the useState fonction to replace React:

const useState = (defaultValue) => {
	let value = defaultValue;
	const getValue = () => value;
	const setValue = newValue => value = newValue;
	return [getValue, setValue];
}


// Graphic update for the Connect button

async function updateButtonConnected(walletAddress) {
	ethereumButton.style.transition = "ease .5s";
    ethereumButton.style.backgroundColor = "#38D6B9";
    ethereumButton_text.innerHTML = "Connected";
	showAccount.innerHTML = walletAddress;
}

async function updateButtonDisconnect() {
	ethereumButton.style.transition = "ease .5s";
	ethereumButton.style.backgroundColor = "#111111";
	ethereumButton_text.innerHTML = "Connect";
	showAccount.innerHTML = "";
}

footerContract.innerHTML = ADDRESS;

// keep remaining eggs number up to date

async function updateRemainingEgs(remaining) {
	remainingEggs_text.innerHTML = remaining;
}


// MAIN CODE

const [signedIn, setSignedIn] = useState(false);

const [walletAddress, setWalletAddress] = useState(null);

// FOR MINTING


const [eggContract, setEggContract] = useState(null);

// INFO FROM SMART Contract

const [totalSupply, setTotalSupply] = useState(0);

const [saleStarted, setSaleStarted] = useState(false);

const [preSale, setpreSale] = useState(false);

const [eggPrice, setEggPrice] = useState(0);

const [eggPrice3, setEggPrice3] = useState(0);

const [eggPrice10, setEggPrice10] = useState(0);

const [maxEggs, setMaxEggs] = useState(9999);
window.web3 = new Web3(window.ethereum);
callContractData()
//updateRemainingEgs("Connect to see");

async function signIn() {
	if (typeof window.web3 !== 'undefined') {
		// Use existing gateway
		//window.web3 = new Web3(window.ethereum);

		window.ethereum.enable()
			.then(function (accounts) {
				window.web3.eth.net.getNetworkType()
					// checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet)
					.then((network) => { console.log(network); if (network != "rinkeby") { alert("You are on " + network + " network. Change network to rinkeby or you won't be able to do anything here") } });
				let wallet = accounts[0];
				setWalletAddress(wallet);
				setSignedIn(true);
				callContractData(wallet);
				updateButtonConnected(wallet);

			})
			.catch(function (error) {
				// Handle error. Likely the user rejected the login
				console.error(error);
			})

	} else {
		alert("No Ethereum interface injected into browser. Read-only access");
	}

	
}

async function signOut() {
	setSignedIn(false);
	updateButtonDisconnect();
}

async function callContractData() {
	// let balance = await web3.eth.getBalance(wallet);
	// setWalletBalance(balance)
	const eggContract = new window.web3.eth.Contract(ABI, ADDRESS);
	setEggContract(eggContract);

	const salebool = await eggContract.methods.saleIsActive().call();
	// console.log("saleisActive" , salebool)
	setSaleStarted(salebool);

	const preSalebool = await eggContract.methods.preSale().call();
	// console.log("preSale" , preSalebool)
	setpreSale(preSalebool);

	const totalSupply = await eggContract.methods.totalSupply().call();
	setTotalSupply(totalSupply);

	const eggPrice = await eggContract.methods.FrigPrice().call();
	setEggPrice(eggPrice);

	const eggPrice3 = await eggContract.methods.ThreeFrigPrice().call();
	setEggPrice3(eggPrice3);

	const eggPrice10 = await eggContract.methods.TenFrigPrice().call();
	setEggPrice10(eggPrice10);

	const maxEggs = await eggContract.methods.MAX_Frig().call();
	setMaxEggs(maxEggs);
	const remaining = maxEggs - totalSupply;
	updateRemainingEgs(remaining);

}

async function mintEgg1() {
	if (eggContract()) {

		console.log(eggContract());
		const price = Number(eggPrice());
		console.log(price);

		const gasAmount = await eggContract().methods.mintEgg().estimateGas({ from: walletAddress(), value: price });
		console.log("estimated gas", gasAmount);

		console.log({ from: walletAddress(), value: price });

		eggContract().methods
			.mintEgg()
			.send({ from: walletAddress(), value: price, gas: String(gasAmount) })
			.on('transactionHash', function (hash) {
				console.log("transactionHash", hash)
			});

	} else {
		console.log("Wallet not connected");
	}

};

async function mintEgg3() {
	if (eggContract()) {

		const price = Number(eggPrice3());

		const gasAmount = await eggContract().methods.mintThreeEggs().estimateGas({ from: walletAddress(), value: price });
		console.log("estimated gas", gasAmount);

		console.log({ from: walletAddress(), value: price });

		eggContract().methods
			.mintThreeEggs()
			.send({ from: walletAddress(), value: price, gas: String(gasAmount) })
			.on('transactionHash', function (hash) {
				console.log("transactionHash", hash)
			});

	} else {
		console.log("Wallet not connected");
	}

};

async function mintEgg10() {
	if (eggContract()) {

		const price = Number(eggPrice10());

		const gasAmount = await eggContract().methods.mintTenEggs().estimateGas({ from: walletAddress(), value: price });
		console.log("estimated gas", gasAmount);

		console.log({ from: walletAddress(), value: price });

		eggContract().methods
			.mintTenEggs()
			.send({ from: walletAddress(), value: price, gas: String(gasAmount) })
			.on('transactionHash', function (hash) {
				console.log("transactionHash", hash)
			});

	} else {
		console.log("Wallet not connected");
	}

};


ethereumButton.addEventListener('click', () => {
	if (signedIn()) {
		signOut();
	} else {
		signIn();
	}
});

mint1Button.addEventListener('click', () => {
	if (signedIn()) {
		mintEgg1();
	}
	else {
		alert("No Wallet Connected");
    }
});

mint3Button.addEventListener('click', () => {
	if (signedIn()) {
		mintEgg3();
	}
	else {
		alert("No Wallet Connected");
	}
});

mint10Button.addEventListener('click', () => {
	if (signedIn()) {
		mintEgg10();
	}
	else {
		alert("No Wallet Connected");
	}
});