$(document).ready(function(){
  
var $terms = [
  'search',
  'test',
  'css',
  '<h2>Lorem ipsum dolor, <span>sit amet.</span></h2> <br><p>Lorem, ipsum, dolor.</p>',
  'bear',
  'cat',
  'crabapple',
  'creep',
  'czar',
  'danger',
  'dominant',
  'doppler',
  'everclear',
  'evangelism',
  'frodo'
   ].sort(),
   $return = [];
  
function strInArray(str, strArray) {
  for (var j=0; j<strArray.length; j++) {
    if (strArray[j].match(str) && $return.length < 5) {
      var $h = strArray[j].replace(str, '<span>'+str+'</span>');
      $return.push('<li class="prediction-item"><h2>' + $h + '</span></h2></li>');
    }
  }
}
  
function nextItem(kp) {
  if ( $('.focus').length > 0 ) {
    var $next = $('.focus').next(),
        $prev = $('.focus').prev();
  }
  
  if ( kp == 38 ) { // Up
  
    if ( $('.focus').is(':first-child') ) {
      $prev = $('.prediction-item:last-child');
    }
    
    $('.prediction-item').removeClass('focus');
    $prev.addClass('focus');
    
  } else if ( kp == 40 ) { // Down
  
    if ( $('.focus').is(':last-child') ) {
      $next = $('.prediction-item:first-child');
    }
    
    $('.prediction-item').removeClass('focus');
    $next.addClass('focus');
  }
}

$(function(){  
  $('#search-bar').keydown(function(e){
    $key = e.keyCode;
    if ( $key == 38 || $key == 40 ) {
      nextItem($key);
      return;
    }
    
    setTimeout(function() {
      var $search = $('#search-bar').val();
      $return = [];
      
      strInArray($search, $terms);
      
      if ( $search == '' || ! $('input').val ) {
        $('.output').html('').slideUp();
      } else {
        $('.output').html($return).slideDown();
      }
  
      $('.prediction-item').on('click', function(){
        $text = $(this).find('span').text();
        $('.output').slideUp(function(){
          $(this).html('');
        });
        $('#search-bar').val($text);
      });
      
      $('.prediction-item:first-child').addClass('focus');
      
    }, 50);
  });
});
  
  $('#search-bar').focus(function(){
    if ( $('.prediction-item').length > 0 ) {
      $('.output').slideDown();
    }
    
    $('#searchform').submit(function(e){
      e.preventDefault();
      $text = $('.focus').find('span').text();
      $('.output').slideUp();
      $('#search-bar').val($text);
      $('input').blur();
    });
  });
  
  $('#search-bar').blur(function(){
    if ( $('.prediction-item').length > 0 ) {
      $('.output').slideUp();
    }
  });
  
});