function solution(str) {
    const value = []
    for (let i = 0; i < str.length; i = i + 2) {
        value.push(`${str[i]}${str[i + 1] ? str[i + 1] : '_'}`)
    }
    return value


}

solution("abcdef")
solution("abcdefg")