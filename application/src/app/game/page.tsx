import { OnGameArrival } from '@/game/components/events/OnGameArrival';
import { BottomHUD } from '@/game/components/hud/BottomWindow';
import { MiddleWindow } from '@/game/components/hud/middle/MiddleWindow';
import { TopWindow } from '@/game/components/hud/topbar/TopWindow';
import '../globals.css';

export default function GamePage() {
    return (
        <>
            <OnGameArrival />
            <TopWindow />
            <MiddleWindow />
            <BottomHUD />
        </>
    );
}
