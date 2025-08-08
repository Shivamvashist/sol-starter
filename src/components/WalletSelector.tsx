import { useWallet } from '@solana/wallet-adapter-react';

export const WalletSelector = ({ open,setIsOpen  }: { open: boolean, setIsOpen:(isOpen: boolean)=>void }) => {
  const { wallets, select } = useWallet();

  return (
    <div className={`grid gap-3 bg-white p-4 rounded-lg shadow-lg w-full max-w-md ${open ? 'block' : 'hidden'}`}>
      <h2 className="text-lg font-semibold mb-2">Select a Wallet</h2>
      {wallets.map((walletOption) => (
        <button
          key={walletOption.adapter.name}
          onClick={() => {select(walletOption.adapter.name); setIsOpen(false)}}
          className="flex items-center gap-3 p-3 border hover:bg-gray-50 rounded transition"
        >
          <img src={walletOption.adapter.icon} alt="" className="w-6 h-6" />
          {walletOption.adapter.name}
        </button>
      ))}
    </div>
  );
};
