"use client"

import { useState } from "react"
import WalletConnect from "@/components/WalletConnect"
import NFTUploader from "@/components/NFTUploader"

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [cid, setCid] = useState("")

  const [step, setStep] = useState<"upload" | "mint">("upload")

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-start p-6 gap-10">
      
      {/* TITLE */}
      <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
        NFT Mini dApp 🚀
      </h1>
      <p className="text-gray-400 text-lg">Belajar Upload, Preview, Copy CID, dan Mint NFT</p>

      {/* CONNECT WALLET */}
      {!walletConnected && (
        <WalletConnect onConnect={() => setWalletConnected(true)} />
      )}

      {/* STEP / CONTENT */}
      {walletConnected && (
        <div className="w-full max-w-md flex flex-col gap-6">

          {/* Upload */}
          {step === "upload" && (
            <>
              <NFTUploader onCIDChange={setCid} />
              <button
                disabled={!cid}
                onClick={() => setStep("mint")}
                className={`px-4 py-2 rounded text-white font-bold ${
                  cid ? "bg-green-600 hover:bg-green-700" : "bg-gray-700 cursor-not-allowed"
                }`}
              >
                Lanjut ke Mint
              </button>
            </>
          )}

          {/* Mint */}
          {step === "mint" && (
            <>
              <h2 className="text-white text-xl font-bold">Mint NFT</h2>
              {cid ? (
                <p className="text-gray-300">CID siap untuk mint: <span className="text-green-400">{cid}</span></p>
              ) : (
                <p className="text-red-500">Belum ada CID, upload dulu!</p>
              )}
              <button
                onClick={() => setStep("upload")}
                className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded"
              >
                Kembali Upload
              </button>
            </>
          )}

        </div>
      )}
    </main>
  )
}
