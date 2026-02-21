import css from "./Header.module.css";

function Header() {
    return (
        <header className={css["header"]}>
            <div className={css["headerLeft"]}>
                <button className={css["headerBtn"]}>Blitz Quiz</button>
                <button className={css["headerBtn"]}>Another button</button>
            </div>

            <h1 className={css["headerTitle"]}>Qwiz</h1>

            <div className={css["headerRight"]}>
                <button className={css["headerBtn"]}>Login</button>
            </div>
        </header>
    );
}
export default Header;
