import { parseAmount } from '@/lib/util/parsers/parseAmount';
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
            type: 'ink',
            amount: 0,
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
