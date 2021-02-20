/*------------------------------------------------------------------
Theme Name: Shuttle
Theme URL: http://codnauts.com
Author: Codnauts
Author URI: http://themeforest.net/user/codnauts
Version: 1.0
License: Regular or Extended from ThemeForest only
Plugin Licenses: GPL or MIT
Last change: first release
Primary use: App & Mobile Website  
-------------------------------------------------------------------*/

// Adding strict mode
"use strict";

// This script prevents links from opening in Mobile Safari. https://gist.github.com/1042026
(function(a, b, c) {
	if (c in b && b[c]) {
		var d, e = a.location,
			f = /^(a|html)$/i;
		a.addEventListener("click", function(a) {
			d = a.target;
			while (!f.test(d.nodeName)) d = d.parentNode;
			"href" in d && (d.href.indexOf("http") || ~d.href.indexOf(e.host)) && (a.preventDefault(), e.href = d.href)
		}, !1);
	}
})(document, window.navigator, "standalone");

// SmoothState
var duration_CONSTANT = 250;
var options = {
    prefetch: true,
    debug: true,
    cacheLength: 0,
    blacklist: '.no-smoothState',
    onStart: {
        duration: duration_CONSTANT,
        render: function ($container) {
            $('#bottom-sheet').closeModal();
            $container.addClass('is-exiting');
            smoothState.restartCSSAnimations();
            setTimeout(function () { }, duration_CONSTANT * 2);
        }
    },
    onReady: {
        duration: 0,
        render: function ($container, $newContent) {
            $container.removeClass('is-exiting');
            $container.html($newContent);
        }
    },
    onAfter: function ($container, $newContent) {
        setTimeout(function () {
            ResizeHandler = ResizeHandler || function () { };
            ResizeHandler();
        }, 500)
        initiate_plugins(); // All onAfter calls goes inside this function
    }
};
//var smoothState = $('#main').smoothState(options).data('smoothState');

// Tabs
$('ul.tabs').tabs();

// Modal
//$('.modal-trigger').leanModal();

// Accordion
$('.collapsible').collapsible({
    accordion: true
});

// Drag
$('.drag-target').remove();

// Right Sidebar
$('#open-right').sideNav({ // Trigger id
    menuWidth: 280, // Default is 240
    edge: 'right', // Choose the horizontal origin
    closeOnClick: false // Closes side-nav on <a> clicks, useful for Angular/Meteor
});

// Left Sidebar
$('#open-left').sideNav({ // Trigger id
    menuWidth: 280, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
});

// Reinitialize masonry inside each panel after the relative tab link is clicked - 
$('.tab a').on('click', function() {
  // do async to allow menu to open
  setTimeout( function() {
     $('.grid').masonry({
    itemSelector: '.grid-item'
     }, 1);
  });
});

// Material Layout
$('.parallax').parallax();
$(function () {
    var hBanner = $('.hero-material').height();
    var cbHeight = hBanner - 86;
    var hHeight = hBanner - 86; // for Title
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= cbHeight) {
            $(".nav-material").addClass('nav-bg');
        }
        if (scroll <= cbHeight) {
            $(".nav-material").removeClass('nav-bg');
        }
        // For heading Title
        if (scroll >= hHeight) {
            $(".banner-title").hide();
            $(".nav-material .title").show();
        }
        if (scroll <= hHeight) {
            $(".banner-title").show();
            $(".nav-material .title").hide();
        }
    });
});

// Add Primary Color To Header After Scroll Down
$(function() {
    //caches a jQuery object containing the header element
    var header = $("#toolbar.transparent");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        //Ya no apaga la barra de menú al desplazarse
        // if (scroll >= 350) {
        //     header.removeClass('transparent').addClass("primary-color");
        // } else {
        //     header.removeClass("primary-color").addClass('transparent');
        // }
    });
});


function VerLogDebug(tex)
    {
        if (debug) {
            console.log(tex);   
        }        
    }
var debug=true;