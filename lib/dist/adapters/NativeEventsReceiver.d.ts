import { EventSubscription } from '../interfaces/EventSubscription';
import { ComponentDidAppearEvent, ComponentDidDisappearEvent, NavigationButtonPressedEvent, SearchBarUpdatedEvent, SearchBarCancelPressedEvent } from '../interfaces/ComponentEvents';
import { CommandCompletedEvent, BottomTabSelectedEvent } from '../interfaces/Events';
export declare class NativeEventsReceiver {
    private emitter;
    constructor();
    registerAppLaunchedListener(callback: () => void): EventSubscription;
    registerComponentDidAppearListener(callback: (event: ComponentDidAppearEvent) => void): EventSubscription;
    registerComponentDidDisappearListener(callback: (event: ComponentDidDisappearEvent) => void): EventSubscription;
    registerNavigationButtonPressedListener(callback: (event: NavigationButtonPressedEvent) => void): EventSubscription;
    registerSearchBarUpdatedListener(callback: (event: SearchBarUpdatedEvent) => void): EventSubscription;
    registerSearchBarCancelPressedListener(callback: (event: SearchBarCancelPressedEvent) => void): EventSubscription;
    registerCommandCompletedListener(callback: (data: CommandCompletedEvent) => void): EventSubscription;
    registerBottomTabSelectedListener(callback: (data: BottomTabSelectedEvent) => void): EventSubscription;
}
