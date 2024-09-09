import { classNames } from '@/lib/util/style/classNames';
import { rightSidePadding } from '@/lib/util/style/spacing';
import Image from 'next/image';
import { Resource } from 'project-oracle-helpers';

export const ResourceDisplay = () => {
    const mockResources: Resource[] = [
        {
            perMinute: 0.3,
            type: 'money',
            amount: 10012,
            updatedAt: new Date(),
        },
        {
            perMinute: 0.4,
            type: 'fuel',
            amount: 200,
            updatedAt: new Date(),
        },
        {
            perMinute: 0.5,
            type: 'data',
            amount: 300,
            updatedAt: new Date(),
        },
        {
            perMinute: 0.5,
            type: 'ink',
            amount: 0,
            updatedAt: new Date(),
        },
        {
            perMinute: 0.5,
            type: 'e-coins',
            amount: 10,
            updatedAt: new Date(),
        },
    ];
    return (
        <div
            className={classNames(
                rightSidePadding,
                'col-span-5 flex items-center justify-end gap-8 ',
            )}
        >
            {mockResources.map((resource) => (
                <div key={resource.type} className="flex gap-2 ">
                    <div className="text-white text-lg font-exo border ">
                        <Image
                            src={`/images/resources/${resource.type}.png`}
                            alt={resource.type}
                            width={24}
                            height={24}
                            layout="fixed"
                        />
                    </div>
                    <div className="text-white text-lg font-exo">
                        {resource.amount}
                    </div>
                </div>
            ))}
        </div>
    );
};
