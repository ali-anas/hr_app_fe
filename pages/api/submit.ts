export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {

      console.log('req: ', req);
      const formData = req.body;
      console.log('formData: ', formData);

      const skills = [{
            "skill_id": 1,
            "experience": formData['nodejs_exp'],
        },
        {
            "skill_id": 2,
            "experience": formData['reactjs_exp'],
        }
      ]
      //  name, email, expected_salary, mobile, status, skills
      const data = {
        "name": formData['name'],
        "mobile": formData['mobile'],
        "email": formData['email'],
        "status": formData['status'],
        "skills": skills
      }

      fetch('http://localhost:8080/api/candidates/create',{
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }).then(response => res.status(200).json({ message: 'Form submitted successfully', data: response }))

    } catch (error) {
      console.error('Error processing form submission:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}