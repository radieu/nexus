nexusModule.directive('gnmenu', function($parse, $rootScope, $compile) {
  return {
      restrict: 'A',
      link: function(scope, element, attr) {

  var BaseMenu = (function(){
  var el, trigger, menu, isMenuOpen;
  var _init,
      _initEvents,
      _openIconMenu,
      _closeIconMenu,
      _openMenu,
      _closeMenu,
      _setMenuElement;
  
  _init = function() {
    trigger = el.querySelector('a.gn-icon-menu');
    menu = el.querySelector('nav.gn-menu-wrapper');
    isMenuOpen = false;
    _initEvents();
  };
  
  _initEvents = function() {
    trigger.addEventListener( 'mouseover', function(ev) { _openIconMenu(); } );
    trigger.addEventListener( 'mouseout', function(ev) { _closeIconMenu(); } );
    menu.addEventListener('mouseover', function(ev) {
      _openMenu();
      console.log("add click to close");
      document.addEventListener('click',BaseMenu.bodyClickFn);
    });
  };
  
  _openIconMenu = function() {
    angular.element(menu).addClass('gn-open-part');
  };
  
  _closeIconMenu = function() {
    angular.element(menu).removeClass('gn-open-part');
  };
  
  _openMenu  = function() {
    if( isMenuOpen ) return;
    angular.element(trigger).addClass('gn-selected');
    isMenuOpen = true;
    angular.element(menu).addClass('gn-open-all');
    _closeIconMenu();
  };
  
  _closeMenu = function() {
    if( !isMenuOpen ) return;
    angular.element(trigger).removeClass('gn-selected');
    isMenuOpen = false;
    angular.element(menu).removeClass('gn-open-all');
    _closeIconMenu();
  };

  _setMenuElement = function(e) {
    el = e;
  };
  
  return {
    gnMenu: function(element) {
      _setMenuElement(element);
      _init();
    },
    bodyClickFn: function() {
      _closeMenu();
      console.log("click to close");
      document.removeEventListener('click',BaseMenu.bodyClickFn);
    }
  };
})();

angular.element(document).ready(function() {
	
  BaseMenu.gnMenu(document.getElementById('gn-menu'));
});

        }
  
  };
 }
	);