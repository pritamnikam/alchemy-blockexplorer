import { useEffect, useState } from "react";

function LatestBlock({explorer}) {
    const [latestBlockNumber, setLatestBlockNumber] = useState("");
    const [blockHash, setBlockHash] = useState("");
    const [blockMiner, setBlockMiner] = useState("");
    useEffect(() => {
      const fetchData = async () => {
        const blockNumber = await explorer.getLatestBlockNumber();
        const block = await explorer.getBlock(blockNumber);

        setLatestBlockNumber(blockNumber);
        setBlockHash(block.hash);
        setBlockMiner(block.miner)
      };
    
      fetchData()
        // make sure to catch any error
        .catch(console.error);;
    }, [explorer])

    return (
        <div className="container latest_block">
          <h1>Latest Block</h1>
          <div className="block_number">
            Latest Block Number: {latestBlockNumber}
          </div>
          <div className="block_number">
            Block Hash: {blockHash}
          </div>
          <div className="block_number">
            Miner: {blockMiner}
          </div>
          
        </div>
      );
}

export default LatestBlock;