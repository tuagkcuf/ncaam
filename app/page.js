import Image from 'next/image'

export default function Page() {
    return (
        <div className="mx-4">
            <Image 
                src="https://a.espncdn.com/i/teamlogos/ncaa/500/66.png"
                alt="Iowa State Cyclones"
                width={100}
                height={100}
            />
        </div>
    )
}