import nodemailer from 'nodemailer';

export async function POST(req) {
	try {
		const { name, email, message } = await req.json();

		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.GMAIL_USER, // Your Gmail address
				pass: process.env.GMAIL_PASS // Your Gmail password or app password
			},
			secure: false
		});

		const mailOptions = {
			from: email,
			to: process.env.GMAIL_USER || 'will@tenr.works',
			subject: `New Contact Form Submission from ${name}`,
			text: `
        Name: ${name}
        Email: ${email}
        
        Message: ${message}
      `
		};

		await transporter.sendMail(mailOptions);

		return new Response(
			JSON.stringify({ message: 'Email sent successfully' }),
			{ status: 200 }
		);
	} catch (error) {
		console.error(error);
		return new Response(JSON.stringify({ message: 'Error sending email' }), {
			status: 500
		});
	}
}
