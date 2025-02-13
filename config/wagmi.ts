
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  mainnet,
  baseSepolia
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Saint Finance',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    mainnet,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [baseSepolia] : []),
  ],
  ssr: true,
});
