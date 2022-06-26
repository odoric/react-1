import React from 'react';

export const withBackgroundColor = (WrappedComponent: React.FunctionComponent<any>, backgroundColor: string) => {
    return (props: any) => {
        return <div style={{ backgroundColor: backgroundColor }}>
            <WrappedComponent {...props} />
        </div>
    }
}