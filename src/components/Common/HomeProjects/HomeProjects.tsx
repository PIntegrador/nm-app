import * as React from 'react';
import './HomeProjects.scss';
import { observer } from 'mobx-react';

interface HomeProjectsProps {
    projectArray : any[];
}

const HomeProjects = observer(( { projectArray}: HomeProjectsProps) => {
    return (
        <section className="allCont col-flex">
        <h1 className="flex-child ">Proyectos</h1>
        <div className="flex-child  row-flex projectsCont">
    
          {
                projectArray.map((elem:any) => {
                    return  <article className="flex-child projectCont">
                    <div className="projectDisplay">
                    </div>
                    <div className="projectInfo">
                     <h3 key={elem.id}> {elem.name} </h3>
                    </div>
                    </article>
                })

            }
        </div>
     
        </section>
    )
})
export default HomeProjects;