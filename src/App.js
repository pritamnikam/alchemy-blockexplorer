import { useState } from "react";

import "./App.scss";
import LatestBlock from './LatestBlock';
import Block from './Block';
import BlockExplorer from "./scripts/block.explorer";
import AccountBalances from "./AccountBalances";
import NftsForUser from "./NftsForUser";
import ContractDeployer from "./ContractDeployer";

function App() {
  const [explorer, setExplorer] = useState(new BlockExplorer());
  const [hash, setHash] = useState("");
  const [address, setAddress] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [contract, setContract] = useState("");
  
  return (
    <div className="app">
      <LatestBlock 
        explorer={explorer}
        setExplorer={setExplorer}
      />
      <Block
          explorer={explorer}
          setExplorer={setExplorer}
          hash={hash}
          setHash={setHash}
      />
      <AccountBalances
          explorer={explorer}
          setExplorer={setExplorer}
          address={address}
          setAddress={setAddress}
      />
      <NftsForUser
          explorer={explorer}
          setExplorer={setExplorer}
          address={address}
          setAddress={setAddress}
          tokenId={tokenId}
          setTokenId={setTokenId}
      />

      <ContractDeployer
          explorer={explorer}
          setExplorer={setExplorer}
          contract={contract}
          setContract={setContract}
      />
    </div>
  );
}

export default App;
