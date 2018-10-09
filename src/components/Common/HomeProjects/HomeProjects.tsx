import * as React from 'react';
import './HomeProjects.scss';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

interface HomeProjectsProps {
    id : string;
    name: string;
}

const HomeProjects = observer(( { id, name}: HomeProjectsProps) => {
    return (
        <Link to="">

        <article className="flex-child projectCont">
        <div className="projectDisplay">
        </div>
        <div className="projectInfo">
         <h3 key={id}> {name} </h3>
        </div>
        </article>
        </Link>
    )
})
export default HomeProjects;