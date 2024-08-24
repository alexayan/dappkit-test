import Image from "next/image";
import { Inter } from "next/font/google";
import { ConnectButton } from "@mysten/dapp-kit";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <ConnectButton />
    </div>
  );
}
