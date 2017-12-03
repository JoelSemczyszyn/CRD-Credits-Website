import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import FetchData from './components/FetchData';
import Counter from './components/Counter';
import Index from './components/Index';

export const routes = <Layout>
    <Route exact path='/' component={Index} />{/*
    <Route path='/counter' component={ Counter } />
    <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
    <Route path='/index' component={ Index } />*/}
</Layout>;
