var nexusModule = angular.module('nexusModule', [ 'ngRoute' ]);
			nexusModule.config(function($routeProvider){
				$routeProvider
				.when('/',{
					templateUrl: 'templates/main.html',
					controller: 'MainController'
				})
				.when('/search',{
					templateUrl: 'templates/search.html',
					controller: 'SearchController'
				})
				.when('/download',{
					templateUrl: 'templates/download.html',
					controller: 'DownloadController'
				})
				.when('/settings',{
					templateUrl: 'templates/settings.html',
					controller: 'SettingsController'
				})
				.when('/help',{
					templateUrl: 'templates/help.html',
					controller: 'HelpController'
				})
				.when('/archives',{
					templateUrl: 'templates/archives.html',
					controller: 'ArchivesController'
				})
				.when('/images',{
					templateUrl: 'templates/images.html',
					controller: 'ImagesController'
				})
				.when('/videos',{
					templateUrl: 'templates/videos.html',
					controller: 'VideosController'
				})
				.otherwise({
              redirectTo: '/'
           		});
			});

			