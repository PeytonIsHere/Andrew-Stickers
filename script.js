function toggleMenu() {
    const menu = document.getElementById("dropdown-menu");
    menu.classList.toggle("hidden");
}
function copyWalletAddress() {
    var walletAddress = document.getElementById("wallet-address").innerText;
    var textArea = document.createElement("textarea");
    textArea.value = walletAddress;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
}
