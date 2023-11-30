export function InfoCard({wetter,link}) {
    return (
        <>
            <div className="card">
                {
                    wetter === "snow" ? <p>Es schneit. Empfehlung des Tages: Tee trinken! <a href={link}>Hier bestellen!</a></p> : <></>
                }
            </div>
        </>
    )

}

export default InfoCard