// import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import CustomWalletButton from './components/CustomWalletButton';
import { WalletSelector } from './components/WalletSelector';
import { useState } from 'react';

export default function App() {

  const [ isOpen,setIsOpen ] = useState(false);



  return (
    <>
      <div>
        <CustomWalletButton setIsOpen={setIsOpen} />

        <WalletSelector open={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
    // <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 to-gray-200 overflow-scroll">
    //   <CustomWalletButton />
    //   {/* If you want the selector modal to always be visible (for now): */}
    //   <WalletSelector />
    // </div>
  );
}
