import config from './config/environment';
import EmberRouterScroll from 'ember-router-scroll';


export default class Router extends EmberRouterScroll {
  location = config.locationType;
  rootURL = config.rootURL;
}


Router.map(function() {
  this.route('github');
  this.route('ember');
  this.route('studiocode');
  this.route('sketch');
  this.route('css');
  this.route('html');
  this.route('javascript');
  this.route('freecodecamp');
  this.route('emberconf');
});


