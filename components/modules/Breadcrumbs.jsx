import styles from "../../styles/modules/Breadcrumbs.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

import { useState, useEffect } from "react";
import {
    ARENDA_SHATROV_ROUTE,
    ARENDA_ULICHNOY_MEBELI_ROUTE,
    EVENTS_ROUTE,
    FUDTRAKI_NA_MEROPRIYATIE_ROUTE,
    KULINARNYE_STANCII_ROUTE,
    MASTER_CLASS_ROUTE,
    PRODAZHA_FUDTRAKOV_ROUTE,
} from "../../const/routes";

const transformPaths = Object.fromEntries([
    ["home", "Главная"],
    [`${FUDTRAKI_NA_MEROPRIYATIE_ROUTE.split("/")[1]}`, "Фудтраки"],
    [`${KULINARNYE_STANCII_ROUTE.split("/")[1]}`, "Кулинарные станции"],
    [`${ARENDA_ULICHNOY_MEBELI_ROUTE.split("/")[1]}`, "Мебель"],
    [`${MASTER_CLASS_ROUTE.split("/")[1]}`, "Мастер-классы"],
    [`${ARENDA_SHATROV_ROUTE.split("/")[1]}`, "Киоски, шатры"],
    [`${EVENTS_ROUTE.split("/")[1]}`, "Мероприятия"],
    [`${PRODAZHA_FUDTRAKOV_ROUTE.split("/")[1]}`, "Купить фудтрак"],
]);

const currentApi = Object.fromEntries([
    [FUDTRAKI_NA_MEROPRIYATIE_ROUTE.split("/")[1], "/foodtrucks"],
    [EVENTS_ROUTE.split("/")[1], "/events"],
]);

const Breadcrumbs = () => {
    const router = useRouter();

    useEffect(() => {
        const asyncData = async (api, id) => {
            const res = await fetch(
                process.env.NEXT_PUBLIC_SITE_URL +
                    "/api" +
                    currentApi[api] +
                    "/" +
                    id
            );
            const data = await res.json();
            setLast(data[0].caption);
        };

        if (router.pathname.includes("[id]")) {
            asyncData(router.asPath.split("/")[1], router.asPath.split("/")[2]);
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
                            className={styles.item}
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
                            <span className={styles.line}></span>
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
