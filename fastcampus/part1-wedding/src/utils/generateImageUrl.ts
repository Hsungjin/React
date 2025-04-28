// filename = wedding_01
// format = jpg | webp
// option = c_fill, w_400

function generateImageUrl({
  filename,
  format,
  option = 'q_auto,c_fill',
}: {
  filename: string
  format: 'jpg' | 'webp'
  option?: string
}) {
  return `https://res.cloudinary.com/dxixhhlsc/image/upload/${option}/v1745839879/${format}/${filename}.${format}`
}

export default generateImageUrl
