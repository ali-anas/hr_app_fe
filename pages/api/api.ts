export async function getAllCandidates(req, res) {
  try {
    const response = await fetch(`${process.env.apiUrl}/api/candidates`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
