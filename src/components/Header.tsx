import React, { useContext } from "react";
import { Web3Context } from "../context/Web3Context";

export const Header = () => {
  const { handleConnect, isConnected, address } = useContext<any>(Web3Context);
  return (
    <div
    >
      <div>Chainlist</div>
      <div>
        {!isConnected ? (
          <button
            onClick={handleConnect}
          >
            Connect Wallet
          </button>
        ) : (
          <button>
            <div >
              {address}
            </div>
          </button>
        )}
      </div>
    </div>
  );
};
