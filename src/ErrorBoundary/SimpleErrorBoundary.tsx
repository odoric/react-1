import React from 'react';

interface IProps {
    children: JSX.Element // There doesn't seem to be a better way to provide a type for children
}

interface IState {
    hasError: boolean
}

// Error boundaries are not supported in functional components, so we need ot use a class
export class SimpleErrorBoundary extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: any) {
        // Set the state when an error occurs
        return { hasError: true };
    }

    componentDidCatch(error: any, info: any) {
        // Fire when error is caught
        console.log(`Error caught" ${error}`);
    }

    inputRef = React.createRef<HTMLInputElement>(); // UseRef() for functional components

    onClick = () => {        
        this.inputRef.current?.focus();
    }

    render() {
        // Render either the children, or something when an error occurs
        if (this.state.hasError) {
            return (
                <div>
                    <div>Error</div>
                    <input ref={this.inputRef}></input>
                    <button onClick={this.onClick}>Goto comment field</button>
                </div>
            )
        }
        else {
            return this.props.children;
        }
    }
}