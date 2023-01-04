function humanReadable(seconds) {
    const hours = Math.floor(seconds / 60 / 60)
    const min = Math.floor((seconds / 60) - (hours * 60))
    const sec = seconds % 60
    return `${hours.toString().length === 1 ? '0' + hours : hours}:${min.toString().length === 1 ? '0' + min : min}:${sec.toString().length === 1 ? '0' + sec : sec}`

}


console.log(humanReadable(9462))