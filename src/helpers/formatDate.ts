export function formatDate(inputDate: string) {
  const parsedDate = new Date(inputDate)

  const formattedDate = `${parsedDate.getDate().toString().padStart(2, '0')}.${(parsedDate.getMonth() + 1).toString().padStart(2, '0')}.${parsedDate.getFullYear()}, ${parsedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}`

  return formattedDate
}
