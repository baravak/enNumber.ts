import convertPatterns from "./lib";

export default function faToEnNumber(text: string):string {
    return convertPatterns('۰۱۲۳۴۵۶۷۸۹'.split(''), text)
}