import { useState } from "react";

function ContractDeployer({explorer, contract, setContract}) {
    const [deployer, setDeployer] = useState("");
    const [blockNumber, setBlockNumber] = useState(0);

    async function onChange(evt) {
        const contractAddress = evt.target.value;
        if(!contractAddress) return;

        try {
            setContract(contractAddress);
            const { blockNumber, deployerAddress } = await explorer.getContractDeployer(contractAddress);
            setDeployer(deployerAddress);
            setBlockNumber(blockNumber);
        } catch(err) {
            console.log(err);
            setDeployer("");
            setBlockNumber(0);
        }
    }

    return (
        <div className="container latest_block">
          <h1>Contract Deployer</h1>
            <label>
                Contract address
                <input placeholder="Type contract address" value={contract} onChange={onChange}></input>
            </label>

            <div className="block_number">
                Contract Deployer: {deployer}
            </div>
            <div className="block_number">
                Block Number: {blockNumber}
            </div>
         
        </div>
      );
}

export default ContractDeployer;