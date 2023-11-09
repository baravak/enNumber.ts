export default function convertPatterns(nonEglish: string[], text: string): string{
    const regExp = new RegExp(`[${nonEglish.join('')}]`, 'gi')
    return text.replace(regExp, (char:string):string => {
        const index = nonEglish.indexOf(char)
        return index.toString()
    })
}