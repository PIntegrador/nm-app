import * as React from 'react';

import './Dash.scss';
import '../../../../public/css/flex.scss'

const Dash = () => {
    return (
        <section className='dash flex-child'>
              <section className="contDash">

<section className="contActions flex-child col-flex">

    <article id="profile" className="col-flex">
        <div className="flex-child"></div>
        <h2  className="flex-child">USUARIO</h2>
    </article>

    <article id="org"  className="col-flex">
        <div className="flex-child"></div>
        <h2  className="flex-child">ORGANIZA</h2>
    </article>

    <article id="create"  className="col-flex">
        <div className="flex-child"></div>
        <h2  className="flex-child">CREA</h2>
    </article>

    <article id="add"  className="col-flex">
        <div className="flex-child"></div>
        <h2  className="flex-child">AÑADIR</h2>
    </article>

</section>

<article className="config col-flex flex-child" >
    <div className="flex-child"></div>
    <h2  className="flex-child">CONFIG</h2>
</article>


</section>
        </section>
    )
}
export default Dash;