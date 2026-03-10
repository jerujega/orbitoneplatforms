import nodemailer from "nodemailer";

async function test() {
    const apiKey = "xsmtpsib-e30709464f1c4fa3fbfd245677902613eaf636703ff97de00c19881f3699ec6c-wtV1vm4W3xkPq2BD";

    const transporter = nodemailer.createTransport({
        host: "smtp-relay.brevo.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "a47710001@smtp-brevo.com",
            pass: apiKey,
        },
        debug: true,
        logger: true
    });

    try {
        const info = await transporter.verify();
        console.log("Connection successful:", info);

        // try to send an email
        const res = await transporter.sendMail({
            from: `"OrbitOne Contact Form" <[EMAIL_ADDRESS]>`,
            to: "[EMAIL_ADDRESS]",
            subject: "Test email",
            text: "This is a test email"
        });
        console.log("Send result:", res);

    } catch (err) {
        console.error("Connection failed:", err);
    }
}

test();
