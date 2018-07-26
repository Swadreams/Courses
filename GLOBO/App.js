import React, { Component } from 'react';
import Home from './src/views/Home';
import Contact from './src/views/Contact';
import {StackNavigator} from 'react-navigation';
import Video from './src/views/Video';
import VideoDetail from './src/views/VideoDetail';
import Register from './src/views/Register';
import Login from './src/views/Login';
import Quiz from './src/views/Quiz';
import Finish from './src/views/QuizFinish';
import Blog from './src/views/Blog';
import BlogDetail from './src/views/BlogDetail';
import About from './src/views/Abouts';


const MyRoutes = StackNavigator({
  Home: {
    screen: Home
  },
  Contact: {
    screen: Contact
  },
  Lesson: {
    screen: Video
  },
  VideoDetail: {
    screen: VideoDetail
  },
  Register: {
    screen: Register
  },
  Login: {
    screen: Login
  },
  Quiz: {
    screen: Quiz
  },
  Finish: {
    screen: Finish
  },
  Blog: {
    screen: Blog
  },
  BlogDetail: {
    screen: BlogDetail
  },
  About: {
    screen: About
  }
})

export default class App extends Component {
  render() {
    return (
      <MyRoutes />
    );
  }
}