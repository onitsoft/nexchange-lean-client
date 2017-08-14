'use strict';

import _ from 'lodash/core';
import moment from 'moment';

import btcIcon from '_images/coins/BTC.svg';

function MainController($log) {
	'ngInject';

	$log.debug('Hello from main controller!');

	this.address = {
		show: false,
		addr: ''
	};

	this.lodash_version = _.VERSION;

	this.moment_version = moment.version;
	
	this.btcIcon = btcIcon;
}

export default MainController;