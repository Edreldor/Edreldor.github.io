const ADDRESS = "0xdF67d6024D92c2484101880CaFa3aEe15E90D61E";
const ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"FRIG_PROVENANCE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FrigFreeMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"FrigNames","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FrigPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FrigReserve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LICENSE_TEXT","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_Frig","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MaxEggPerAccount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TenFrigPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ThreeFrigPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipPreSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintEgg","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintFreeEgg","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintTenEggs","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintThreeEggs","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"preSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_reserveAmount","type":"uint256"}],"name":"reserveFrig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"tokenLicense","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"payable","type":"function"}]


const ethereumButton = document.getElementById('enableEthereumButton');
const ethereumButton_text = document.getElementById('enableEthereumButton_text');
const showAccount = document.getElementById('showAccount');

const mintSection = document.getElementById("mintSection");

const mint1Button = document.getElementById('mint1Button');
const mint3Button = document.getElementById('mint3Button');
const mint10Button = document.getElementById('mint10Button');

const mint1TextPrice = document.getElementById('mint1TextPrice');
const mint3TextPrice = document.getElementById('mint3TextPrice');
const mint10TextPrice = document.getElementById('mint10TextPrice');

const footerContract = document.getElementById("implementationContract");
const remainingEggs_text = document.getElementById("remainingEggs_text");

const freeMintPopUp = document.getElementById("freeMintPopUp");
const popUpContinueTxButton = document.getElementById("popUpContinueTxButton");
const popUpFreeMintButton = document.getElementById("popUpFreeMintButton");
const remainingFreeEggs = document.getElementById("remainingFreeEggs");
const freeMintPopUpClose = document.getElementById("freeMintPopUpClose");

const overlay = document.getElementById("overlay");
const mainContent = document.getElementById("main");

const form = document.getElementById('form');
const passwordPopUp = document.getElementById("passwordPopUp");
const passwordPopUpClose = document.getElementById("passwordPopUpClose");
const enterPassword = document.getElementById("enterPassword");
const submitPassword = document.getElementById('submitPassword');
const incorrectPassword = document.getElementById('incorrectPassword');

const loading = document.getElementById("loading");

const presalePassword = "ax78ebn90";



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

// keep remaining eggs number up to date

async function updatePageInfo(callContractBool) {
	if (callContractBool) {callContractData();}

	remainingEggs_text.innerHTML = remainingEggs();
	remainingFreeEggs.innerHTML = freeRemaining();
	mint1TextPrice.innerHTML = String(eggPrice()/1000000000000000000)+" Eth";
	mint3TextPrice.innerHTML = String(eggPrice3()/1000000000000000000)+" Eth";
	mint10TextPrice.innerHTML = String(eggPrice10()/1000000000000000000)+" Eth";
}


// MAIN CODE

const [signedIn, setSignedIn] = useState(false);

const [walletAddress, setWalletAddress] = useState(null);

// FOR MINTING


const [eggContract, setEggContract] = useState(null);

// INFO FROM SMART Contract

const [totalSupply, setTotalSupply] = useState(0);

const [remainingEggs, setRemainingEggs] = useState(0);

const [freeRemaining, setFreeRemaining] = useState(0);

const [frigReserve, setFrigReserve] = useState(0)

const [saleStarted, setSaleStarted] = useState(false);

const [preSale, setpreSale] = useState(false);

const [eggPrice, setEggPrice] = useState(0);

const [eggPrice3, setEggPrice3] = useState(0);

const [eggPrice10, setEggPrice10] = useState(0);

const [maxEggs, setMaxEggs] = useState(3000);

const [currentTX, setCurrentTX] = useState(null);


window.web3 = new Web3(window.ethereum);
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

		mintSection.style.display = "flex";
		footerContract.innerHTML = ADDRESS;

	} else {
		alert("No Ethereum interface injected into browser. Read-only access");
	}

	
}

async function signOut() {
	setSignedIn(false);
	updateButtonDisconnect();
	mintSection.style.display = "none";
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

	const frigReserve = await eggContract.methods.FrigReserve().call();
	setFrigReserve(frigReserve);

	const frigFreeMint = await eggContract.methods.FrigFreeMint().call();
	setFreeRemaining(frigFreeMint);

	const remaining = maxEggs - totalSupply - frigReserve;
	setRemainingEggs(remaining);

	updatePageInfo(false);
}

async function mintEgg1() {
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
	updatePageInfo(true);

};

async function mintEgg3() {

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
	updatePageInfo(true);

};

async function mintEgg10() {

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
	updatePageInfo(true);
};

async function mintEggFree() {
	const gasAmount = await eggContract().methods.mintFreeEgg().estimateGas({ from: walletAddress(), value: 0 });
	console.log("estimated gas", gasAmount);

	console.log({ from: walletAddress(), value: 0 });

	eggContract().methods
		.mintFreeEgg()
		.send({ from: walletAddress(), value: 0, gas: String(gasAmount) })
		.on('transactionHash', function (hash) {
			console.log("transactionHash", hash)
		});
}

async function mint(n) {
	if (eggContract()) {
		openPopUp(loading);
			try {
				await callContractData();
			}
			catch(err) {
				closePopUp(loading);
				alert("Be sure to connect to Mainnet");
				return;	
			}
		if(saleStarted()) {
			console.log(eggContract());

			const frigFreeMint = await eggContract().methods.FrigFreeMint().call();
			setFreeRemaining(frigFreeMint);
			remainingFreeEggs.innerHTML = String(frigFreeMint);
			const myTokens = await eggContract().methods.tokensOfOwner(walletAddress()).call();

			console.log("Number of available free Eggs : ", frigFreeMint);
			console.log("My tokens : ", myTokens);

			if(frigFreeMint > 0 && myTokens.length < 1) {
				console.log("you can get a free NFT");
				setCurrentTX(n);
				openPopUp(freeMintPopUp);
				closeLoading();
			}
			else {
				closePopUp(loading);
				if (n==1) {mintEgg1();}
				else {
					if (n==3) {mintEgg3();}
					else {
						if (n==10) {mintEgg10();}
					}
				}
			}
		}

		else {
			closePopUp(loading);
			alert("Sales are Off");
			console.log("Sales are Off");
		}

	}
	else {
		console.log("Wallet not connected");
	}

}

function logSubmit(event) {
	console.log(enterPassword.value);
	if (enterPassword.value == presalePassword) {
		signIn();
		closePopUp(passwordPopUp);
		incorrectPassword.innerHTML = "";
		enterPassword.value = "";
	}
	else {
		incorrectPassword.innerHTML = "Incorrect password";
	}
	event.preventDefault();
}

function openPopUp(target) {
	overlay.style.display = "block";
	target.style.display = "flex";
	mainContent.classList.remove("blur-out");
	mainContent.classList.add("blur-in");
}

function closePopUp(target) {
	overlay.style.display = "none";
	target.style.display = "none";
	incorrectPassword.innerHTML = "";
	enterPassword.value = "";
	mainContent.classList.remove("blur-in");
	mainContent.classList.add("blur-out");
}

function openLoading() {
	loading.style.display = "flex";
}

function closeLoading() {
	loading.style.display = "none";
}


ethereumButton.addEventListener('click', async () => {
	if (signedIn()) {
		signOut();
	} else {
		openPopUp(loading);
			try {
				await callContractData();
			}
			catch(err) {
				closePopUp(loading);
				alert("Be sure to connect to Mainnet");		
			}
		if (saleStarted()) {
			if (preSale()) {
				openPopUp(passwordPopUp);
				closeLoading();
			}
			else {
				signIn();
				closePopUp(loading);
			}
		}
		else {
			closePopUp(loading);
			alert("Sales haven't started yet or you're not connected to Mainnet");
		}
	}
	
});

mint1Button.addEventListener('click', () => {
	if (signedIn()) {
		mint(1);
	}
	else {
		alert("No Wallet Connected");
    }
});

mint3Button.addEventListener('click', () => {
	if (signedIn()) {
		mint(3);
	}
	else {
		alert("No Wallet Connected");
	}
});

mint10Button.addEventListener('click', () => {
	if (signedIn()) {
		mint(10);
	}
	else {
		alert("No Wallet Connected");
	}
});

popUpContinueTxButton.addEventListener('click', () => {
	if (signedIn()) {
		if (currentTX()==1) {mintEgg1();}
				else {
					if (currentTX()==3) {mintEgg3();}
					else {
						if (currentTX()==10) {mintEgg10();}
					}
				}
		closePopUp(freeMintPopUp);
	}
	else {
		alert("No Wallet Connected");
	}
});

popUpFreeMintButton.addEventListener('click', () => {
	if (signedIn()) {
		mintEggFree();
		closePopUp(freeMintPopUp);
	}
	else {
		alert("No Wallet Connected");
	}
});

freeMintPopUpClose.addEventListener('click', () => {
	closePopUp(freeMintPopUp);
});

passwordPopUpClose.addEventListener('click', () => {
	closePopUp(passwordPopUp);
})

overlay.addEventListener('click', ({target}) => {
	closePopUp(freeMintPopUp);
	closePopUp(passwordPopUp);
	closePopUp(loading);
})

form.addEventListener('submit', logSubmit);