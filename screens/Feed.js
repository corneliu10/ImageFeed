import React from 'react';
import { Text, ActivityIndicator, ViewPropTypes, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

import CardList from '../components/CardList';
import { fetchImages } from '../utils/api';

export default class Feed extends React.Component {
    static propTypes = {
        style: ViewPropTypes.style
    };

    static defaultProps = {
        style: null,
    }

    state = {
        loading: true,
        error: false,
        items: []
    }

    async componentDidMount() {
        try {
            const items = await fetchImages();

            this.setState({
                loading: false,
                items,
            });
        } catch (e) {
            this.setState({
                loading: false,
                error: true,
            });
        }
    }

    render() {
        const { loading, error, items } = this.state;
        const { style } = this.props;

        if (loading) {
            return <ActivityIndicator size={'large'} />;
        }

        if (error) {
            return <Text>Error...</Text>;
        }

        return (
            <SafeAreaView style={style}>
                <CardList items={items} />
            </SafeAreaView>
        );
    }
}