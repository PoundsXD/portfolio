'use strict';

var projectArray = [];
function ProjectData(name, date, sitePath) {
  this.name = name;
  this.date = date;
  this.sitePath = sitePath;
}
var aboutMe = new ProjectData('About Me', 'Code Fellows 201 Week 1', 'url');
var salmonCookie = new ProjectData('Salmon Cookies', 'Code Fellows 201 Week 2', 'url');
var busMall = new ProjectData('Bus Mall', 'Code Fellows 201 Week 3', 'url');
var homeWorkout = new ProjectData('HomeFit', 'Code Fellows 201 Project Week', 'url');

$(document).ready(function() {
  var dynamicNav = $('nav').outerHeight(true) + 15;
  $('.aboutMe').css('margin-top', dynamicNav);
});
$(window).resize(function() {
  var dynamicNav = $('nav').outerHeight(true) + 15;
  $('.aboutMe').css('margin-top', dynamicNav);
});
function populateNav() {
  $(this).addClass('extended');
  $(this).children().show();
  $(this).off('click', populateNav);
  var dynamicNav = $('nav').outerHeight(true) + 15;
  $('.aboutMe').css('margin-top', dynamicNav);
}
$('section').on('click', populateNav);
$('li').on('click', function(event) {
  event.stopPropagation();
  $(this).parent().parent().removeClass('extended');
  $(this).parent().hide();
  $('section').on('click', populateNav);
  var dynamicNav = $('nav').outerHeight(true) + 15;
  $('.aboutMe').css('margin-top', dynamicNav);
});
