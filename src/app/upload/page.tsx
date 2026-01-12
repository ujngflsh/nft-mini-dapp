"use client";

import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [cid, setCid] = useState("");

  async function uploadFile() {
    if (!file) return alert("Pilih file dulu!");

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    setCid(result.IpfsHash);
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Upload File ke IPFS 🚀</h1>

      <input
        type="file"
        className="mt-4"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <button
        onClick={uploadFile}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Upload ke IPFS
      </button>

      {cid && (
        <div className="mt-4">
          <p className="text-green-400">Berhasil Upload!</p>
          <p>CID: {cid}</p>
          <a
            className="text-blue-400 underline"
            href={`https://gateway.pinata.cloud/ipfs/${cid}`}
            target="_blank"
          >
            Lihat File
          </a>
        </div>
      )}
    </div>
  );
}
