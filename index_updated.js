//Create contract infos
const ADDRESS = "0x33b8adFdF4DDc3ee3c239D5E0cB511bb5fb647D4";
const ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"FrigDescription","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FrigFreeMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"FrigNames","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FrigPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FrigReserve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_Frig","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MaxEggPerAccount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TenFrigPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ThreeFrigPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"FrigginDescription","type":"string"}],"name":"changeDescription","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"FrigginName","type":"string"}],"name":"changeName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"flipPreSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintEgg","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintFreeEgg","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintTenEggs","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintThreeEggs","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"preSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_reserveAmount","type":"uint256"}],"name":"reserveFrig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"payable","type":"function"}];

// ------------------------------------------------------------
// ------------------------------------------------------------
// ---------------GET OBJECT OF HTML ELEMENTS------------------
// ------------------------------------------------------------
// ------------------------------------------------------------


// The Connect button and its component
const ethereumButton = document.getElementById('enableEthereumButton');
const ethereumButton_text = document.getElementById('enableEthereumButton_text');
const showAccount = document.getElementById('showAccount');

// The mint section to display or hide
const mintSection = document.getElementById("mintSection");

// Remaining Eggs to mint Text
const remainingEggs_text = document.getElementById("remainingEggsNumber");

// The buttons to mints
const freeMintButton = document.getElementById("freeMintButton");

const mint1Button = document.getElementById('mint1Button');
const mint3Button = document.getElementById('mint3Button');
const mint10Button = document.getElementById('mint10Button');

// The displayed prices to be updated if presales or main Sales
const mint1TextPrice = document.getElementById('mint1TextPrice');
const mint3TextPrice = document.getElementById('mint3TextPrice');
const mint10TextPrice = document.getElementById('mint10TextPrice');

// The Pop-up that alert you if you can mint a free Egg and its components
const freeMintPopUp = document.getElementById("freeMintPopUp");
const popUpContinueTxButton = document.getElementById("popUpContinueTxButton");
const popUpFreeMintButton = document.getElementById("popUpFreeMintButton");
const remainingFreeEggs = document.getElementById("remainingFreeEggs");
const freeMintPopUpClose = document.getElementById("freeMintPopUpClose");

// the overlay (invisible block on top of main content to forbid any other interaction during loading)
const overlay = document.getElementById("overlay");
// main content of the page to be blured in or out during loading
const mainContent = document.getElementById("main");
// The loading animation to be dislayed or hidded
const loading = document.getElementById("loading");

// Add the contract address in the footer (no need to enter it by hand in the HTML)
const footerContract = document.getElementById("implementationContract");
if (ADDRESS != "") {footerContract.innerHTML = ADDRESS;}


// ------------------------------------------------------------
// ------------------------------------------------------------
// -------------INITIALISATION OF CONTRACT INFO----------------
// ------------------------------------------------------------
// ------------------------------------------------------------


// Define the useState fonction -------------------------------
const useState = (defaultValue) => {
	let value = defaultValue;
	const getValue = () => value;
	const setValue = newValue => value = newValue;
	return [getValue, setValue];
}
//-------------------------------------------------------------

// INFO FROM SMART CONTRACT
// (TO BE UPDATED WHEN CONNECTED AND INTERACTING WITH MINT BUTTONS)

const [signedIn, setSignedIn] = useState(false);

const [walletAddress, setWalletAddress] = useState(null);

const [eggContract, setEggContract] = useState(null);

const [totalSupply, setTotalSupply] = useState(0);

const [remainingEggs, setRemainingEggs] = useState(0);

const [freeRemaining, setFreeRemaining] = useState(0);

const [frigReserve, setFrigReserve] = useState(0)

const [saleStarted, setSaleStarted] = useState(false);

const [preSale, setpreSale] = useState(false);

const [eggPrice, setEggPrice] = useState(0);

const [eggPrice3, setEggPrice3] = useState(0);

const [eggPrice10, setEggPrice10] = useState(0);

const [maxEggs, setMaxEggs] = useState(7777);

const [currentTX, setCurrentTX] = useState(null);

const [myTokens, setMyTokens] = useState(0);

const [gasAmount, setgasAmount] = useState(0);

// Initialise web3
window.web3 = new Web3(window.ethereum);


// ------------------------------------------------------------
// ------------------------------------------------------------
// -------------------UTILITY FUNCTIONS------------------------
// ------------------------------------------------------------
// ------------------------------------------------------------


// POP-UP FUNCTIONS -------------------------------------------
function openPopUp(target) {
	overlay.style.display = "block";
	target.style.display = "flex";
	mainContent.classList.remove("blur-out");
	mainContent.classList.add("blur-in");
}

function closePopUp(target) {
	overlay.style.display = "none";
	target.style.display = "none";
	mainContent.classList.remove("blur-in");
	mainContent.classList.add("blur-out");
}
//---------------------------------------------------------------
// OPEN LOADING FUNCTIONS ---------------------------------------
function openLoading() {
	loading.style.display = "flex";
}

function closeLoading() {
	loading.style.display = "none";
}
//---------------------------------------------------------------

// VISUAL UPDATE FOR THE CONNECT BUTTON -------------------------
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
//---------------------------------------------------------------


// --------------------------------------------------------------
// --------------------------------------------------------------
// ----------FUNCTIONS TO GET INFOS FROM CONTRACT----------------
// --------------------------------------------------------------
// --------------------------------------------------------------

//----------------------------------------------------------------
async function getContract() {
	const eggContract = new window.web3.eth.Contract(ABI, ADDRESS);
	setEggContract(eggContract);
}
//----------------------------------------------------------------

//----------------------------------------------------------------
async function getfixedInfos() {
	const maxEggs = await eggContract().methods.MAX_Frig().call();
	setMaxEggs(maxEggs);
}
//----------------------------------------------------------------

//----------------------------------------------------------------
async function getContractPrices() {
	const eggPrice = await eggContract().methods.FrigPrice().call();
	setEggPrice(eggPrice);

	const eggPrice3 = await eggContract().methods.ThreeFrigPrice().call();
	setEggPrice3(eggPrice3);

	const eggPrice10 = await eggContract().methods.TenFrigPrice().call();
	setEggPrice10(eggPrice10);

	mint1TextPrice.innerHTML = String(eggPrice/1000000000000000000)+" Eth";
	mint3TextPrice.innerHTML = String(eggPrice3/1000000000000000000)+" Eth";
	mint10TextPrice.innerHTML = String(eggPrice10/1000000000000000000)+" Eth";
}
//----------------------------------------------------------------

//----------------------------------------------------------------
async function getSaleState() {
	const salebool = await eggContract().methods.saleIsActive().call();
	setSaleStarted(salebool);

	const preSalebool = await eggContract().methods.preSale().call();
	setpreSale(preSalebool);
}
//----------------------------------------------------------------

//----------------------------------------------------------------
async function getSupplyInfo() {
	const totalSupply = await eggContract().methods.totalSupply().call();
	setTotalSupply(totalSupply);

	const frigReserve = await eggContract().methods.FrigReserve().call();
	setFrigReserve(frigReserve);

	const frigFreeMint = await eggContract().methods.FrigFreeMint().call();
	setFreeRemaining(frigFreeMint);
	remainingFreeEggs.innerHTML = frigFreeMint;

	const remaining = maxEggs() - totalSupply - frigReserve;
	console.log("Remaining Eggs: " + remaining);
	setRemainingEggs(remaining);
	remainingEggs_text.innerHTML = remaining;
}
//----------------------------------------------------------------

// GET TOKENS OF USER --------------------------------------------
async function getMyTokens() {
	const myToken = await eggContract().methods.tokensOfOwner(walletAddress()).call();
	setMyTokens(myToken);
}
//----------------------------------------------------------------

// Main function to get Data -------------------------------------
async function callContractData(full) {
	if (full == true) {
		try {
			await getContract();
		}
		catch(err) {
			alert("Could not get contract infos");
			return;
		}
		await getfixedInfos(); // informations that won't change (max Eggs)
	}

	await getSaleState();

	await getSupplyInfo();

	await getContractPrices();
}
//-------------------------------------------------------------


// ------------------------------------------------------------
// ------------------------------------------------------------
// -----------------SIGN IN/OUT FUNCTION-----------------------
// ------------------------------------------------------------
// ------------------------------------------------------------

// Sign In-----------------------------------------------------
async function signIn() {
	if (typeof window.web3 !== 'undefined') {
		await window.ethereum.enable()
			.then(function (accounts) {
				window.web3.eth.net.getNetworkType()
					// checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet)
					.then((network) => { console.log(network); if (network != "rinkeby") {alert("You are on " + network + " network. Change network to mainnet or you won't be able to do anything here"); } });
				let wallet = accounts[0];
				setWalletAddress(wallet);
				setSignedIn(true);
				updateButtonConnected(wallet);
				
			})
			.catch(function (error) {
				// Handle error. Likely the user rejected the login
				console.error(error);
			})
		await getMyTokens();

		// TO BE REMOVED BEFORE DEPLOYING
		console.log("Number of available free Eggs : ", freeRemaining());
		console.log("My tokens : ", myTokens());

		if (freeRemaining() > 0 && myTokens().length < 1) {
			freeMintButton.style.display = "block";
		}
		mintSection.style.display = "flex";
		mintSection.scrollIntoView({behavior: "smooth"});
	} else {
		alert("No Ethereum interface injected into browser. Read-only access");
	}
}
//-------------------------------------------------------------

// Sign Out----------------------------------------------------
async function signOut() {
	setSignedIn(false);
	updateButtonDisconnect();
	mintSection.style.display = "none";
	freeMintButton.style.display = "none";
}
//-------------------------------------------------------------


// ------------------------------------------------------------
// ------------------------------------------------------------
// ---------------------MINT FUNCTIONS-------------------------
// ------------------------------------------------------------
// ------------------------------------------------------------

// Mint 1 Egg--------------------------------------------------
async function mintEgg1() {
	const price = Number(eggPrice());
	console.log(price);

	try {
		const gasAmount = await eggContract().methods.mintEgg().estimateGas({ from: walletAddress(), value: price });
		setgasAmount(gasAmount);
	}
	catch(err) {
		if (remainingEggs() - freeRemaining() < 1) {
			alert("No more Eggs available");
		}
		else {
			if (myTokens().length > 14) {
				alert("You can mint a maximum of 15 Eggs. You are trying to mint 1 but you already have " + String(myTokens().length));
			}
			else {alert("An Error occured");}
		}
		return ;
	}
	console.log("estimated gas", gasAmount());

	console.log({ from: walletAddress(), value: price });

	eggContract().methods
		.mintEgg()
		.send({ from: walletAddress(), value: price, gas: String(gasAmount()) })
		.on('transactionHash', function (hash) {
			console.log("transactionHash", hash);
			});
};
//-------------------------------------------------------------

// Mint 3 Eggs-------------------------------------------------
async function mintEgg3() {

	const price = Number(eggPrice3());

	try {
		const gasAmount = await eggContract().methods.mintThreeEggs().estimateGas({ from: walletAddress(), value: price });
		setgasAmount(gasAmount);
	}
	catch(err) {
		if (remainingEggs() - freeRemaining() < 1) {
			alert("No more Eggs available");
			}
		else {
			if (myTokens().length > 12) {
				alert("You can mint a maximum of 15 Eggs. You are trying to mint 3 but you already have " + String(myTokens().length));
			}
			else {alert("An Error occured");}
		}
		return ;
	}
	console.log("estimated gas", gasAmount());

	console.log({ from: walletAddress(), value: price });

	eggContract().methods
		.mintThreeEggs()
		.send({ from: walletAddress(), value: price, gas: String(gasAmount()) })
		.on('transactionHash', function (hash) {
			console.log("transactionHash", hash);
		});
};
//-------------------------------------------------------------

// Mint 10 Eggs------------------------------------------------
async function mintEgg10() {

	const price = Number(eggPrice10());

	try {
		const gasAmount = await eggContract().methods.mintTenEggs().estimateGas({ from: walletAddress(), value: price });
		setgasAmount(gasAmount);
	}
	catch(err) {
		if (remainingEggs() - freeRemaining() < 1) {
			alert("No more Eggs available");
		}
		else {
			if (myTokens().length > 5) {
				alert("You can mint a maximum of 15 Eggs. You are trying to mint 10 but you already have " + String(myTokens().length));
			}
			else {alert("An Error occured");}
		}
		return ;
	}
	console.log("estimated gas", gasAmount());

	console.log({ from: walletAddress(), value: price });

	eggContract().methods
		.mintTenEggs()
		.send({ from: walletAddress(), value: price, gas: String(gasAmount()) })
		.on('transactionHash', function (hash) {
			console.log("transactionHash", hash);
		});
};
//-------------------------------------------------------------

// Mint for Free-----------------------------------------------
async function mintEggFree() {
	const gasAmount = await eggContract().methods.mintFreeEgg().estimateGas({ from: walletAddress(), value: 0 });
	console.log("estimated gas", gasAmount);

	console.log({ from: walletAddress(), value: 0 });

	eggContract().methods
		.mintFreeEgg()
		.send({ from: walletAddress(), value: 0, gas: String(gasAmount) })
		.on('transactionHash', function (hash) {
			console.log("transactionHash", hash);
		});
}
//-------------------------------------------------------------

// Free Mint button Function ----------------------------------
async function freemint() {
	if (eggContract()) {
		openPopUp(loading);
			try {
				await callContractData(false);
			}
			catch(err) {
				closePopUp(loading);
				alert("Be sure to connect to Mainnet");
				return;	
			}
		if(saleStarted()) {
			console.log(eggContract());

			await getMyTokens();

			console.log("Number of available free Eggs : ", freeRemaining());
			console.log("My tokens : ", myTokens());

			if(freeRemaining() > 0 && myTokens().length < 1) {
				await mintEggFree();
				closePopUp(loading);
			}
			else {
				alert("You cannot get Free Eggs anymore");
				freeMintButton.style.display = "none";
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
// ------------------------------------------------------------


// MAIN MINT FUNCTION------------------------------------------
async function mint(n) {
	if (eggContract()) {
		openPopUp(loading);
			try {
				await callContractData(false);
			}
			catch(err) {
				closePopUp(loading);
				alert("Be sure to connect to Mainnet");
				return;	
			}
		if(saleStarted()) {
			console.log(eggContract());

			await getMyTokens();

			console.log("Number of available free Eggs : ", freeRemaining());
			console.log("My tokens : ", myTokens());

			if(freeRemaining() > 0 && myTokens().length < 1) {
				console.log("you can get a free NFT");
				setCurrentTX(n);
				openPopUp(freeMintPopUp);
				closeLoading();
			}
			else {
				freeMintButton.style.display = "none";
				if (n==1) {mintEgg1();}
				else {
					if (n==3) {mintEgg3();}
					else {
						if (n==10) {mintEgg10();}
					}
				}
				closePopUp(loading);
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
// ------------------------------------------------------------


// ------------------------------------------------------------
// ------------------------------------------------------------
// -------------INTERACTION WITH HTML BUTTONS------------------
// ------------------------------------------------------------
// ------------------------------------------------------------

// INTERACTION WITH CONNECT BUTTON ----------------------------
ethereumButton.addEventListener('click', async () => {
	if (signedIn()) {
		signOut();
	} else {
		openPopUp(loading);
			try {
				await callContractData(true);
			}
			catch(err) {
				closePopUp(loading);
				alert("Be sure to connect to Mainnet");	
				return	
			}
		if (saleStarted()) {
			signIn();
			closePopUp(loading);
		}
		else {
			closePopUp(loading);
			alert("Sales haven't started yet or you're not connected to Mainnet");
		}
	}
});
//-------------------------------------------------------------

// BUTTON TO MINT FOR FREE ------------------------------------
freeMintButton.addEventListener('click', () => {
	if (signedIn()) {
		freemint();
	}
	else {
		alert("No Wallet Connected");
	}
})
//-------------------------------------------------------------

// BUTTON TO MINT 1 EGG ---------------------------------------
mint1Button.addEventListener('click', () => {
	if (signedIn()) {
		mint(1);
	}
	else {
		alert("No Wallet Connected");
    }
});
//-------------------------------------------------------------

// BUTTON TO MINT 3 EGGS --------------------------------------
mint3Button.addEventListener('click', () => {
	if (signedIn()) {
		mint(3);
	}
	else {
		alert("No Wallet Connected");
	}
});
//-------------------------------------------------------------

// BUTTON TO MINT 10 EGGS -------------------------------------
mint10Button.addEventListener('click', () => {
	if (signedIn()) {
		mint(10);
	}
	else {
		alert("No Wallet Connected");
	}
});
//-------------------------------------------------------------

// Button to continue Tx --------------------------------------
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
//-------------------------------------------------------------

// Free mint button of the pop-up -----------------------------
popUpFreeMintButton.addEventListener('click', () => {
	if (signedIn()) {
		mintEggFree();
		closePopUp(freeMintPopUp);
	}
	else {
		alert("No Wallet Connected");
	}
});
//-------------------------------------------------------------

// Close pop up button ----------------------------------------
freeMintPopUpClose.addEventListener('click', () => {
	closePopUp(freeMintPopUp);
});
//-------------------------------------------------------------

// Close any pop up when clicking outside of it ---------------
/*
overlay.addEventListener('click', ({target}) => {
	closePopUp(freeMintPopUp);
	closePopUp(loading);
})
*/
//-------------------------------------------------------------