import React from 'react';

// Accept a reference and pass it to one of your children
export const FancyInput = React.forwardRef<HTMLInputElement, any>((props, ref) => (
    <input ref={ref}/>
));