'use client';

import { Word } from 'project-oracle-helpers';
import { WindowNavButton } from '../buttons/WindowNavButton';

export const LeftWindow = () => {
    const mockWords: Word[] = [
        { text: 'apple', id: '1', tier: 1 },
        { text: 'banana', id: '2', tier: 3 },
        { text: 'orange', id: '3', tier: 2 },
        { text: 'grape', id: '4', tier: 1 },
        { text: 'mango', id: '5', tier: 3 },
        { text: 'strawberry', id: '6', tier: 2 },
        { text: 'blueberry', id: '7', tier: 1 },
        { text: 'pineapple', id: '8', tier: 3 },
        { text: 'watermelon', id: '9', tier: 2 },
        { text: 'cherry', id: '10', tier: 1 },
        { text: 'kiwi', id: '11', tier: 3 },
        { text: 'peach', id: '12', tier: 2 },
        { text: 'plum', id: '13', tier: 1 },
        { text: 'pear', id: '14', tier: 3 },
        { text: 'lemon', id: '15', tier: 2 },
        { text: 'lime', id: '16', tier: 1 },
        { text: 'coconut', id: '17', tier: 3 },
        { text: 'fig', id: '18', tier: 2 },
        { text: 'pomegranate', id: '19', tier: 1 },
        { text: 'apricot', id: '20', tier: 3 },
        { text: 'blackberry', id: '21', tier: 2 },
        { text: 'raspberry', id: '22', tier: 1 },
        { text: 'papaya', id: '23', tier: 3 },
        { text: 'guava', id: '24', tier: 2 },
        { text: 'dragonfruit', id: '25', tier: 1 },
    ];

    return (
        <div className="col-span-2 border-r border-t border-l p-2 flex flex-col overflow-hidden relative pb-8">
            <div className="flex gap-2 mb-4">
                <WindowNavButton text="Letters" onClick={() => {}} active />
                <WindowNavButton text="Words" onClick={() => {}} />
            </div>
            <div className="flex flex-col gap-1 overflow-y-scroll relative scrollbar-hide no-scrollbar">
                {mockWords.map((value) => {
                    return (
                        <div key={value.id} className="text-white">
                            {value.text}
                        </div>
                    );
                })}
            </div>
            <div className="from-g-blackish/90 absolute bottom-0 z-10 to-transparent w-full h-16 bg-gradient-to-t" />
        </div>
    );
};
