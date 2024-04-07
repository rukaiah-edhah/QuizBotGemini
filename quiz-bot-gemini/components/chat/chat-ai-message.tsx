import { FC, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ChatAIMessageProps {
    content: string;
}

interface Question {
    text: string;
    options: string[];
}

interface QuizContent {
    subject: string,
    questions: Question[]
}


// const parseQuestions = (content: string): QuizContent => {
//     const content_regex = content.replace(/\*+/g, '');
//     let [subject, questionsBlock] = content_regex.split(/Question/, 2);
//     const questions = questionsBlock ? questionsBlock.split('Question').filter(question => question.trim() !== '').map((question, index) => `Question\n${question}\n`) : [];

//     return { subject: subject.trim(), questions };
// }


const parseQuestions = (content: string): QuizContent => {
    const lines = content.split('\n');
    const subject = lines[0].replace('Subject: ', '').trim();
    const questions: Question[] = [];

    let currentQuestionText = '';
    let currentOptions: string[] = [];

    lines.slice(1).forEach(line => {
        if (line.startsWith('Question')) {
            if (currentQuestionText) {
                questions.push({ text: currentQuestionText, options: currentOptions });
            }
            currentQuestionText = line.split(': ')[1];
            currentOptions = [];
        } else if (line.startsWith('*')) {
            currentOptions.push(line.replace('*', '').trim());
        }
    });

    if (currentQuestionText) {
        questions.push({ text: currentQuestionText, options: currentOptions });
    }

    return { subject, questions };
}


export const ChatAIMessage: FC<ChatAIMessageProps> = ({ content }) => {
    const { subject, questions } = parseQuestions(content);
    const [selections, setSelections] = useState<{ [questionIndex: string]: string }>({});

    // Handler for when a user selects an option for a question.
    const handleSelectionChange = (questionIndex: number, option: string) => {
        setSelections((currentSelections) => ({
            ...currentSelections,
            [questionIndex]: option,
        }));
    };

    return (
        <Card>
            <CardContent className='flex flex-col items-start space-x-4 p-4'>
                <div className='mb-4'>
                    <h2 className='text-xl font-bold'>{subject}</h2>
                </div>
                {questions.map((question, questionIndex) => (
                    <div key={questionIndex} className='mb-4'>
                        <p className='text-sm font-semibold mb-2'>{question.text}</p>
                        {question.options.map((option, optionIndex) => (
                            <label key={optionIndex} className='block'>
                                <input 
                                    type="radio" 
                                    name={`question-${questionIndex}`} 
                                    value={option} 
                                    checked={selections[questionIndex] === option}
                                    onChange={() => handleSelectionChange(questionIndex, option)}
                                    className='mr-2'
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};