/* eslint-disable no-undef */
/* eslint-disable no-useless-escape */

export const linkify = inputText => {
  let linkifiedText = inputText

  // URLs starting with http://, https://, or ftp://
  let urlPattern = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim
  linkifiedText = inputText.replace(urlPattern, '<a href="$1" target="_blank">$1</a>')

  // URLs starting with "www." (without // before it, or it'd re-link the ones done above).
  let pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim
  linkifiedText = linkifiedText.replace(pseudoUrlPattern, '$1<a href="http://$2" target="_blank">$2</a>')

  // Change email addresses to mailto:: links.
  let emailPattern = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim
  linkifiedText = linkifiedText.replace(emailPattern, '<a href="mailto:$1">$1</a>')
  return linkifiedText
}

/*
  @param {obj} obj
  check is Object is empty or not
  return bool
*/

export const isEmptyObject = obj => {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false
    }
  }
  return true
}

/*
  @param string
  check string is email or not
  return bool
*/

export const isEmail = address => {
  let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  return regex.test(address)
}

export const getFormattedSize = (bytes, decimals = 2) => {
  if (!bytes) return '0 Bytes'
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

export const getFormattedFileType = (fileType) => {
  if (!fileType) return null
  if (fileType.indexOf('image/') !== -1) return 'Image'
  if (fileType === 'application/pdf') return 'PDF'
}
