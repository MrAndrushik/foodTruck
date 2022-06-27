import styles from "../../styles/modules/Breadcrumbs.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

import { useState, useEffect, useCallback } from "react";

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

    useEffect(() => {
        const asyncData = async () => {
            const res = await fetch(
                "https://food-truck-nine.vercel.app/api" + router.asPath
            );
            // const res = await fetch(
            //     "http://localhost:3000/api" + router.asPath
            // );
            const data = await res.json();
            setLast(data[0].caption);
        };

        if (router.pathname.includes("[id]")) {
            asyncData();
        }
    }, [router]);

    const [last, setLast] = useState("");

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
            <ul
                itemScope
                itemType="http://schema.org/BreadcrumbList"
                className={styles.list}
            >
                {breadcrumbs.map((crumb, index) =>
                    index < breadcrumbs.length - 1 ? (
                        <li
                            key={index}
                            itemProp="itemListElement"
                            itemScope
                            itemType="http://schema.org/ListItem"
                        >
                            <Link href={crumb.href}>
                                <a
                                    itemProp="item"
                                    className={styles.crumbActive}
                                >
                                    <span
                                        itemProp="name"
                                        className={styles.span}
                                    >
                                        {crumb.title}
                                    </span>
                                </a>
                            </Link>
                            <meta
                                itemProp="position"
                                content={`${index + 1}`}
                            />
                        </li>
                    ) : (
                        <li
                            itemProp="itemListElement"
                            itemScope
                            itemType="http://schema.org/ListItem"
                            key={index}
                            className={styles.crumb}
                        >
                            <span itemProp="name" className={styles.span}>
                                {crumb.title}
                            </span>
                            <meta
                                itemProp="position"
                                content={`${index + 1}`}
                            />
                        </li>
                    )
                )}
            </ul>
        </div>
    );
};

export default Breadcrumbs;
