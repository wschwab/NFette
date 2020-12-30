import { useUserProvider, useUserAddress, useBalance } from "../hooks";
import { formatEther } from "@ethersproject/units";

export const getAddress = async (injectedProvider, localProvider) => {
    const userProvider = useUserProvider(injectedProvider, localProvider);
    const address = useUserAddress(userProvider);
}

export const getBalance = async () => {
    const _balance = await useBalance(provider, address);
    _balance ? formatEther(yourLocalBalance) : "";
}

// code snippets saved for reference:

// If you want to bring in the mainnet DAI contract it would look like:
//  const mainnetDAIContract = useExternalContractLoader(mainnetProvider, DAI_ADDRESS, DAI_ABI)
//  console.log("🥇DAI contract on mainnet:",mainnetDAIContract)

// keep track of a variable from the contract in the local React state:
//   const purpose = useContractReader(readContracts, "YourContract", "purpose");

// const addressFromENS = useResolveName(mainnetProvider, "austingriffith.eth");