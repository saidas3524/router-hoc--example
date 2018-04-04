import React, { Component } from 'react';
import {Link  } from 'react-router-dom'


export const Home = (props)=> <div>Home</div>

export const Route1 = (props)=> <div>Route1</div>

export const Route2 = (props)=> <div>Route2</div>

export const Route3 = ({match})=> <div>{match.params.number}</div>

export const Header = () => <div><ul><li><Link to={'/'}>home</Link> </li><li><Link to={'/route1'}>Route1</Link> </li><li><Link to={'/route2'}>Route2</Link> </li><li><Link to={'/route1/6'}>RouteWithNumber</Link> </li></ul></div>;
