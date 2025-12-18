import stadions from "../data/stadions.json"

const GetStadium = (ID) => {
    const stadion = stadions.filter((stadion) => stadion.id === ID)
    return stadion
}

export default GetStadium