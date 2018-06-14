"use strict";

    function randomDiap(n,m) {
            return Math.floor(Math.random()*(m-n+1))+n;
    }

function mood(colorsCount) {
        var colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];

        console.log( 'цветов: ' + colorsCount );
        var arr = [];
        for ( var i=1; i<=colorsCount; i++ ) {
            var n=randomDiap(1,7);
            
            if (arr.indexOf(n) !== -1){
                 continue;
               }
            arr.push(n);
            var colorName=colors[n];
            console.log( colorName );
        }
    }
    function mood2(colorsCount) {
        var colors=[ 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
        if (colorsCount>colors.length){
          console.log( "в mood только 7 цветов" );
          return undefined;
        }
        console.log( 'цветов: ' + colorsCount );
        var arr = [];
        for ( var i = 0; i < colorsCount; i++ ) {
            for (;;) {
               var n = randomDiap(0,6);
               if (arr.indexOf(n) === -1){
                 break;
               }
            }
            arr.push(n);
            var colorName=colors[n];
            console.log( colorName );
        }
    }
    mood(7);
mood2(7);