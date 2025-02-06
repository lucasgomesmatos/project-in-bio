import imageCompression from 'browser-image-compression'
import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...classes: ClassValue[]): string {
  return twMerge(clsx(...classes))
}

export function sanitizeUrl(url: string): string {
  if (!url) return ''

  return url
    .replace(/\s/g, '')
    .replace(/[!@#$%^&*()_+\-=[\]{};':"\\|,ˆ.<>/?]+/, '')
    .toLocaleLowerCase()
}

export async function compressFiles(files: File[]) {
  const compressFiles = files.map(async (file) => {
    try {
      return await compressImage(file)
    } catch (error) {
      console.error(error)
      return null
    }
  })

  return (await Promise.all(compressFiles)).filter((file) => file !== null)
}

export function compressImage(file: File): Promise<File> {
  return new Promise((resolve) => {
    const options = {
      maxSizeMB: 0.2, // 200KB
      maxWidthOrHeight: 900,
      useWebWorker: true,
      fileType: 'image/png',
    }

    imageCompression(file, options).then((compressedFile) => {
      resolve(compressedFile)
    })
  })
}
