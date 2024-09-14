/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn4.iconfinder.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'static-00.iconduck.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn-icons-png.flaticon.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.hackersandslackers.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.shareicon.net',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'uxwing.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'seeklogo.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'encrypted-tbn0.gstatic.com',
                port: '',
                pathname: '/**',
            },
        ],
    }
};

export default nextConfig;
