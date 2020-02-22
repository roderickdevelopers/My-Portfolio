import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
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
  this.route('java');
  this.route('jquery');
});
