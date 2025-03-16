import Helmet from "preact-helmet";
import Breadcrumb from "@/components/breadcrumb";
import menuList from "@/data/menu-list";
import Panel from "@/components/panel";

export default function Home() {
    let aosDelay = -50;

    return (
        <>
            <Helmet title="ArX IMG" />
            <Breadcrumb>
                <Breadcrumb.Item active>
                    <i className="bi bi-house"></i> Home
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className="g-3 row">
                {menuList.map(({ icon, title, url }, index) => {
                    aosDelay += 50;

                    return (
                        <Panel
                            delay={aosDelay}
                            icon={icon}
                            key={index}
                            title={title}
                            url={url}
                        />
                    );
                })}
            </div>
        </>
    );
}
