import { CustomWalletButton } from './components/CustomWalletButton';
import { WalletSelector } from './components/WalletSelector';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 to-gray-200">
      <CustomWalletButton />
      {/* If you want the selector modal to always be visible (for now): */}
      {/* <WalletSelector /> */}
    </div>
  );
}
