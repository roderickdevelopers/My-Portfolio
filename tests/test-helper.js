import Application from 'roderick-developers/app';
import config from 'roderick-developers/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
