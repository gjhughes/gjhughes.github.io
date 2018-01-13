/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function() {
  // console.log('callback - particles.js config loaded');
});

$(document).ready(function() {
  // Scroll to skills
  $('.foot-wrapper').click(function() {
    $('html,body').animate(
      {
        scrollTop: $('.skills-heading').offset().top,
      },
      1000
    );
  });

  // Scroll to projects
  $('.skills-foot-wrapper').click(function() {
    $('html,body').animate(
      {
        scrollTop: $('.projects-wrapper').offset().top,
      },
      1000
    );
  });

  // Scroll to contact
  $('.projects-foot-wrapper').click(function() {
    $('html,body').animate(
      {
        scrollTop: $('.contact-wrapper').offset().top,
      },
      1000
    );
  });

  $('.project-one').hover(
    function() {
      $('.hover-content-one').fadeIn();
    },
    function() {
      $('.hover-content-one').fadeOut();
    }
  );

  $('.project-two').hover(
    function() {
      $('.hover-content-two').fadeIn();
    },
    function() {
      $('.hover-content-two').fadeOut();
    }
  );

  $('.project-three').hover(
    function() {
      $('.hover-content-three').fadeIn();
    },
    function() {
      $('.hover-content-three').fadeOut();
    }
  );

  $('.project-four').hover(
    function() {
      $('.hover-content-four').fadeIn();
    },
    function() {
      $('.hover-content-four').fadeOut();
    }
  );
});
