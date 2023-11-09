import arToEnNumber from "./ar";
import faToEnNumber from "./fa";
type langsType = (text: string)=>string
export default function enNumber(text: string): string{
    const langs:langsType[] = [faToEnNumber, arToEnNumber]
    langs.forEach(lang => {
        text = lang(text)
    })
    return text
}
