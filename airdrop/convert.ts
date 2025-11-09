import fs from "fs";
import bs58 from "bs58";
import dotenv from "dotenv";

dotenv.config();

const base58Key = process.env.PHANTOM_PRIVATE_KEY;

if (!base58Key) {
    throw new Error("PHANTOM_PRIVATE_KEY not found in .env file");
}

const keyBytes = bs58.decode(base58Key);

fs.writeFileSync("./Turbin3-wallet.json", JSON.stringify(Array.from(keyBytes)));

console.log("Turbin3-wallet.json created from .env key!");
