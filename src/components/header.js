import React from 'react';
import Link from '../components/link';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/home" className="item">Home</Link>
            <Link href="/names" className="item">Names</Link>
            <Link href="/information" className="item">Information</Link>
            <Link href="/contact" className="item">Contact</Link>
        </div>
    )
}

export default Header;