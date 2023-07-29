import { useState } from "react";

function NftsForUser({explorer, address, setAddress, tokenId, setTokenId}) {
    const [nftInfo, setNftInfo] = useState({
        totalCount: 0,
        name: "",
        symbol: "",
        tokenType: "",
        totalSupply: 0,
    });

    async function onChange(evt) {
        const accountAddress = evt.target.value;
        if(!accountAddress) return;

        try {
            tokenId = 1590;
            setAddress(accountAddress);
            setTokenId(tokenId);

            const nfts = await explorer.getNftsForAccount(accountAddress, tokenId);
            console.log(nfts);
            
            const nftInfo = {
                totalCount: nfts.totalCount,
                name: nfts.ownedNfts[0].contract.name,
                symbol: nfts.ownedNfts[0].contract.symbol,
                tokenType: nfts.ownedNfts[0].contract.tokenType,
                totalSupply: nfts.ownedNfts[0].contract.totalSupply,
            };
            setNftInfo(nftInfo);
        } catch(err) {
            console.log(err);
            setNftInfo({
                totalCount: 0,
                name: "",
                symbol: "",
                tokenType: "",
                totalSupply: 0,
            });
        }
    }

    return (
        <div className="container latest_block">
          <h1>NFTs for User</h1>
            <label>
                Account address
                <input placeholder="Type account ENS or address" value={address} onChange={onChange}></input>
            </label>
            <label>
                Token ID
                <input placeholder="Type token id for the NFT" value={tokenId} onChange={onChange}></input>
            </label>

            <div className="block_number">
                <label>Name: {nftInfo.name}</label><br/>
                <label>Symbol: {nftInfo.symbol}</label><br/>
                <label>Token Type: {nftInfo.tokenType}</label><br/>
                <label>Total Supply: {nftInfo.totalSupply}</label><br/>
                <label>Total Count: {nftInfo.totalCount}</label><br/>         
            </div>
         
        </div>
      );
}

export default NftsForUser;