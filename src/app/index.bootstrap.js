'use strict';

// index.html page to dist folder
import '!!file-loader?name=[name].[ext]!../favicon.ico';

// vendor files
import "./index.vendor";

// main App module
import "./index.module";

import "../assets/styles/index.scss";

import "../assets/javascripts/bootstrap.min.js";
import "../assets/javascripts/material.min.js";
import "../assets/javascripts/material-kit.js";



angular.element(document).ready(() => {
  angular.bootstrap(document, ['ngNexchange'], {
    strictDi: true
  });
});
