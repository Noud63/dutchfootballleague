import axios from "axios";

const URL_1 = "https://api.football-data.org/v4/competitions/DED/standings";
const URL_2 = "https://api.football-data.org/v4/competitions/DED/matches";
const URL_3 = "https://api.football-data.org/v4/competitions/DED/teams";
const URL_4 = "https://api.football-data.org/v4/competitions/DED/scorers";

export async function GET() {
  try {
    const headers = {
      headers: {
        "X-Auth-Token": process.env.FOOTBALL_API_KEY,
      },
    };

    const [standingsRes, matchesRes, teamsRes, scorersRes] = await Promise.all([
      axios.get(URL_1, headers),
      axios.get(URL_2, headers),
      axios.get(URL_3, headers),
      axios.get(URL_4, headers),
    ]);

    const allData = {
      standings: standingsRes.data,
      matches: matchesRes.data,
      teams: teamsRes.data,
      topScorers: scorersRes.data,
    };

    // console.log("AllData:", allData);

    return new Response(JSON.stringify(allData), {
      status: 200,
    });
  } catch (error) {
    console.error("Football API Error:", error);

    return new Response(
      JSON.stringify({ error: "Failed to fetch football data" }),
      { status: 500 }
    );
  }
}
