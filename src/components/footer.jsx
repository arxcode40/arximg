import socialMedia from "@/data/social-media";
import Copyright from "./partials/copyright";
import SocialMedia from "./partials/social-media";

export default function Footer() {
    return (
        <footer className="bg-body-tertiary">
            <div className="container py-3">
                <div className="align-items-center g-3 row">
                    <div className="col-lg-6">
                        <Copyright />
                    </div>
                    <div className="col-lg-6 order-first order-lg-last">
                        <div className="align-items-center g-3 justify-content-center justify-content-lg-end row">
                            {socialMedia.map(({ icon, label, url }, index) => {
                                return (
                                    <SocialMedia
                                        icon={icon}
                                        key={index}
                                        label={label}
                                        url={url}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
