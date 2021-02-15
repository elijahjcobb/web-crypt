/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

const BYTE_DELIMETER: string = ".";
const ITEM_DELIMETER: string = ",";

async function generateKey(password: Uint8Array): Promise<CryptoKey> {
	const hash: ArrayBuffer = await window.crypto.subtle.digest({name: "SHA-256"}, password);
	return await window.crypto.subtle.importKey("raw", hash, {name: "AES-CBC"}, false,["encrypt", "decrypt"]);
}

function dataArrayToString(value: Uint8Array): string {
	return value.join(BYTE_DELIMETER);
}

function stringToDataArray(value: string): Uint8Array {
	return new Uint8Array(value.split(BYTE_DELIMETER).map(num => parseInt(num)));
}

export async function encrypt(content: string, password: string): Promise<string> {
	const encoder = new TextEncoder();
	const dataToEncrypt: Uint8Array = encoder.encode(content)
	const iv: Uint8Array = window.crypto.getRandomValues(new Uint8Array(16));
	const key: CryptoKey = await generateKey(encoder.encode(password));
	const encrypted: Uint8Array = new Uint8Array(await window.crypto.subtle.encrypt({name: "AES-CBC", iv}, key, dataToEncrypt));
	return dataArrayToString(iv) + ITEM_DELIMETER + dataArrayToString(encrypted);
}

export async function decrypt(value: string, password: string): Promise<string> {
	const encoder = new TextEncoder();
	const values: string[] = value.split(ITEM_DELIMETER);
	const encrypted = stringToDataArray(values[1]);
	const iv = stringToDataArray(values[0]);
	const key = await generateKey(encoder.encode(password));
	const dec = await window.crypto.subtle.decrypt({name: "AES-CBC", iv}, key, encrypted);
	const decoder = new TextDecoder();
	return decoder.decode(dec);
}
