(function($) {
  $(document).ready(
    function() {
  $('#sp-form').on('submit', function(event) {
      var uName = $('#sp-username').val();
      var spotify_API_URL = 'https://api.spotify.com/v1/';
      var spotify_client_ID = '09c1185efbd44df3a3a7c566b1878f40';
      var spotify_client_secret = 'c1c16dda17f341e0a973f8c1b0fd6bea';
      var spotify_search_URL = 'https://api.spotify.com/v1/search?q='+ uName +'type=artist&limit=1';

      $.get(
        spotify_search_URL, function(data) {
          $('#primary').append(
          '<p>' + data.artists.items[0].id + '</p>'
          );
          event.preventDefault();
      });
  });
/*$.get(
  'https://api.spotify.com/v1/search?q=kanye%20west&type=artist&limit=1',
  function(data) {
    $('#primary').append(
    '<p>' + data.artists.items[0].id + '</p>'
    );
  });
*/
        });

})(jQuery);
