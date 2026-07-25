import css from "./Footer.module.css";

function Footer() {
    return (
        <footer>
            <div className={css.container}>
                <p>React Qwiz - Веб-додаток для тестування знань</p>
                <hr />
                <p>
                    Розроблено з використанням React та сучасних веб-технологій
                </p>
                <hr />
                <p>
                    develop by{"Qwiz-dev"}
                    <a href="https://github.com/yourusername">Your Name</a>
                </p>
                <hr />
                <p>© 2024 React Qwiz. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer;
