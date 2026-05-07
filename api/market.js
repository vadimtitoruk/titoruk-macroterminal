export default async function handler(req, res) {
  const symbol = req.query.symbol;

  const apiKey = process.env.FMP_API_KEY;

  try {
    const response = await fetch(
      `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`
    );

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch market data"
    });
  }
}
