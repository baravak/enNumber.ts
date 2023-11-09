import convertPatterns from "./lib";

export default function arToEnNumber(text: string):string {
    return convertPatterns('٠١٢٣٤٥٦٧٨٩'.split(''), text)
}