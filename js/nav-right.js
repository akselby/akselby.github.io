!function(e){"use strict";var n,c=document.body,t=document.querySelector(".toggle-push-right"),o=document.querySelector(".toggle-push-right2");t.addEventListener("click",function(){classie.add(c,"pmr-open"),n="pmr-open"}),0!=jQuery("#jr-cont").find("div.filter").length&&o.addEventListener("click",function(){classie.add(c,"pmr-open"),n="pmr-open"}),[].slice.call(document.querySelectorAll(".close-menu")).forEach(function(e,t){e.addEventListener("click",function(){classie.remove(c,n),n=""})})}(window);