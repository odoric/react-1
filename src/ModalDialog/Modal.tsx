import React from 'react'
import ReactDom from 'react-dom'
import { withBackgroundColor } from '../hoc/withBackgroundcolor';

export const Modal = () => {
    return (
        <div>
            This is a message
        </div>
    );
}

export const RedModal = withBackgroundColor(Modal, 'coral');
export const PurpleModal = withBackgroundColor(Modal, 'purple');

export const ModalRenderer = () => {
    const bannerRoot = document.getElementById('banner-element') as HTMLElement;
    if (bannerRoot) {
        return (
            ReactDom.createPortal(
                <>
                    <div style={{ fontStyle: 'italic', fontSize: 'small' }}>
                        Notice that I am top-left and not in the library component
                    </div>
                    <RedModal />
                </>,
                bannerRoot
            )
        )
    }
    else {
        return <div>not found</div>
    }
}