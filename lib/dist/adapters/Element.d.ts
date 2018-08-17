/// <reference types="react-native" />
import * as React from 'react';
export declare class Element extends React.Component<{
    elementId: any;
    resizeMode?: any;
}, any> {
    static propTypes: {
        elementId: any;
        resizeMode: any;
    } | {
        hitSlop?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        onLayout?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        pointerEvents?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        removeClippedSubviews?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        style?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        testID?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        collapsable?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        needsOffscreenAlphaCompositing?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        renderToHardwareTextureAndroid?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        accessibilityViewIsModal?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        accessibilityActions?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        onAccessibilityAction?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        shouldRasterizeIOS?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        onStartShouldSetResponder?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        onMoveShouldSetResponder?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        onResponderEnd?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        onResponderGrant?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        onResponderReject?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        onResponderMove?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        onResponderRelease?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        onResponderStart?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        onResponderTerminationRequest?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        onResponderTerminate?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        onStartShouldSetResponderCapture?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        onMoveShouldSetResponderCapture?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        onTouchStart?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        onTouchMove?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        onTouchEnd?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        onTouchCancel?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        onTouchEndCapture?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        accessible?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        accessibilityLabel?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        accessibilityComponentType?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        accessibilityLiveRegion?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        importantForAccessibility?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        accessibilityTraits?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        onAcccessibilityTap?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        onMagicTap?: ((object: import("react-native").ViewProperties, key: string, componentName: string, ...rest: any[]) => Error | null) | undefined;
        elementId: any;
        resizeMode: any;
    };
    static defaultProps: {
        resizeMode: string;
    };
    render(): JSX.Element;
}
