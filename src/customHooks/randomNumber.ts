function randomNumber(min: number, max: number) {
  const random = Math.random() * (max - min) + min
  return Math.round(random)
}

export default randomNumber;