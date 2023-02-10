import "./globals.css";

import Image from "next/image";

function Row({ image, name, score, win }) {
    return (
        <div className="flex border-b border-gray-200 justify-between px-3 py-2">
            <div className="flex">
                <Image
                    src={image}
                    alt="Iowa State Cyclones"
                    width={20}
                    height={20}
                />
                <p className="font-semibold ml-4">{name}</p>
            </div>
            <div className="flex">
                <p className="text-gray-700">{score}</p>
                {win ? (
                    <p className="font-semibold text-green-700 ml-2">W</p>
                ) : (
                    <p className="font-semibold text-red-700 ml-2">L</p>
                )}
            </div>
        </div>
    );
}

export default async function Page() {
    const res = await fetch(
        "https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/66"
    );
    const data = await res.json();
    console.log(data)

    const events = data.team.nextEvent.map((event) => {
        const competitors = event.competitions[0].competitors.map(
            (competitor) => {
                return {
                    id: competitor.team.id,
                    name: competitor.team.displayName,
                    logo: competitor.team.logos[0].href,
                    score: competitor.team.score.displayValue,
                    winner: competitor.winner,
                };
            }
        );
        const favoriteTeam = competitors.find(
            (competitor) => competitor.id === "66"
        );
        const otherTeam = competitors.find(
            (competitor) => competitor.id !== "66"
        );

        return {
            name: otherTeam.name,
            logo: otherTeam.logo,
            score: favoriteTeam.score && `${otherTeam.score.displayValue} - ${favoriteTeam.score.displayValue}`,
            winner: favoriteTeam.winner,
        };
    });

    return (
        <div>
            <Row
                image="https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/66"
                name="Iowa State Cyclones"
                score="86-24"
                win
            />;
            {events.slice(0, 4).map((event) => {
                <Row image={event.logo} name={event.name} score={event.score} win={event.winner} />
            })}
        </div>
    );
}
