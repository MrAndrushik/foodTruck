export default function handler(req, res) {
    const { data } = req.body;
    const bucket = data.bucket;
    const connection = data.connection;
    const phone = data.phone;
    const period = data.period;

    const email = "mrandrushik@yandex.ru";
    const password = "Rghkt193945";

    const calcItemTotal = (item) => {
        if (period === 1) {
            const total =
                Number(item.startPrice1.split(" ").join("")) * item.quantity;
            return total;
        } else {
            const total =
                Number(item.startPrice1.split(" ").join("")) * item.quantity +
                Number(item.startPrice2.split(" ").join("")) *
                    item.quantity *
                    (period - 1);
            return total;
        }
    };

    if (!phone || !bucket || !connection || !period) {
        res.status(200).json({ success: false });
    }

    if (!email || !password) {
        return res.status(200).json({ success: false });
    }

    let nodemailer = require("nodemailer");

    try {
        const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.yandex.ru",
            auth: {
                user: email,
                pass: password,
            },
            secure: true,
            tls: { rejectUnauthorized: false },
        });

        const mailData = {
            from: '"ФИО" <mrandrushik@yandex.ru>',
            to: "mrandrushik@yandex.ru",
            subject: "Заявка с сайта",
            text: "Sent from website NAME",
            html: "",
        };

        mailData.html = `
            <h3 style="margin: 15px 0">
                Получена заявка с номера: <i style="color:#3ba8c0;">${phone}</i>
            </h3>
            <h3 style="margin: 15px 0">
                <i style="color:#3ba8c0;">${connection}</i>
            </h3>
            <h3 style="margin: 15px 0">
                Период аренды(в днях): <i style="color:#3ba8c0;">${period}</i>
            </h3>
            <h3 style="margin: 15px 0">
                Состав заказа:
            </h3>
            <div style="display: flex">${bucket.map(
                (item) => `
                <div>
                    <h4 style="margin: 0; margin-bottom: 5px">${
                        item.caption
                    }</h4>
                    <p style="margin: 0; margin-bottom: 5px"><i>${calcItemTotal(
                        item
                    )} ₽</i>
                    <i>х${item.quantity}</i>
                    </p>
                </div>`
            )}
            </div>
          `;

        transporter.sendMail(mailData, function (err, info) {
            if (err) {
                err;
                console.log(err);
                return res.status(200).json({ success: false });
            } else {
                info;
            }
        });
    } catch {
        ("i am here");
        return res.status(200).json({ success: false });
    }

    res.status(200).json({ success: true });
}
