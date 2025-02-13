import { http, createConfig } from '@wagmi/core'
import { baseSepolia } from '@wagmi/core/chains'

export const config = createConfig({
  chains: [baseSepolia],
  transports: {
    [baseSepolia.id]: http(),
  },
})