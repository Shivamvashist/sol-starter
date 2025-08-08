import { useWallet } from '@solana/wallet-adapter-react';
// import { useWalletModal } from '@solana/wallet-adapter-react-ui'; // for wallet list popup

export default function CustomWalletButton( {setIsOpen}:{setIsOpen:(isOpen: boolean)=>void} ) {
  const { publicKey, connected, disconnect, wallets } = useWallet();
  // const { setVisible } = useWalletModal();

  if (!connected) {
    return (
      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
        onClick={() => setIsOpen(true)}
      >
        Connect Wallet
      </button>
    );
  }

  return (
    <div className="relative">
      <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
        {publicKey?.toBase58().slice(0, 4)}...
        {publicKey?.toBase58().slice(-4)}
      </button>
      <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg">
        <button
          onClick={disconnect}
          className="block px-4 py-2 hover:bg-gray-200"
        >
          Disconnect
        </button>
        <button
          onClick={() => alert("Custom Action")}
          className="block px-4 py-2 hover:bg-gray-200"
        >
          Another Action
        </button>
      </div>
    </div>
  );
}
