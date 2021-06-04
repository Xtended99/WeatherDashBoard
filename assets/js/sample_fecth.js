
// curl -m 10000 -k -H 'X-Api-Key: EEX0UJZ5IGFLdSdQ2lBWJoml7Vcf3uapY4wBTWgw' 'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=200&offset=400&state=NY&&fuel_type=all' 

const fetch = require("node-fetch");

//fuel_station_composite = [ [ "station_name", "nunya" ], [ "pay_type", "Yes" ] , [ "fuel_type_code", "EC" ], [ "station_phone", "111-111-1111" ], [ "city", "Atlanta" ] ]
fuel_station_composite = [ [ [ "station_name" ], [ "pay_type" ], [ "fuel_type_code" ], [ "station_phone" ], [ "city" ] ], [0, 1, 2, 3, 4,], [ 0, 1, 2, 3, 4], [ 0, 1, 2, 3, 4], [ 0, 1, 2, 3, 4,], [ 0, 1, 2, 3, 4 ]  ]

data = " ";

//fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
//  method: 'GET', //GET is the default.
//  credentials: 'same-origin', // include, *same-origin, omit
//  redirect: 'follow', // manual, *follow, error
//})
//  .then(function (response) {
//    return response.json();
//  })
//  .then(function (data) {
//    console.log(data);
//  });


// APIURL = https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=200&offset=400&state=NY&&fuel_type=all'
// APIKEY = 'X-Api-Key: EEX0UJZ5IGFLdSdQ2lBWJoml7Vcf3uapY4wBTWgw'


//fetch ( 'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=all&offset=400&state=NY&&fuel_type=all' ,
//
//

ZIP = "30041";

console.log( ZIP )

function get_info( ZIP_IT )
   {
    // fetch ( 'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=5&zip=30041&fuel_type=all' ,
    fetch ( 'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=5&zip=' + ZIP_IT + '&fuel_type=all' ,
       {
        method: 'GET', //GET is the default.
        credentials: 'same-origin', // include, *same-origin, omit
        //redirect: 'follow', // manual, *follow, error
        headers: { 'X-Api-Key': 'EEX0UJZ5IGFLdSdQ2lBWJoml7Vcf3uapY4wBTWgw', }
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
    
    //      for ( item in data )
    //         {
    //          console.log( "item 1 = " + item )
    //         }
    //
    
          console.log( "##########################################################" );
    
          Object.entries( data ).map( item =>
            {
             console.log( "item 2 = " + item )
            }
           )
    
          console.log( "##########################################################" );
    
    //      Object.entries( data ).forEach( item =>
    //        {
    //         console.log( "item 3 = " + item )
    //        }
    //       )
    //
    //      for ( item of Object.entries( data ) )
    //         {
    //          console.log( "item 4 = " + item )
    //       }
    
          console.log( "##########################################################" );
    
          for ( i = 0; i < data.fuel_stations.length; i++ )
          // for ( i = 0; i < 5; i++ )
             {
              console.log( "##########################################################" );
    
              // console.log( "item 5 = " + data.fuel_stations[ i ].access_code );
              // console.log( "item 5 = " + data.fuel_stations[ i ].access_days_time );
              // console.log( "item 5 = " + data.fuel_stations[ i ].access_detail_code );
              // console.log( "item 5 = " + data.fuel_stations[ i ].cards_accepted );
              // console.log( "item 5 = " + data.fuel_stations[ i ].city );
              // console.log( "item 5 = " + data.fuel_stations[ i ].country );
              // console.log( "item 5 = " + data.fuel_stations[ i ].facility_type );
              // console.log( "item 5 = " + data.fuel_stations[ i ].fuel_type_code );
              // console.log( "item 5 = " + data.fuel_stations[ i ].groups_with_access_code );
              // console.log( "item 5 = " + data.fuel_stations[ i ].intersection_directions );
              // console.log( "item 5 = " + data.fuel_stations[ i ].state );
              // console.log( "item 5 = " + data.fuel_stations[ i ].station_name );
              // console.log( "item 5 = " + data.fuel_stations[ i ].station_phone );
              // console.log( "item 5 = " + data.fuel_stations[ i ].street_address );
              // console.log( "item 5 = " + data.fuel_stations[ i ].zip );
    
              console.log( "********************************************************" );
    
              console.log( "i = " + i + " " + data.fuel_stations[ i ].station_name );
              console.log( "i = " + i + " " + data.fuel_stations[ i ].access_detail_code );
              console.log( "i = " + i + " " + data.fuel_stations[ i ].fuel_type_code );
              console.log( "i = " + i + " " + data.fuel_stations[ i ].station_phone );
              console.log( "i = " + i + " " + data.fuel_stations[ i ].city );
    
              fuel_station_composite[ i + 1 ][ 0 ] = data.fuel_stations[ i ].station_name;
              fuel_station_composite[ i + 1 ][ 1 ] = data.fuel_stations[ i ].access_detail_code;
              fuel_station_composite[ i + 1 ][ 2 ] = data.fuel_stations[ i ].fuel_type_code;
              fuel_station_composite[ i + 1 ][ 3 ] = data.fuel_stations[ i ].station_phone;
              fuel_station_composite[ i + 1 ][ 4 ] = data.fuel_stations[ i ].city;
    
              console.log( "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@" );
    
              console.log( "i = " + i + " " + fuel_station_composite[ i + 1 ][ 0 ] );
              console.log( "i = " + i + " " + fuel_station_composite[ i + 1 ][ 1 ] );
              console.log( "i = " + i + " " + fuel_station_composite[ i + 1 ][ 2 ] );
              console.log( "i = " + i + " " + fuel_station_composite[ i + 1 ][ 3 ] );
              console.log( "i = " + i + " " + fuel_station_composite[ i + 1 ][ 4 ] );
    
             }
    
          //console.log( json.parse( data ) );
         }
       );
   } 

get_info( ZIP );
