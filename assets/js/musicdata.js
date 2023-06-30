const musicData = [
    {
        "title": "Jealous",
        "artist": "Nick Jonas",
        "album": "Nick Jonas X2",
        "year": "2015",
        "dateAdded": "2023-06-30T07:41:10.000Z"
    },
    {
        "title": "I Don't Mind (feat. Juicy J)",
        "artist": "Usher/Juicy J",
        "album": "I Don't Mind (feat. Juicy J)",
        "year": "2014",
        "dateAdded": "2023-06-30T07:41:06.000Z"
    },
    {
        "title": "Love Don't Change",
        "artist": "Jeremih",
        "album": "All About You",
        "year": "2010",
        "dateAdded": "2023-06-30T07:41:00.000Z"
    },
    {
        "title": "Nights Like This (feat. Ty Dolla $ign)",
        "artist": "Kehlani/Ty Dolla $ign",
        "album": "While We Wait",
        "year": "2019",
        "dateAdded": "2023-06-30T07:40:58.000Z"
    },
    {
        "title": "YK",
        "artist": "Cean Jr.",
        "album": "YK",
        "year": "2021",
        "dateAdded": "2023-06-30T07:36:04.000Z"
    },
    {
        "title": "Angel",
        "artist": "Shaggy/Rayvon",
        "album": "Hot Shot",
        "year": "2000",
        "dateAdded": "2023-06-17T06:50:16.000Z"
    },
    {
        "title": "It Wasn't Me",
        "artist": "Shaggy/Rik Rok",
        "album": "Hot Shot",
        "year": "2000",
        "dateAdded": "2023-06-17T06:50:12.000Z"
    },
    {
        "title": "Say Goodbye",
        "artist": "Chris Brown",
        "album": "Chris Brown (Expanded Edition)",
        "year": "2005",
        "dateAdded": "2023-06-17T06:49:44.000Z"
    },
    {
        "title": "Do You Mind",
        "artist": "Vedo/Chris Brown",
        "album": "Do You Mind",
        "year": "2023",
        "dateAdded": "2023-06-17T06:47:22.000Z"
    },
    {
        "title": "Lay It Down",
        "artist": "Lloyd",
        "album": "King Of Hearts",
        "year": "2011",
        "dateAdded": "2023-06-17T06:43:52.000Z"
    },
    {
        "title": "BURN",
        "artist": "Donnalyn",
        "album": "BURN",
        "year": "2023",
        "dateAdded": "2023-06-17T06:43:38.000Z"
    },
    {
        "title": "Symphony (feat. Zara Larsson)",
        "artist": "Clean Bandit/Zara Larsson",
        "album": "Symphony (feat. Zara Larsson)",
        "year": "2017",
        "dateAdded": "2023-06-17T06:42:58.000Z"
    },
    {
        "title": "Rather Be (feat. Jess Glynne)",
        "artist": "Clean Bandit/Jess Glynne",
        "album": "Rather Be (feat. Jess Glynne)",
        "year": "2014",
        "dateAdded": "2023-06-17T06:42:36.000Z"
    },
    {
        "title": "Somebody's Pleasure",
        "artist": "Aziz Hedra",
        "album": "Somebody's Pleasure",
        "year": "2023",
        "dateAdded": "2023-06-17T06:40:00.000Z"
    },
    {
        "title": "Freaky Friday (feat. Chris Brown)",
        "artist": "Lil Dicky/Chris Brown",
        "album": "Freaky Friday (feat. Chris Brown)",
        "year": "2018",
        "dateAdded": "2023-06-17T06:39:26.000Z"
    },
    {
        "title": "Post To Be (feat. Rileyy Lanez)",
        "artist": "Lil Tjay/Rileyy Lanez",
        "album": "True 2 Myself",
        "year": "2019",
        "dateAdded": "2023-06-17T06:39:02.000Z"
    },
    {
        "title": "Ayo",
        "artist": "Chris Brown/Tyga",
        "album": "Fan of A Fan The Album (Expanded Edition)",
        "year": "2015",
        "dateAdded": "2023-06-17T06:38:38.000Z"
    },
    {
        "title": "Post to Be (feat. Chris Brown & Jhene Aiko)",
        "artist": "Omarion/Chris Brown/Jhené Aiko",
        "album": "Sex Playlist",
        "year": "2014",
        "dateAdded": "2023-06-17T06:38:16.000Z"
    },
    {
        "title": "Lush Life",
        "artist": "Zara Larsson",
        "album": "So Good",
        "year": "2017",
        "dateAdded": "2023-06-13T10:42:33.157Z"
    },
    {
        "title": "Dilemma",
        "artist": "Nelly/Kelly Rowland",
        "album": "Nellyville",
        "year": "2002",
        "dateAdded": "2023-06-05T12:53:20.277Z"
    },
    {
        "title": "What It Is (Solo Version)",
        "artist": "Doechii",
        "album": "What It Is (Versions)",
        "year": "2023",
        "dateAdded": "2023-06-04T13:41:59.151Z"
    },
    {
        "title": "Area Codes",
        "artist": "Kali",
        "album": "Area Codes",
        "year": "2023",
        "dateAdded": "2023-06-04T12:29:39.247Z"
    },
    {
        "title": "Something New",
        "artist": "Zendaya/Chris Brown",
        "album": "Something New",
        "year": "2016",
        "dateAdded": "2023-06-04T02:19:48.000Z"
    },
    {
        "title": "Open Arms (feat. Travis Scott)",
        "artist": "SZA/Travis Scott",
        "album": "SOS",
        "year": "2022",
        "dateAdded": "2023-06-04T02:19:38.000Z"
    },
    {
        "title": "Shower",
        "artist": "Becky G",
        "album": "Shower",
        "year": "2014",
        "dateAdded": "2023-06-04T02:19:34.000Z"
    },
    {
        "title": "Gold",
        "artist": "Kiiara",
        "album": "low kii savage",
        "year": "2016",
        "dateAdded": "2023-06-04T02:19:24.000Z"
    },
    {
        "title": "Eastside (with Halsey & Khalid)",
        "artist": "benny blanco/Halsey/Khalid",
        "album": "Eastside (with Halsey & Khalid)",
        "year": "2018",
        "dateAdded": "2023-06-04T02:19:14.000Z"
    },
    {
        "title": "Under The Influence",
        "artist": "Chris Brown",
        "album": "Indigo (Extended)",
        "year": "2019",
        "dateAdded": "2023-06-04T02:19:08.000Z"
    },
    {
        "title": "You and I Collide",
        "artist": "The Time Keepers",
        "album": "You and I Collide",
        "year": "2014",
        "dateAdded": "2023-06-04T02:18:58.000Z"
    },
    {
        "title": "Count Me In",
        "artist": "Cast - Liv and Maddie",
        "album": "Liv and Maddie (Music from the TV Series)",
        "year": "2015",
        "dateAdded": "2023-06-04T02:18:44.000Z"
    },
    {
        "title": "When Scars Become Art",
        "artist": "Gatton/Brooke Young",
        "album": "...When Scars Become Art",
        "year": "2018",
        "dateAdded": "2023-06-04T02:18:36.000Z"
    },
    {
        "title": "Teenage Mona Lisa",
        "artist": "Alfie Castley",
        "album": "Teenage Mona Lisa",
        "year": "2021",
        "dateAdded": "2023-06-04T02:18:20.000Z"
    },
    {
        "title": "YOUTH",
        "artist": "Troye Sivan",
        "album": "Blue Neighbourhood (Deluxe)",
        "year": "2015",
        "dateAdded": "2023-06-04T02:18:10.000Z"
    },
    {
        "title": "The Only Exception",
        "artist": "Paramore",
        "album": "Brand New Eyes",
        "year": "2009",
        "dateAdded": "2023-06-04T02:18:00.000Z"
    },
    {
        "title": "They Just Exist",
        "artist": "Gatton/Kennedy Brown",
        "album": "They Just Exist",
        "year": "2019",
        "dateAdded": "2023-06-04T02:17:48.000Z"
    },
    {
        "title": "Secret Love Song (feat. Jason Derulo)",
        "artist": "Little Mix/Jason Derulo",
        "album": "Get Weird (Expanded Edition)",
        "year": "2015",
        "dateAdded": "2023-06-04T02:17:30.000Z"
    },
    {
        "title": "Superficial Love",
        "artist": "Ruth B.",
        "album": "The Intro",
        "year": "2015",
        "dateAdded": "2023-06-04T02:17:16.000Z"
    },
    {
        "title": "Falling",
        "artist": "Harry Styles",
        "album": "Fine Line",
        "year": "2019",
        "dateAdded": "2023-06-04T02:17:04.000Z"
    },
    {
        "title": "Can I Be Him",
        "artist": "James Arthur",
        "album": "Back from the Edge",
        "year": "2016",
        "dateAdded": "2023-06-04T02:16:54.000Z"
    },
    {
        "title": "All I Ever Need",
        "artist": "Austin Mahone",
        "album": "The Secret",
        "year": "2014",
        "dateAdded": "2023-06-04T02:16:40.000Z"
    },
    {
        "title": "Rewrite The Stars (with James Arthur & Anne-Marie)",
        "artist": "James Arthur/Anne-Marie",
        "album": "Rewrite The Stars (with James Arthur & Anne-Marie)",
        "year": "2018",
        "dateAdded": "2023-06-04T02:16:30.000Z"
    },
    {
        "title": "That Should Be Me",
        "artist": "Justin Bieber",
        "album": "My World 2.0",
        "year": "2010",
        "dateAdded": "2023-06-04T02:16:20.000Z"
    },
    {
        "title": "All I Want - From \"High School Musical: The Musical: The Series\"",
        "artist": "Olivia Rodrigo/Disney",
        "album": "All I Want (From \"High School Musical: The Musical: The Series\")",
        "year": "2019",
        "dateAdded": "2023-06-04T02:16:02.000Z"
    },
    {
        "title": "It's You",
        "artist": "Ali Gatie",
        "album": "YOU",
        "year": "2019",
        "dateAdded": "2023-06-04T02:15:54.000Z"
    },
    {
        "title": "hate u love u",
        "artist": "Olivia O'Brien",
        "album": "hate u love u",
        "year": "2016",
        "dateAdded": "2023-06-04T02:15:46.000Z"
    },
    {
        "title": "Ring",
        "artist": "Selena Gomez",
        "album": "Rare",
        "year": "2020",
        "dateAdded": "2023-06-04T02:15:22.000Z"
    },
    {
        "title": "BRB",
        "artist": "Luh Kel",
        "album": "Mixed Emotions",
        "year": "2019",
        "dateAdded": "2023-06-04T02:15:16.000Z"
    },
    {
        "title": "Y.O.U.",
        "artist": "Luh Kel",
        "album": "L.O.V.E.",
        "year": "2020",
        "dateAdded": "2023-06-04T02:15:08.000Z"
    },
    {
        "title": "Pull Up",
        "artist": "Luh Kel",
        "album": "Mixed Emotions",
        "year": "2019",
        "dateAdded": "2023-06-04T02:14:56.000Z"
    },
    {
        "title": "Boy's a Liar Pt. 2",
        "artist": "PinkPantheress/Ice Spice",
        "album": "Boy's a liar Pt. 2",
        "year": "2023",
        "dateAdded": "2023-06-04T02:14:48.000Z"
    },
    {
        "title": "Be Alright",
        "artist": "Dean Lewis",
        "album": "A Place We Knew",
        "year": "2019",
        "dateAdded": "2023-06-04T02:14:42.000Z"
    },
    {
        "title": "Kill Bill",
        "artist": "SZA",
        "album": "SOS",
        "year": "2022",
        "dateAdded": "2023-06-04T02:14:32.000Z"
    },
    {
        "title": "Once in a Lifetime",
        "artist": "Freestyle",
        "album": "Freestyle 18 Greatest Hits",
        "year": "2009",
        "dateAdded": "2023-06-04T02:14:20.000Z"
    },
    {
        "title": "Nobody Compares To You (feat. Katie Pearlman)",
        "artist": "Gryffin/Katie Pearlman",
        "album": "Gravity Pt. 1",
        "year": "2018",
        "dateAdded": "2023-06-04T02:14:06.000Z"
    },
    {
        "title": "drivers license",
        "artist": "Olivia Rodrigo",
        "album": "SOUR",
        "year": "2021",
        "dateAdded": "2023-06-04T02:13:54.000Z"
    },
    {
        "title": "Before You Go",
        "artist": "Lewis Capaldi",
        "album": "Divinely Uninspired To A Hellish Extent (Extended Edition)",
        "year": "2019",
        "dateAdded": "2023-06-04T02:13:34.000Z"
    },
    {
        "title": "traitor",
        "artist": "Olivia Rodrigo",
        "album": "SOUR",
        "year": "2021",
        "dateAdded": "2023-06-04T02:13:22.000Z"
    },
    {
        "title": "deja vu",
        "artist": "Olivia Rodrigo",
        "album": "SOUR",
        "year": "2021",
        "dateAdded": "2023-06-04T02:13:18.000Z"
    },
    {
        "title": "Dandelions",
        "artist": "Ruth B.",
        "album": "Safe Haven",
        "year": "2017",
        "dateAdded": "2023-06-04T02:13:06.000Z"
    },
    {
        "title": "10,000 Hours (with Justin Bieber)",
        "artist": "Dan + Shay/Justin Bieber",
        "album": "Good Things",
        "year": "2021",
        "dateAdded": "2023-06-04T02:12:56.000Z"
    },
    {
        "title": "Stuck with U (with Justin Bieber)",
        "artist": "Ariana Grande/Justin Bieber",
        "album": "Stuck with U",
        "year": "2020",
        "dateAdded": "2023-06-04T02:12:42.000Z"
    },
    {
        "title": "I Quit Drinking",
        "artist": "Kelsea Ballerini/LANY",
        "album": "I Quit Drinking",
        "year": "2021",
        "dateAdded": "2023-06-04T02:12:30.000Z"
    },
    {
        "title": "Malibu Nights",
        "artist": "LANY",
        "album": "Malibu Nights",
        "year": "2018",
        "dateAdded": "2023-06-04T02:12:06.000Z"
    },
    {
        "title": "Lose You To Love Me",
        "artist": "Selena Gomez",
        "album": "Rare",
        "year": "2020",
        "dateAdded": "2023-06-04T02:11:54.000Z"
    },
    {
        "title": "Dancing With Your Ghost",
        "artist": "Sasha Alex Sloan",
        "album": "Dancing With Your Ghost",
        "year": "2019",
        "dateAdded": "2023-06-04T02:11:44.000Z"
    },
    {
        "title": "Too Good At Goodbyes",
        "artist": "Sam Smith",
        "album": "The Thrill Of It All (Special Edition)",
        "year": "2017",
        "dateAdded": "2023-06-04T02:11:36.000Z"
    },
    {
        "title": "I Don’t Wanna Live Forever (Fifty Shades Darker)",
        "artist": "ZAYN/Taylor Swift",
        "album": "reputation Stadium Tour Surprise Song Playlist",
        "year": "2017",
        "dateAdded": "2023-06-04T02:11:30.000Z"
    },
    {
        "title": "Scars To Your Beautiful",
        "artist": "Alessia Cara",
        "album": "Know-It-All",
        "year": "2015",
        "dateAdded": "2023-06-04T02:11:04.000Z"
    },
    {
        "title": "Without Me",
        "artist": "Halsey",
        "album": "Manic",
        "year": "2020",
        "dateAdded": "2023-06-04T02:10:54.000Z"
    },
    {
        "title": "Ruin My Life",
        "artist": "Zara Larsson",
        "album": "Poster Girl",
        "year": "2021",
        "dateAdded": "2023-06-04T02:10:44.000Z"
    },
    {
        "title": "No One Compares To You",
        "artist": "Jack & Jack",
        "album": "A Good Friend Is Nice",
        "year": "2019",
        "dateAdded": "2023-06-04T02:10:32.000Z"
    },
    {
        "title": "8 Letters",
        "artist": "Why Don't We",
        "album": "8 Letters",
        "year": "2018",
        "dateAdded": "2023-06-04T02:10:22.000Z"
    },
    {
        "title": "Fly",
        "artist": "Nicki Minaj/Rihanna",
        "album": "Pink Friday",
        "year": "2010",
        "dateAdded": "2023-06-04T02:10:12.000Z"
    },
    {
        "title": "Take A Bow",
        "artist": "Rihanna",
        "album": "Good Girl Gone Bad: Reloaded",
        "year": "2008",
        "dateAdded": "2023-06-04T02:09:58.000Z"
    },
    {
        "title": "This City",
        "artist": "Sam Fischer",
        "album": "This City",
        "year": "2019",
        "dateAdded": "2023-06-04T02:09:46.000Z"
    },
    {
        "title": "Strawberries & Cigarettes",
        "artist": "Troye Sivan",
        "album": "Strawberries & Cigarettes",
        "year": "2018",
        "dateAdded": "2023-06-04T02:09:38.000Z"
    },
    {
        "title": "California King Bed",
        "artist": "Rihanna",
        "album": "Loud (Japan Version)",
        "year": "2010",
        "dateAdded": "2023-06-04T02:09:22.000Z"
    },
    {
        "title": "My Only One (No Hay Nadie Más)",
        "artist": "Sebastian Yatra/Isabela Merced",
        "album": "Valentines Day Songs",
        "year": "2021",
        "dateAdded": "2023-06-04T02:09:10.000Z"
    },
    {
        "title": "Remember - Acoustic",
        "artist": "Becky Hill",
        "album": "Remember (Acoustic)",
        "year": "2021",
        "dateAdded": "2023-06-04T02:09:00.000Z"
    },
    {
        "title": "On My Way",
        "artist": "Illijah",
        "album": "On My Way",
        "year": "2013",
        "dateAdded": "2023-06-04T02:08:50.000Z"
    }
]