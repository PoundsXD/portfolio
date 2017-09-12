'use strict';

var projectArray = [];
function ProjectData(name, date, sitePath) {
  this.name = name;
  this.date = date;
  this.sitePath = sitePath;
  //this.push(projectArray);
}
var aboutMe = new ProjectData('About Me', 'Code Fellows 201 Week 1', 'url');
var salmonCookie = new ProjectData('Salmon Cookies', 'Code Fellows 201 Week 2', 'url');
var busMall = new ProjectData('Bus Mall', 'Code Fellows 201 Week 3', 'url');
var homeWorkout = new ProjectData('HomeFit', 'Code Fellows 201 Project Week', 'url');

$(document).ready(function() {
  var dynamicNav = $('nav').height();
  $('.aboutMe').css('margin-top', dynamicNav);
});
