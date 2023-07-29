import { useState } from "react";

function AccountBalances({explorer, address, setAddress}) {
    const [balances, setBalances] = useState(0);

    async function onChange(evt) {
        const accountAddress = evt.target.value;
        if(!accountAddress) return;

        try {
            setAddress(accountAddress);
            const balance = await explorer.getAccountBalances(accountAddress);
            setBalances(balance);

        } catch(err) {
            console.log(err);
            setBalances(0);
        }
    }

    return (
        <div className="container latest_block">
          <h1>Account Balance</h1>
            <label>
                Account address
                <input placeholder="Type account ENS or address" value={address} onChange={onChange}></input>
            </label>

            <div className="block_number">
                Account Balance: {balances}
            </div>
         
        </div>
      );
}

export default AccountBalances;