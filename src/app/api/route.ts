import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const apiKey = process.env.PINATA_API_KEY!;
    const apiSecret = process.env.PINATA_API_SECRET_KEY!;

    // Upload ke Pinata
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

    const data = new FormData();
    data.append("file", file);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        pinata_api_key: apiKey,
        pinata_secret_api_key: apiSecret,
      } as any,
      body: data,
    });

    const result = await response.json();

    return NextResponse.json({ IpfsHash: result.IpfsHash });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
