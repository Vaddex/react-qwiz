import css from "./MainPage.module.css";
function MainPage() {
    return (
        <div className={css["container"]}>
            <h1>Welcome to the Main Page</h1>
            <p>This is the main content of the application.</p>
        </div>
    );
}

export default MainPage;
