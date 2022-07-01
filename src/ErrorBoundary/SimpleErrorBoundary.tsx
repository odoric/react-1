import React from 'react';
import { FancyInput } from '../FancyInput/FancyInput';

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

    // Create a ref
    inputRef = React.createRef<HTMLInputElement>(); // UseRef() for functional components

    onClick = () => {        
        this.inputRef.current?.focus(); // FancyInput will have pointed inputRef to an input. Set focus on it
        // This seems a bit weird. How do we know for sure where the reference is pointing to
    }

    render() {
        // Render either the children, or something when an error occurs
        // Pass our ref down to FancyInput
        if (this.state.hasError) {
            return (
                <div>
                    <div>Error</div>
                    <FancyInput ref={this.inputRef}></FancyInput>
                    <button onClick={this.onClick}>Goto comment field</button>
                </div>
            )
        }
        else {
            return this.props.children;
        }
    }
}