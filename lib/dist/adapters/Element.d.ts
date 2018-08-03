import * as React from 'react';
export declare class Element extends React.Component<{
    elementId: any;
    resizeMode?: any;
}, any> {
    static propTypes: {
        elementId: any;
        resizeMode: any;
    };
    static defaultProps: {
        resizeMode: string;
    };
    render(): JSX.Element;
}
