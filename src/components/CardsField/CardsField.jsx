import css from "./CardsField.module.css";

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

    const [showAnswer, setShowAnswer] = useState(false); // Placeholder for future state management

    const openPopup = (question) => {
        setSelectedQuestion(question);
        setShowAnswer(false);
    };

    const closePopup = () => {
        setSelectedQuestion(null);
        setShowAnswer(false);
    };

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <div className={css["cards-field"]}>
            <table>
                <thead>
                    <tr>
                        <th>Назва</th>
                        <th>Дія</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map((q) => (
                        <tr key={q.id}>
                            <td>{q.title}</td>
                            <td>
                                <button onClick={() => openPopup(q)}>
                                    Відкрити запитання
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedQuestion && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div
                        className="popup-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2>{selectedQuestion.title}</h2>
                        <p>
                            <strong>Запитання:</strong>{" "}
                            {selectedQuestion.question}
                        </p>
                        <button onClick={toggleAnswer}>
                            {showAnswer
                                ? "Сховати відповідь"
                                : "Показати відповідь"}
                        </button>
                        {showAnswer && (
                            <div className="answer-card">
                                <p>{selectedQuestion.answer}</p>
                            </div>
                        )}

                        <button className="close-btn" onClick={closePopup}>
                            Закрити
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CardsField;
