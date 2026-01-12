"use client"

import { useState } from "react"

interface NFTUploaderProps {
  onCIDChange?: (cid: string) => void
}

export default function NFTUploader({ onCIDChange }: NFTUploaderProps) {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [cid, setCid] = useState<string>("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null
    setFile(selectedFile)
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile)
      setPreview(url)
      setCid("")
      onCIDChange && onCIDChange("") // reset CID
    }
  }

  const handleUpload = () => {
    if (!file) return alert("Pilih file dulu!")
    // Simulasi CID
    const simulatedCID = "bafybeihd..." + Math.floor(Math.random() * 1000)
    setCid(simulatedCID)
    onCIDChange && onCIDChange(simulatedCID)
  }

  const handleCopy = () => {
    if (!cid) return
    navigator.clipboard.writeText(cid)
    alert("CID berhasil dicopy!")
  }

  return (
    <div className="w-full flex flex-col gap-4 bg-gray-900 p-4 rounded-xl shadow-lg">
      <h2 className="text-white font-bold text-lg">Upload NFT</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="text-white"
      />
      {preview && (
        <img src={preview} alt="Preview NFT" className="w-full rounded border border-gray-700" />
      )}
      <button
        onClick={handleUpload}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Upload ke IPFS
      </button>
      {cid && (
        <div className="flex items-center gap-2">
          <span className="text-green-400 truncate">{cid}</span>
          <button
            onClick={handleCopy}
            className="bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded"
          >
            Copy CID
          </button>
        </div>
      )}
    </div>
  )
}
