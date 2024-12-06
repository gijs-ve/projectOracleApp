const gameViews = [
    'game',
    'settings',
    'leaderboard',
    'profile',
    'operator-selection',
    'operator-creation',
    'world-selection',
    'world-default',
    'operator-stats',
    'oracle-selection',
    'room-selection',
    'vendor-selection',
] as const;

export type GameView = (typeof gameViews)[number];

export type ViewItem = {
    text: string;
    view: GameView;
};

export const mainViews: ViewItem[] = [
    {
        text: 'Operator',
        view: 'operator-stats',
    },
    {
        text: 'Rooms',
        view: 'room-selection',
    },
    {
        text: 'Oracles',
        view: 'oracle-selection',
    },
    {
        text: 'Vendors',
        view: 'vendor-selection',
    },
];
