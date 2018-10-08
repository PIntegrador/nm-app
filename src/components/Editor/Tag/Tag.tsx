import * as React from 'react';

import '../../../../public/css/flex.scss'
import { Link } from 'react-router-dom';

interface TagProps {
    id: string;
    name: string;
}

export const Tag = ({ name }: TagProps) => {
    return (
        <div className="tag flex-child hvr-grow">
            
            {name}
        
        </div>
    )
}
