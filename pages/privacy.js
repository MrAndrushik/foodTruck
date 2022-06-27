import Head from "next/head";

export default function Privacy() {
    return (
        <>
            <Head itemScope itemType="http://schema.org/WPHeader">
                <title itemProp="headline">Политика конфиденциальности</title>
                <meta
                    itemProp="description"
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    itemProp="keywords"
                    name="keywords"
                    content="ключевые_слова_для_страницы"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="privacy">
                <div className="container">
                    <h1 className="stn-title privacy__title">
                        Политика конфиденциальности
                    </h1>
                    <div className="privacy__text"></div>
                    <p className="privacy__text">
                        Настоящим в соответствии с Федеральным законом № 152-ФЗ
                        «О персональных данных» от 27.07.2006 года Вы
                        подтверждаете свое согласие на обработку компанией
                        pro-platforma.ru персональных данных: сбор,
                        систематизацию, накопление, хранение, уточнение
                        (обновление, изменение), использование, передачу
                        исключительно в целях продажи программного обеспечения
                        на Ваше имя, как это описано ниже, блокирование,
                        обезличивание, уничтожение.
                    </p>
                    <p className="privacy__text">
                        Компания pro-platforma.ru гарантирует конфиденциальность
                        получаемой информации. Обработка персональных данных
                        осуществляется в целях эффективного исполнения заказов,
                        договоров и иных обязательств, принятых компанией
                        pro-platforma.ru в качестве обязательных к исполнению.
                    </p>
                    <p className="privacy__text">
                        В случае необходимости предоставления Ваших персональных
                        данных правообладателю, дистрибьютору или реселлеру
                        программного обеспечения в целях регистрации
                        программного обеспечения на ваше имя, вы даёте согласие
                        на передачу ваших персональных данных. Компания
                        pro-platforma.ru гарантирует, что правообладатель,
                        дистрибьютор или реселлер программного обеспечения
                        осуществляет защиту персональных данных на условиях,
                        аналогичных изложенным в Политике конфиденциальности
                        персональных данных.
                    </p>
                    <p className="privacy__text">
                        Настоящее согласие распространяется на следующие Ваши
                        персональные данные: фамилия, имя и отчество, адрес
                        электронной почты, почтовый адрес доставки заказов,
                        контактный телефон, платёжные реквизиты.
                    </p>
                    <p className="privacy__text">
                        Срок действия согласия является неограниченным. Вы
                        можете в любой момент отозвать настоящее согласие,
                        направив письменное уведомления на адрес: 109382, г.
                        Москва, Люблинская улица, 60 к2 или на электронную почту
                        info@pro-platforma.ru копию зареннного нотариусом письма
                        с пометкой «Отзыв согласия на обработку персональных
                        данных».
                    </p>
                    <p className="privacy__text">
                        Обращаем ваше внимание, что отзыв согласия на обработку
                        персональных данных влечёт за собой удаление Вашей
                        учётной записи с Интернет-сайта
                        (https://pro-platforma.ru/), а также уничтожение
                        записей, содержащих ваши персональные данные, в системах
                        обработки персональных данных компании pro-platforma.ru,
                        что может сделать невозможным пользование
                        интернет-сервисами компании pro-platforma.ru.
                    </p>
                    <p className="privacy__text">
                        Гарантирую, что представленная мной информация является
                        полной, точной и достоверной, а также что при
                        представлении информации не нарушаются действующее
                        законодательство Российской Федерации, законные права и
                        интересы третьих лиц. Вся представленная информация
                        заполнена мною в отношении себя лично.
                    </p>
                    <p className="privacy__text">
                        Настоящее согласие действует в течение всего периода
                        хранения персональных данных, если иное не предусмотрено
                        законодательством Российской Федерации.
                    </p>
                </div>
            </section>
        </>
    );
}
