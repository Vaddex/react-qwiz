import { useState } from "react";

const questions = [
    {
        id: 1,
        title: "Питання 1",
        content: "Текст запитання 1",
    },
    {
        id: 2,
        title: "Питання 2",
        content: "Текст запитання 2",
    },
    {
        id: 3,
        title: "Питання 3",
        content: "Текст запитання 3",
    },
];

function CardsField() {
    const [selectedQuestion, setSelectedQuestion] = useState(null); // Placeholder for future state management

    const openPopup = (question) => {
        setSelectedQuestion(question);
    };

    const closePopup = () => {
        setSelectedQuestion(null);
    };

    return (
        <div className="cards-field">
            <div className="cards-container">
                {questions.map((q) => (
                    <div
                        key={q.id}
                        className="card"
                        onClick={() => openPopup(q)}
                    >
                        <h3>{q.title}</h3>
                    </div>
                ))}
            </div>

            {selectedQuestion && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div
                        className="popup-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="close-btn" onClick={closePopup}>
                            Закрити
                        </button>
                        <h2>{selectedQuestion.title}</h2>
                        <p>{selectedQuestion.content}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CardsField;
