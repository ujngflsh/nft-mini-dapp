"use client"

interface WalletConnectProps {
  onConnect: () => void
}

export default function WalletConnect({ onConnect }: WalletConnectProps) {
  const handleConnect = async () => {
    if (typeof window.ethereum === "undefined") {
      alert("Install MetaMask dulu!")
      return
    }
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" })
      onConnect()
    } catch (err) {
      console.error(err)
      alert("Gagal connect wallet")
    }
  }

  return (
    <button
      onClick={handleConnect}
      className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded font-bold"
    >
      Connect Wallet
    </button>
  )
}
