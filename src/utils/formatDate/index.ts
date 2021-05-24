export const formatDate = (date: string) => {
  const dateCreating = new Date(date)
  const day = convertDateZero(dateCreating.getDate())
  const month = convertDateZero(dateCreating.getMonth() + 1)
  const fullYear = dateCreating.getFullYear()
  return `${day}/${month}/${fullYear}`
}

const convertDateZero = (date: number) => {
  return date < 10 ? `0${date}` : date
}
