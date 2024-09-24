'use client';
import { parseAmount } from '@/lib/util/parsers/parseAmount';
import { classNames } from '@/lib/util/style/classNames';
import { rightSidePadding } from '@/lib/util/style/spacing';
import Image from 'next/image';
import { Resource } from 'project-oracle-helpers';
import { useEffect, useRef, useState } from 'react';

export const ResourceDisplay = () => {
    const initialMockDate = useRef(new Date());
    const [elapsedTime, setElapsedTime] = useState<number>(0);
    useEffect(() => {
        const updateElapsedTime = () => {
            const now = new Date().getTime();
            setElapsedTime(now);
        };
        const intervalId = setInterval(updateElapsedTime, 500);
        return () => clearInterval(intervalId);
    }, [elapsedTime]);

    const mockResources: Resource[] = [
        {
            perMinute: 0.3,
            type: 'money',
            amount: 10012,
            updatedAt: initialMockDate.current,
        },
        {
            perMinute: 0.4,
            type: 'fuel',
            amount: 200,
            updatedAt: initialMockDate.current,
        },
        {
            perMinute: 0.5,
            type: 'ink',
            amount: 0,
            updatedAt: initialMockDate.current,
        },
        {
            perMinute: 0.5,
            type: 'data',
            amount: 300,
            updatedAt: initialMockDate.current,
        },
        {
            perMinute: 100,
            type: 'e-coins',
            amount: 10,
            updatedAt: initialMockDate.current,
        },
    ];

    const updatedResources = mockResources.map((resource) => {
        const now = elapsedTime;
        const resourceUpdateTime = new Date(resource.updatedAt).getTime();
        const timeDifference = now - resourceUpdateTime;

        if (timeDifference < 0.5) {
            return resource;
        }

        const minutesPassed = timeDifference / 60000;
        const newAmount = resource.amount + resource.perMinute * minutesPassed;

        return {
            ...resource,
            amount: Math.round(newAmount * 10) / 10,
        };
    });

    return (
        <div
            className={classNames(
                rightSidePadding,
                'col-span-5 items-center justify-end gap-8 grid grid-cols-5',
            )}
        >
            {updatedResources.map((resource) => (
                <div
                    key={resource.type}
                    className="cursor-default relative group flex gap-3"
                >
                    <div className="text-white text-lg font-exo border rounded-full overflow-hidden">
                        <Image
                            src={`/images/resources/${resource.type}.png`}
                            alt={resource.type}
                            width={24}
                            height={24}
                            layout="fixed"
                        />
                    </div>
                    <div className="text-white text-lg font-exo">
                        {parseAmount(resource.amount)}
                    </div>
                    <div className="bg-grayish border border-white  p-2 absolute top-0 hidden group-hover:block">
                        {resource.type.charAt(0).toUpperCase() +
                            resource.type.slice(1)}
                    </div>
                </div>
            ))}
        </div>
    );
};
