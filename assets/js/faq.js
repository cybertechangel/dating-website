document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
        const answer = question.nextElementSibling;

        document.querySelectorAll('.faq-answer').forEach(ans => {
            if (ans !== answer) ans.style.display = 'none';
        });

        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });
});
