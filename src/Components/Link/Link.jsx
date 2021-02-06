import {React} from 'react';

import './Link.scss';

export default function Link({link,href}) {
    return (
        <a className = 'Link' href = {href}>{link}</a>
    )
}

