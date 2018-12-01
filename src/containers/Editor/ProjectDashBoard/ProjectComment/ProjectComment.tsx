import * as React from 'react';
import './ProjectComment.scss';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

interface ProjectCommentProps {
    text: string;
    autor: string;
    name: string;
    date: string;
}

@observer export class ProjectComment extends React.Component<ProjectCommentProps> {
    constructor(props: any) {
        super(props)
    }



    render() {

        return (
            <article className="comment">
                <div className="cont">
                    <div className="contInfo">
                        <section className="top">
                            <div className="img"></div>
                            <div className="contText">
                                <h2>{this.props.name}</h2>
                                <div className="cont">
                                    <h4>{this.props.autor}</h4>
                                    <h5>{this.props.date}</h5>
                                </div>
                            </div>
                        </section>
                        <section className="text">
                            <p>{this.props.text}</p>
                        </section>
                    </div>
                </div>
                <div className="contInput">
                    <div className="img"></div>
                    <input type="text" className="inputComment" placeholder="Escribir comentario..." />
                </div>
            </article>
        )
    }
}

