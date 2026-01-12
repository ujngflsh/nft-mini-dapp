🚀 NFT Mini dApp

A simple and clean Web3 NFT dApp that allows users to upload images to IPFS, preview CID, connect wallet, and mint NFTs — all in a single page.


![App Screenshot](./screnshoots.png)

✨ Features

🔗 Connect Wallet (MetaMask + Wagmi + RainbowKit)

📤 Upload image to IPFS (Pinata / Web3Storage ready)

🖼️ Live image preview before uploading

📋 CID preview + copy button

🪙 Mint NFT to deployed smart contract (Sepolia)

⚡ Fully Single-Page UX — simple, fast, and user-friendly

🏗️ Built with modern Next.js App Router


📁 Project Structure

src/
 ├── app/
 │    ├── page.tsx             # Main single-page dApp
 │    ├── upload/page.tsx      # Optional separate uploader page
 │    └── mint/page.tsx        # Optional mint page
 ├── components/
 │    ├── WalletConnect.tsx
 │    └── NFTUploader.tsx
 ├── lib/
 │    └── wagmi.ts
contracts/
 ├── MyNFT.sol                  # ERC-721 NFT Smart Contract
scripts/
 └── deploy.ts


🛠️ Getting Started

1️⃣ Install dependencies
    npm install

2️⃣ Run development server
    npm run dev

    Open In Browser

👉 http://localhost:3000

🔧 Deploying the Smart Contract

    If you're using Hardhat:

    npx hardhat run scripts/deploy.ts --network sepolia

    Save:

    Contract Address

    ABI Folder (artifacts)

    🧪 Tech Stack

        Next.js 14 (App Router)

        React 19

        TailwindCSS

        Wagmi + Viem

        Alchemy / Infura RPC

        Pinata or Web3Storage

        Hardhat

        
        📦 Build for Production
         
        npm run build

        npm run start

        🌍 Deployment Options

        You can deploy the frontend on:

        Vercel

        Netlify

        AWS Amplify

        📜 License

        MIT License.
