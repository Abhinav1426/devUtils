
export function base64Encode(input: string) {
    try{
        const bytes = new TextEncoder().encode(input);
        const binString = Array.from(bytes, (byte) =>
            String.fromCodePoint(byte),
          ).join("");
          return btoa(binString);
    }
    catch{
        throw new Error("Failed to encode to Base64");
    }
}

export function base64Decode(input: string) {
    try{
        const binString = atob(input);
        const bytes = Uint8Array.from(binString, (c) => c.codePointAt(0)!);
        return new TextDecoder().decode(bytes);
    }
    catch{
        throw new Error("Failed to decode from Base64");
    }
}