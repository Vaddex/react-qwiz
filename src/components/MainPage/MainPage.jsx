import css from "./MainPage.module.css";
function MainPage() {
    return (
        <div className={css["container"]}>
            <h1 className={css["topSign"]}>Welcome to the Main Page</h1>
            <p className={css["description"]}>
                [test text] Quick, free film quiz to challenge your knowledge.
                Instant results. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Ipsam consectetur modi unde optio culpa.
                Voluptate beatae delectus iusto. Id eaque et molestias ad
                veniam. Eius labore illum explicabo minus neque. [test text]
            </p>
        </div>
    );
}

export default MainPage;
