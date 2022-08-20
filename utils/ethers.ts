import { ethers } from "ethers";

// Connect to Metamask
export const connectToMetamask = async () => {
    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner()
    return signer;
}
