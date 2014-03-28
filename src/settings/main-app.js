define([
	'common/core',
	'common/coreLogger',
	'angular',
	'settings/app',
	'settings/controller',
	'settings/routes',
	'settings/serviceSettingsCtrl',
	'settings/addServiceCtrl',
	'settings/directives/alert/alert',
	'settings/directives/dynamicForm/dynamicForm',
	'settings/directives/focusIf/focusIf',
	'settings/directives/projectList/projectList',
	'settings/directives/serviceNamePanel/serviceNamePanel',
	'settings/directives/sidebar/sidebar',
	'settings/directives/onOffSwitch/onOffSwitch',
	'settings/directives/thumbnails/thumbnails',
	'settings/directives/topnav/topnav',
	'settings/directives/viewSelection/viewSelection'
], function (core, logger, angular) {

	'use strict';

	logger();
	core.init();
	angular.element(document).ready(function () {
		angular.bootstrap(document, ['settings']);
	});

});
