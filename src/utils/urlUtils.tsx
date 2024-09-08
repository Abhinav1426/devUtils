
export function urlEncode(input: string) {
    try{
        const encoded = encodeURI(input).replace(/%5B/g, "[")
        .replace(/%5D/g, "]")
        .replace(
          /[!'()*]/g,
          (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
        );
      return (encoded);
    }
    catch{
        throw new Error("Failed to encode to Base64");
    }
}

export function urlDecode(input: string) {
    try{
        const decoded = decodeURI(input);
        return(decoded);
    }
    catch{
        throw new Error("Failed to decode from Base64");
    }
}
