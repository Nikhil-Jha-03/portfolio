import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(express.json());


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

app.post("/sendEmail", async (req, res) => {
    const { email, message } = req.body;
    if (!email || !message) {
        return res.status(400).json({ success: false, message: "All fields are required!" });
    }

    try {
        const info = await transporter.sendMail({
            from: `"${email}" <${process.env.EMAIL}>`,
            replyTo: email,
            to: process.env.EMAIL,
            subject: `New Contact Message from Portfolio`,
            text: message,
        });

        return res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ success: false, message: "Failed to send email", error: error.message });
    }
})


app.listen(5000, () => {
    console.log("running on port")
});