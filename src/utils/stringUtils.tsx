export default function formatStringOutput(input: string, activeTab: string) {
    try {
        switch (activeTab) {
            case "lower case": {
                return input.toLowerCase();

            }
            case "UPPER CASE": {
                return input.toUpperCase();

            }
            case "lowerCamelCase": {
                return lowerCamelCase(input);

            }
            case "UpperCamelCase": {
                return upperCamelCase(input);
            }
            case "snake_case": {
                return input.replace(/\s+/g, '_').toLowerCase();
            }
            case "kebab-case": {
                return input.replace(/\s+/g, '-').toLowerCase();
            }
            case "CONSTANT_CASE": {
                return input.replace(/\s+/g, '_').toUpperCase().toUpperCase();
            }
            default:
                throw new Error("Invalid case");
        }
    }
    catch {
        throw new Error("Failed to convert string case");
    }
}

const lowerCamelCase = (input: string) => {
    input = input.toLowerCase();
    return input.replace(/\W+(.)/g, function(match, chr){return chr.toUpperCase();});
}

const upperCamelCase = (input: string) => {
    input = input.toLowerCase();
    return input.charAt(0).toUpperCase() + input.slice(1).replace(/\W+(.)/g, function(match, chr){return chr.toUpperCase();});
}