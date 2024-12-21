import nextConfig from '../../next.config'

export function url(filename: string): string {
    return nextConfig.basePath + filename
}