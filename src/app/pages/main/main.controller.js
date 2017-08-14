'use strict';

import _ from 'lodash/core';
import moment from 'moment';

function MainController($log) {
	'ngInject';

	this.address = {
		show: false,
		addr: ''
	};

	this.lodash_version = _.VERSION;
	this.moment_version = moment.version;
}

export default MainController;