
//const fetch = require("node-fetch");

let temp_composite = [ [ [ "dt" ], [ "temp.day" ], [ "wind_speed" ], [ "humidity" ], [ "uvi" ] ], [ 0, 1, 2, 3, 4 ], [ 0, 1, 2, 3, 4 ], [ 0, 1, 2, 3, 4 ], [ 0, 1, 2, 3, 4 ], [ 0, 1, 2, 3, 4 ], [ 0, 1, 2, 3, 4 ], [ 0, 1, 2, 3, 4 ], [ 0, 1, 2, 3, 4 ], [ 0, 1, 2, 3, 4 ], [ 0, 1, 2, 3, 4 ] ]

let data = " ";

let input_value = "";

let off_set = 0;
let number_of_stations = 0;
let cn_index = 0;
let pecking_order = 1;

//let ZIP = "11377";
//let ZIP = "Atlanta,GA,US";
let ZIP = "lat=33.7490&lon=-84.3880";
let city_name = "";
let city_name_1 = "";

let lat = "";
let lon = "";
let LAT_LON = "";

let uv_index = 0;
let rating = 0;

// lat: 33.749,
// lon: -84.388,


console.log( "ZIP = " + ZIP )

function get_info( )
   {
    off_set = 0;
    temp_composite = [ [ [ "dt" ], [ "temp.day" ], [ "wind_speed" ], [ "humidity" ], [ "uvi" ] ], [ 0, 1, 2, 3, 4 ], [ 0, 1, 2, 3, 4 ], [ 0, 1, 2, 3, 4 ], [ 0, 1, 2, 3, 4 ], [ 0, 1, 2, 3, 4 ], [ 0, 1, 2, 3, 4 ], [ 0, 1, 2, 3, 4 ], [ 0, 1, 2, 3, 4 ], [ 0, 1, 2, 3, 4 ], [ 0, 1, 2, 3, 4 ] ]

    console.log( "LAT_LON = " + LAT_LON )


// "https://api.openweathermap.org/data/2.5/weather?q=Budapest&appid=a990b9923cdf620e6113ae978d2059dd&units=metric"
//    fetch ( "https://api.openweathermap.org/data/2.5/weather?q=" + ZIP_IT + "&appid=a990b9923cdf620e6113ae978d2059dd&units=imperial" ,
//    fetch ( "https://api.openweathermap.org/data/2.5/forecast?q=" + ZIP_IT + "&appid=a990b9923cdf620e6113ae978d2059dd&units=imperial&cnt=5" ,
//    fetch ( "https://api.openweathermap.org/data/2.5/onecall?" + ZIP_IT + "&appid=a990b9923cdf620e6113ae978d2059dd&units=imperial" ,
//    fetch ( "https://api.openweathermap.org/data/2.5/onecall?" + ZIP_IT + "&exclude=current,minutely,houryl,alerts&appid=a990b9923cdf620e6113ae978d2059dd&units=imperial" ,
       //
//    fetch ( "https://api.openweathermap.org/geo/1.0/direct?q=" + ZIP_IT + "&appid=a990b9923cdf620e6113ae978d2059dd&units=imperial&limit=1" ,



    fetch ( "https://api.openweathermap.org/data/2.5/onecall?" + LAT_LON + "&exclude=minutely,hourly&appid=a990b9923cdf620e6113ae978d2059dd&units=imperial" ,
       {
        method: 'GET',
        cache: 'no-cache',
        credentials: 'omit'
       }
      )
      .then(function (response)
         {
          return response.json();
         }
        )
      .then(function ( data )
         {
          console.log( data );
          console.log( typeof data );

          console.log( "##########################################################" );

          Object.entries( data ).map( item =>
            {
             console.log( "item 2 = " + item )
            }
           )

          console.log( "##########################################################" );

          document.getElementById( "p1" ).innerHTML = temp_composite[ 0 ][ 0 ];
          document.getElementById( "p2" ).innerHTML = temp_composite[ 0 ][ 1 ];
          document.getElementById( "p3" ).innerHTML = temp_composite[ 0 ][ 2 ];
          document.getElementById( "p4" ).innerHTML = temp_composite[ 0 ][ 3 ];
          document.getElementById( "p5" ).innerHTML = temp_composite[ 0 ][ 4 ];

          for ( i = 0; i < data.daily.length - 2; i++ )
             {
              console.log( "length =" + data.daily.length )
              console.log( "Today =" + data.daily[0].temp.day )
              console.log( "##########################################################" );

              console.log( "Date conversion = " + ( dtd = new Date( data.daily[ i ].dt * 1000 ).toLocaleDateString( "en-US" ) ) );

              console.log( "i = " + i + " " + new Date( data.daily[ i ].dt * 1000 ).toLocaleDateString( "en-US" ) );
              console.log( "i = " + i + " " + data.daily[ i ].temp.day );
              console.log( "i = " + i + " " + data.daily[ i ].wind_speed );
              console.log( "i = " + i + " " + data.daily[ i ].humidity );
              console.log( "i = " + i + " " + data.daily[ i ].uvi );

              temp_composite[ i + 1 ][ 0 ] = new Date( data.daily[ i ].dt * 1000 ).toLocaleDateString( "en-US" );
              temp_composite[ i + 1 ][ 1 ] = data.daily[ i ].temp.day;
              temp_composite[ i + 1 ][ 2 ] = data.daily[ i ].wind_speed;
              temp_composite[ i + 1 ][ 3 ] = data.daily[ i ].humidity;
              temp_composite[ i + 1 ][ 4 ] = data.daily[ i ].uvi;

              console.log( "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@" );

              console.log( "From composite i = " + i + " " + temp_composite[ i + 1 ][ 0 ] );
              console.log( "From composite i = " + i + " " + temp_composite[ i + 1 ][ 1 ] );
              console.log( "From composite i = " + i + " " + temp_composite[ i + 1 ][ 2 ] );
              console.log( "From composite i = " + i + " " + temp_composite[ i + 1 ][ 3 ] );
              console.log( "From composite i = " + i + " " + temp_composite[ i + 1 ][ 4 ] );

             console.log( "cn_number = " + ( cn_number = ( i + 1 + off_set ) ) + ", i = " + i + ", off_set = " + off_set );
             console.log( "CN_INDEX = " + cn_index + ", " + ( cn_index = ( i + 1 ) ) );

             document.getElementById( "p0").innerHTML = city_name + " ( " + temp_composite[ cn_index ][ 0 ] + " ) ";
             document.getElementById( "p" + ( cn_number + 0 ) ).innerHTML = temp_composite[ cn_index ][ 0 ]
             document.getElementById( "p" + ( cn_number + 1 ) ).innerHTML = "Temp: " + temp_composite[ cn_index ][ 1 ];
             document.getElementById( "p" + ( cn_number + 2 ) ).innerHTML = "Wind: " + temp_composite[ cn_index ][ 2 ];
             document.getElementById( "p" + ( cn_number + 3 ) ).innerHTML = "Humidity: " + temp_composite[ cn_index ][ 3 ];

             localStorage.setItem( city_name, temp_composite[ cn_index ][ 0 ] );

             if ( cn_number > 5 )
               {
                document.getElementById( "p" + ( cn_number + 4 ) ).innerHTML = "UV: " + temp_composite[ cn_index ][ 4 ];
               }
              else
               {
                 console.log( "Rating = " +  ( rating = Math.trunc( Number( temp_composite[ cn_index ][ 4 ] ) ) ) )
                 switch( rating )
                    {
                     case 0:
                        uv_index = "green"
                        break;
                     case 1:
                        uv_index = "green"
                        break;
                     case 2:
                        uv_index = "green"
                        break;
                     case 3:
                        uv_index = "yellow"
                        break;
                     case 4:
                        uv_index = "yellow"
                        break;
                     case 5:
                        uv_index = "yellow"
                        break;
                     case 6:
                        uv_index = "orange"
                        break;
                     case 7:
                        uv_index = "orange"
                        break;
                     case 8:
                        uv_index = "red"
                        break;
                     case 9:
                        uv_index = "red"
                        break;
                     case 10:
                        uv_index = "red"
                        break;
                     case 11:
                        uv_index = "purple"
                        break;
                     default:
                    }

                console.log( "UVI = " + uv_index );
                document.getElementById( "p" + ( cn_number + 4 ) ).innerHTML = "<span class=" + uv_index + ">UV:" + temp_composite[ cn_index ][ 4 ] + "</span>";
               }

             off_set += 4;
             }

          //console.log( json.parse( data ) );
         }
       );
   }

function name_to_lat_lon( nv )
   {
    console.log( "NV = " + nv );
    city_name = nv;
//    fetch ( "https://api.openweathermap.org/geo/1.0/direct?q=" + "atlanta" + "&appid=a990b9923cdf620e6113ae978d2059dd&units=imperial&limit=1" ,
    fetch ( "https://api.openweathermap.org/geo/1.0/direct?q=" + nv + "&appid=a990b9923cdf620e6113ae978d2059dd&units=imperial&limit=1" ,
       {
        method: 'GET',
        cache: 'no-cache',
        credentials: 'omit'
       }
      )
      .then(function (response)
         {
          return response.json();
         }
        )
      .then(function ( data )
         {
          console.log( "LAT = " + ( lat = data[ 0 ].lat ) );
          console.log( "LON = " + ( lon = data[ 0 ].lon ) );
          LAT_LON = "lat=" + lat + "0"+"&" + "lon=" + lon + "0";
          console.log( "LAT_LON = " + LAT_LON );
          get_info( );
          go_peck( );
         }

        );
       }

function go_peck()
   {
    console.log( "Pecking Order = " + pecking_order );
    if ( pecking_order < 10 )
      {
       document.getElementById( "li_" + ( pecking_order++  ) ).innerHTML = city_name;
      }
    else
      {
       console.log( (pecking_order = 1 ) + "Pecking Order Back to = " + pecking_order );
      }
   }


const input = document.querySelector('input');
const log = document.getElementById('zipee');

input.addEventListener('input', updateValue);

//document.getElementById('zipee').value


function updateValue(e)
   {
    city_name_1 = e.target.value;
    console.log( log.textContent = e.target.value );
   }

let inputTextValue;

window.onkeyup = keyup;

function keyup(e)
   {
    inputTextValue = e.target.value;

   if ( e.keyCode == 13 )
     {
      console.log("13 = " + ( input_value = e.target.value ) );
      name_to_lat_lon ( input_value );
     }
   }

let ul = document.getElementById( 'li_0' );

ul.addEventListener( 'click', function( e )
   {
    if ( e.target.tagName === 'LI')
      {
       if ( e.target.innerHTML !== ""  )
         {
          name_to_lat_lon( e.target.innerHTML )
          localStorage.setItem( temp_composite[ cn_index ][ 0 ] , city_name_1 );
         }
      }
   }
  );

let bt = document.getElementById( 'bt' );

bt.addEventListener( 'click', function( e )
   {
    if ( e.target.tagName === 'BUTTON')
      {
       if ( city_name_1 !== ""  )
         {
          name_to_lat_lon( city_name_1 )
          localStorage.setItem( temp_composite[ cn_index ][ 0 ] , city_name_1 );
         }
      }
   }
  );

function pre_load( )
   {
    setTimeout( function() { name_to_lat_lon( "Cumming" ) } , 3000 )
    setTimeout( function() { name_to_lat_lon( "Woodside" ) } , 6000 )
    setTimeout( function() { name_to_lat_lon( "Tulsa" ) } , 9000 )
    setTimeout( function() { name_to_lat_lon( "Jackson Heights" ) } , 12000 )
    setTimeout( function() { name_to_lat_lon( "San Jose" ) } , 15000 )
    setTimeout( function() { name_to_lat_lon( "Astoria" ) } , 18000 )
    setTimeout( function() { name_to_lat_lon( "San Diego" ) } , 21000 )
    setTimeout( function() { name_to_lat_lon( "Miami" ) } , 24000 )
    setTimeout( function() { name_to_lat_lon( "Cleveland" ) } , 27000 )
    setTimeout( function() { name_to_lat_lon( "Chicago" ) } , 30000 )
   }

let bt1 = document.getElementById( 'bt1' );

bt1.addEventListener( 'click', function( e )
   {
    if ( e.target.tagName === 'BUTTON')
      {
       pre_load();
      }
   }
  );
//pre_load();
