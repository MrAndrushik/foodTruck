import styles from "../../styles/modules/Breadcrumbs.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

import { useState, useEffect } from "react";

const Breadcrumbs = () => {
    const router = useRouter();
    const transformPaths = {
        home: "Главная",
        foodtrucks: "Фудтраки",
        stations: "Кулинарные станции",
        furniture: "Мебель",
        "master-class": "Мастер-классы",
        kiosks: "Киоски, шатры",
        events: "Мероприятия",
        "buy-foodtruck": "Купить фудтрак",
    };

    // useEffect(() => async () => {
    //     const res = await fetch("http://localhost:3000/api" + router.asPath);
    //     const data = await res.json();
    //     setLast(data[0].caption);
    // });

    const [last, setLast] = useState("");

    const asyncData = async () => {
        const res = await fetch("http://localhost:3000/api" + router.asPath);
        const data = await res.json();
        setLast(data[0].caption);
    };

    const generateBreadcrumbs = () => {
        const asPathWithoutQuery = router.asPath.split("?")[0];

        const asPathNestedRoutes = asPathWithoutQuery
            .split("/")
            .filter((v) => v.length > 0);

        const crumblist = asPathNestedRoutes.map((subpath, idx) => {
            const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
            const title =
                router.pathname.includes("[id]") &&
                idx === asPathNestedRoutes.length - 1
                    ? last
                    : transformPaths[subpath];
            return { href, title };
        });
        // if (router.pathname.includes("[id]")) {
        //     asyncData();
        // }
        return [{ href: "/", title: "Главная" }, ...crumblist];
    };

    const breadcrumbs = generateBreadcrumbs();
    return (
        <div className={styles.block}>
            <ul className={styles.list}>
                {breadcrumbs.map((crumb, index) =>
                    index < breadcrumbs.length - 1 ? (
                        <Link href={crumb.href} key={index}>
                            <li className={styles.crumbActive}>
                                {crumb.title}
                            </li>
                        </Link>
                    ) : (
                        <li key={index} className={styles.crumb}>
                            {crumb.title}
                        </li>
                    )
                )}
            </ul>
        </div>
    );
};

export default Breadcrumbs;
