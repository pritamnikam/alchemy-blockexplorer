import { useState } from "react";

function Block({explorer, hash, setHash}) {
    const [blockNumber, setBlockNumber] = useState(0);
    const [blockHash, setBlockHash] = useState("");
    const [blockMiner, setBlockMiner] = useState("");
    const [transactions, setTransactions] = useState(0);

    async function onChange(evt) {
        const blockNumber = evt.target.value;
        if(!blockNumber) return;

        console.log(blockNumber);

        try {
            setHash(blockNumber);
            const block = await explorer.getBlock(parseInt(blockNumber));
            setBlockNumber(block.number);
            setBlockHash(block.hash);
            setBlockMiner(block.miner);
            setTransactions(block.transactions.length);

        } catch(err) {
            console.log(err);
            
            setBlockNumber(0);
            setBlockHash("");
            setBlockMiner("");
        }
    }

    return (
        <div className="container latest_block">
          <h1>Block</h1>
            <label>
                Block number or hash
                <input placeholder="Type blockc hash or number" value={hash} onChange={onChange}></input>
            </label>

            <div className="block_number">
                Block Number: {blockNumber}
            </div>
            <div className="block_number">
                Block Hash: {blockHash}
            </div>
            <div className="block_number">
                Miner: {blockMiner}
            </div>
            <div className="block_number">
                Transactions: {transactions}
            </div>
          
        </div>
      );
}

export default Block;