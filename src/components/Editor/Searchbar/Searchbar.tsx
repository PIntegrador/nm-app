import * as React from 'react';

import './Searchbar.scss';
import '../../../../public/css/flex.scss'

const Searchbar = () => {
    return (
        <section className='appCont'>
               <h2>Buscar</h2>
            <input id="inputBuscar" type="text" />
            <div className="contTags row-flex">
                <article className="tag flex-child">TagName</article>
                <article className="tag flex-child">TagName</article>
                <article className="tag flex-child">TagName</article>
                <article className="tag flex-child">TagName</article>
                <article className="tag flex-child">TagName</article>
                <article className="tag flex-child">TagName</article>
                <article className="tag flex-child">TagName</article>
                <article className="tag flex-child">TagName</article>
            </div>
        </section>
    )
}
export default Searchbar;