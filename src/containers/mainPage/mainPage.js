import React, {Fragment} from 'react';
import { BASE_API_URL } from '../../globals';
import axios from 'axios';
import Preloader from "../../components/common/preloader/preloader";
import PostItem from "../../components/postItem/postItem";

class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: {},
            items: {}
        };
    }

    componentDidMount() {

        axios.get(BASE_API_URL)
            .then(response => {
                //console.log(response.data);
                this.setState({
                    isLoaded: true,
                    data: response.data,
                    items: response.data.articles
                });
            })
            .catch(error => {
                //console.log(error);
                this.setState({
                    isLoaded: true,
                    error
                });
            });

    }

    render() {
        const { error, isLoaded, data, items } = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <Preloader />;
        } else {
            return (

                <div className="row">

                    {items.map(item => (
                        <Fragment key={item.source.id}>
                            <PostItem image={item.urlToImage}
                                      title={item.title}
                                      url={item.url}
                                      author={item.author}
                                      date={item.publishedAt}/>
                        </Fragment>
                    ))}

                </div>

            );
        }
    }
}

export default MainPage;
