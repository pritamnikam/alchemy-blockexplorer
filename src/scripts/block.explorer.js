// Setup
import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
    apiKey: process.env.REACT_APP_APP_KEY,
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

class BlockExplorer {

    BlockExplorer() {}

    // Get the latest block number
    async getLatestBlockNumber() {
        const latestBlock = alchemy.core.getBlockNumber();
        console.log(latestBlock);
        return latestBlock;
    }

    // Get the block by address or number
    async getBlock(hash) {
        console.log(hash);

        const block = await alchemy.core.getBlock(
            hash
        );
        console.log(block);
        return block;
    }

        // Get all outbound transfers for a provided address
    async getAccountBalances(address) {
        console.log(address);
        // This response fetches the balance of the given address in the paramter as of the provided block.
        let response = await alchemy.core.getBalance(address, "latest");
        console.log(response);
        return Number(response);
    }

    // The response fetches the contract deployer of the above address
    async getContractDeployer(contractAddress) {
        console.log(contractAddress);
        let response = await alchemy.core.findContractDeployer(contractAddress);
        console.log(response);
        return response;
    }

    // Get all the NFTs owned by an address
    async getNftsForAccount(address) {
        const nfts = alchemy.nft.getNftsForOwner(address);
        return nfts;
    }

    // Listen to all new pending transactions
    async listenOnPendingTransaction(address, callback) {
    alchemy.ws.on({
        method: "alchemy_pendingTransactions", fromAddress: address
        },
        callback
    );
    }

    async getTransactionByHash(hash) {
        const tx = await alchemy.core.getTransaction(hash);
        return tx;
    }

    async getTransactionReceipt(hash) {
        const tx = await alchemy.core.getTransactionReceipt(hash);
        return tx;
    }

    async getUserTransactionCount(address) {
        const count = await alchemy.core.getTransactionCount(address);
        return count;
    }

    async getOwnersForNft(contractAddress, tokenId) {
        const owner = alchemy.nft.getOwnersForNfts(contractAddress, tokenId);
        return owner;
    }
}

export default BlockExplorer;