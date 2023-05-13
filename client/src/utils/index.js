import { surpriseMePrompts } from '../constants';

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() *
        surpriseMePrompts.length);//choose random prompt form the given 50 prompt
    const randomPrompt = surpriseMePrompt[randomIndex];

    if (randomPrompt === prompt) return getRandomPrompt(prompt);// Logic if prompt repeats then
    // it will return  prompt

    return randomPrompt;
}