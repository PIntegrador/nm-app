import * as React from 'react';

import '../../../../public/css/flex.scss'
import { Link } from 'react-router-dom';

interface FolderProps {
    id: string;
    title: string;
    text?: string;
    tags: any[];
    favorited: boolean;
    upDate: string;
    modDate: string;
    size: string;
}

export class Archive extends React.Component<FolderProps> {
    state = {
        lessText: this.props.text.slice(0, 80),

    }


    render() {

        return (
            <article className="archive">
                <h3 className="idArchive">{this.props.id}</h3>
                <h3 className="nameArchive hvr-grow">{this.props.title}</h3>
                <h3 className="sizeArchive">{this.props.size}</h3>
                <h3 className="upDateArchive">{this.props.upDate}</h3>
                <h3 className="modDateArchive">{this.props.modDate}</h3>
                <p className="desArchive">
                    {this.props.text.length > 80 ? this.state.lessText : this.props.text}
                    {this.props.text.length > 80 ?

                        <button onClick={
                            (e: any) => {
                                e.preventDefault();
                                this.setState({ lessText: this.props.text })
                            }
                        }> ...Leer más</button> :

                        console.log("it wont render")
                    }

                </p>
            </article>

        )
    }
} 