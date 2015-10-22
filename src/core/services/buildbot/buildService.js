define([
	'core/services/buildServiceBase',
	'core/services/request',
	'core/services/buildbot/buildbotBuild',
	'mout/object/mixIn',
	'common/joinUrl'
], function (BuildServiceBase, request, BuildBotBuild, mixIn, joinUrl) {

	'use strict';

	var BuildBotBuildService = function (settings) {
		mixIn(this, new BuildServiceBase(settings));
		this.Build = BuildBotBuild;
		this.availableBuilds = availableBuilds;
	};

	BuildBotBuildService.settings = function () {
		return {
			typeName: 'BuildBot',
			baseUrl: 'buildbot',
			icon: 'buildbot/icon.png',
			logo: 'buildbot/logo.png',
			urlHint: 'URL, e.g. http://buildbot.buildbot.net/',
			defaultConfig: {
				baseUrl: 'buildbot',
				name: '',
				projects: [],
				url: '',
				username: '',
				password: '',
				updateInterval: 60
			}
		};
	};

	var availableBuilds = function () {
		return request.json({
			url: joinUrl(this.settings.url, 'json/builders'),
			username: this.settings.username,
			password: this.settings.password,
			parser: parseAvailableBuilds
		});
	};

	function parseAvailableBuilds(apiJson) {
        var items = [];
        for (var builderName in apiJson) {
            if (apiJson.hasOwnProperty(builderName)) {
				var builder = apiJson[builderName];
                items.push({
                    id: builderName,
                    name: builderName,
                    group: builder.category,
                    isDisabled: false
                });
            }
        }
		return {
			items: items
		};
	}

	return BuildBotBuildService;
});
