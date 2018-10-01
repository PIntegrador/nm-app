import * as React from 'react';
import './HomeProjects.scss';

interface HomeProjectsProps {
}

const HomeProjects = () => {
    return (
        <section className="allCont col-flex">
        <h1 className="flex-child ">Proyectos</h1>
        <div className="flex-child  row-flex projectsCont">
        <article className="flex-child projectCont">
          <div className="projectDisplay">
          </div>
          <div className="projectInfo">
              <h3>Nombre Proyecto</h3>
          </div>
          </article>
        </div>
     
        </section>
    )
}
export default HomeProjects;