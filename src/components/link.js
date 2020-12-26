import React from 'react';

const Link = ({ className, href, children }) => {

    const onClick = (event) => {

        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        window.history.pushState({}, '', href);
        
        const navEvents = new PopStateEvent('popstate');
        window.dispatchEvent(navEvents);
    }

    return (<a onClick={onClick} className={className} href={href}>{children}</a>);
}

export default Link;