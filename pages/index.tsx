import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import '@rainbow-me/rainbowkit/styles.css';
import DefaultLayout from "@/layouts/default";
import ConnectWalletButton from "@/components/connectwallet";
import TotalBalance from "@/components/dashboard/totalbalance";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-row justify-between item-center gap-4 w-full" >
          <div className="title">
            <p className="font-bold text-[1.5em] uppercase">Saint Staking</p>
            <p>Stake your $Saint to earn reward.</p>
          </div>
          <ConnectButton />
        </div>
        <div className="grid grid-cols-3 gap-3 w-full mt-3">
            <TotalBalance />
            <TotalBalance />
            <TotalBalance />
        </div>
      </section>
    </DefaultLayout>
  );
}
