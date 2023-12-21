const currentUrl = new URL(window.location.href),
  forwarderOrigin =
    "localhost" === currentUrl.hostname ? "http://localhost:9020" : void 0,
  isMetaMaskInstalled = () => {
    const { ethereum: t } = window;
    return Boolean(t && t.isMetaMask);
  },
  isTrustWalletInstalled = () => {
    const { ethereum: t } = window;
    return Boolean(t && t.isTrust);
  },
  networkDiv = document.getElementById("network"),
  chainIdDiv = document.getElementById("chainId"),
  accountsDiv = document.getElementById("accounts"),
  onboardButton = document.getElementById("connectButton"),
  getAccountsButton = document.getElementById("getAccounts"),
  getAccountsResults = document.getElementById("getAccountsResult"),
  requestPermissionsButton = document.getElementById("requestPermissions"),
  getPermissionsButton = document.getElementById("getPermissions"),
  permissionsResult = document.getElementById("permissionsResult"),
  deployButton = document.getElementById("deplo2yButton"),
  depositButton = document.getElementById("depositButton"),
  withdrawButton = document.getElementById("withdrawButton"),
  contractStatus = document.getElementById("contractStatus"),
  sendButton = document.getElementById("sendButton"),
  tokenAddress = document.getElementById("tokenAddress"),
  createToken = document.getElementById("createToken"),
  transferTokens = document.getElementById("transferTokens"),
  approveTokens = document.getElementById("approveTokens"),
  transferTokensWithoutGas = document.getElementById(
    "transferTokensWithoutGas"
  ),
  approveTokensWithoutGas = document.getElementById("approveTokensWithoutGas"),
  signTypedData = document.getElementById("signTypedData"),
  signTypedDataResults = document.getElementById("signTypedDataResult"),
  getEncryptionKeyButton = document.getElementById("getEncryptionKeyButton"),
  encryptMessageInput = document.getElementById("encryptMessageInput"),
  encryptButton = document.getElementById("encryptButton"),
  decryptButton = document.getElementById("decryptButton"),
  encryptionKeyDisplay = document.getElementById("encryptionKeyDisplay"),
  ciphertextDisplay = document.getElementById("ciphertextDisplay"),
  cleartextDisplay = document.getElementById("cleartextDisplay");
function openInNewTab(t) {
  window.open(t, "_blank").focus();
}
const initialize = async () => {
  let t,
    e = !1;
  const n = [],
    o = () => t && t.length > 0,
    s = () => {
      (onboardButton.disabled = !0),
        openInNewTab("https://metamask.io/download.html");
    },
    d = async () => {
      try {
        c(await ethereum.request({ method: "eth_requestAccounts" }));
      } catch (t) {}
    },
    a = async () => {
      if (!isMetaMaskInstalled() || !o()) for (const t of n) t.disabled = !0;
      else
        try {
          await ethereum.request({ method: "eth_accounts" });
        } catch (t) {}
      onboardButton &&
        (isTrustWalletInstalled()
          ? web3.eth.defaultAccount
            ? (onboardButton.innerText = "Connected")
            : (onboardButton.innerText = "Trust wallet Installed")
          : isMetaMaskInstalled()
          ? o()
            ? ((onboardButton.innerText = "Connected"),
              (onboardButton.disabled = !0))
            : ((onboardButton.innerText = "Connect"),
              (onboardButton.onclick = d),
              (onboardButton.disabled = !1))
          : ((onboardButton.innerText = "Click here to install MetaMask!"),
            (onboardButton.onclick = s),
            (onboardButton.disabled = !1)));
    },
    u = () => {
      e || (e = !0);
    };
  function c(e) {
    (t = e), o() && u(), a();
  }
  function r(t) {}
  function i(t) {}
  a(),
    isMetaMaskInstalled() &&
      ((ethereum.autoRefreshOnNetworkChange = !1),
      (async function () {
        try {
          await ethereum.request({ method: "eth_chainId" }),
            await ethereum.request({ method: "net_version" });
        } catch (t) {}
      })(),
      ethereum.on("chainChanged", r),
      ethereum.on("networkChanged", i),
      ethereum.on("accountsChanged", c));
};
window.addEventListener("DOMContentLoaded", initialize);
