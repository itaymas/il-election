var config = {
    style: 'mapbox://styles/itayma/ck7f6i15411ej1ilg83com271',
    accessToken: 'pk.eyJ1IjoiaXRheW1hIiwiYSI6ImNrMzRkcWQ2MjBvamszbm1xYTN6ZmsybjMifQ.7oWm6ulAPjzpY0ubi_fU-A',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: '<strong>Mapping the Maze<br>of Israeli Politics</strong>',
    subtitle: 'A Guided Tour of Three Elections',
    byline: "<a href='https://twitter.com/itaymash' target='_blank'>Itay Mashiach</a> | 6.3.2020",
    footer: "Photos by: IDF, Neukoln, Yehudit Gar'in-Kol, W. Robrecht, Jim Mattis, Foreign and Commonwealth Office, Zaher332, Nirit Han.<br>The map is based on data from the Israeli Central Bureau of Statistics and the Central Election Committee. An explanation about the creation of this map and more detailed sources can be found <a href='https://itayma.com/election-intro/' target='_blank'>here</a>.<br>For comments and questions contact me at <a href='https://twitter.com/itaymash' target='_blank'>@itaymash</a>.",
    chapters: [
        {
            id: 'c-1',
            description: "This week Israel voted in its third general election in less than one year. The country has a complex political landscape. (It also has a shape that doesn't fit easily into the screen.) This article will take you step by step through the Israeli political geography and the latest developments this week.",
            location: {
                center: [34.52400, 31.52881],
				zoom: 6.35,
				pitch: 0.00,
				bearing: 0.00
            },
            onChapterEnter: [
				{
					layer: 'election-23-block',
					opacity: 0
				},
				{
					layer: 'election-23-party',
					opacity: 0
				}
			],
            onChapterExit: [
				{
					layer: 'election-23-block',
					opacity: 0
				},
				{
					layer: 'election-23-party',
					opacity: 0
				}
            ]
        },
		{
            id: 'c-2',
            description: "The map used here shows the election results in the highest resolution possible. It is based on a unique dataset that hasn't been published elsewhere. (Read more about why this mapping is unique and the analysis required for it <a href='https://itayma.com/election-intro/' target='_blank'>here</a>; explore the map for yourself <a href='http://election-he.itayma.com/' target='_blank'>here</a>.)",
			location: {
                center: [35.21461, 32.67939],
				zoom: 9.07,
				pitch: 53.50,
				bearing: 0.00
            },
            onChapterEnter: [
				{
					layer: 'election-23-block',
					opacity: 0.6
				},
				{
					layer: 'election-23-party',
					opacity: 0
				}
            ],
            onChapterExit: [
				{
					layer: 'election-23-block',
					opacity: 0.6
				},
				{
					layer: 'election-23-party',
					opacity: 0
				}
            ]
        },
		{
            id: 'c-3',
			image: './images/netanyahu.jpg',
            description: "Israel's repeat elections are not so much about ideology. In fact, the main center and right-wing parties agree on most issues and have expressed their wish to cooperate in the past. However, a majority of MPs are adamant that prime minister Benjamin Netanyahu, whose trial for breach of trust, accepting bribes and fraud is due to begin on 17 March, cannot remain in his position. Netanyahu, in turn, hopes to avoid charges by remaining exactly there.",
			location: {
                center: [35.21461, 32.67939],
				zoom: 9.07,
				pitch: 53.50,
				bearing: 0.00
            },
            onChapterEnter: [
				{
					layer: 'election-23-block',
					opacity: 0.6
				},
				{
					layer: 'election-23-party',
					opacity: 0
				}
            ],
            onChapterExit: [
				{
					layer: 'election-23-block',
					opacity: 0.6
				},
				{
					layer: 'election-23-party',
					opacity: 0
				}
            ]
        },
		{
            id: 'c-4',
            description: "But this slim anti-Netanyahu majority — 62:58 MPs — includes some Jewish right wing parliamentarians who reject a governing coalition with their Arab colleagues. Hence the political deadlock.",
			location: {
                center: [35.21461, 32.67939],
				zoom: 9.07,
				pitch: 53.50,
				bearing: 0.00
            },
            onChapterEnter: [
				{
					layer: 'election-23-block',
					opacity: 0.6
				},
				{
					layer: 'election-23-party',
					opacity: 0
				}
            ],
            onChapterExit: [
				{
					layer: 'election-23-block',
					opacity: 0.6
				},
				{
					layer: 'election-23-party',
					opacity: 0
				}
            ]
        },
		{
            id: 'c-5',
            description: "In Israel, the parties who reject Netanyahu (but not necessarily his right-wing party, Likud) are often called <strong><span style='color: #d43b3b'>\"the center-left block\"</span></strong>. The parties who refuse to consider his replacement are <strong><span style='color: #655fc7'>\"the right block\"</span></strong>.",
			location: {
                center: [34.87870, 32.08965],
				zoom: 9.37,
				pitch: 0.00,
				bearing: 0.00
            },
            onChapterEnter: [
				{
					layer: 'election-23-block',
					opacity: 0.6
				},
				{
					layer: 'election-23-party',
					opacity: 0
				}
            ],
            onChapterExit: [
				{
					layer: 'election-23-block',
					opacity: 0.6
				},
				{
					layer: 'election-23-party',
					opacity: 0
				}
            ]
        },
		{
            id: 'c-55',
            description: "Let's look at these parties one by one.",
			location: {
                center: [34.87870, 32.08965],
				zoom: 9.37,
				pitch: 0.00,
				bearing: 0.00
            },
            onChapterEnter: [
				{
					layer: 'election-23-block',
					opacity: 0
				},
				{
					layer: 'election-23-party',
					opacity: 0.45
				}
            ],
            onChapterExit: [
				{
					layer: 'election-23-block',
					opacity: 0
				},
				{
					layer: 'election-23-party',
					opacity: 0.45
				}
            ]
        },
		{
            id: 'c-6',
			image: './images/gantz.jpg',
            description: "Leading the center-left is Benny Gantz, the former Chief of General Staff of the Israeli military. His battle against Netanyahu in the central, mainstream big cities around Tel Aviv like this one — Petah Tiqwa — is a fierce close-quarters combat. (Gantz has much experience in real battles, but very little in the political field.) Between the last three rounds swing voters from these cities kept swinging the lead between Netanyahu's <strong><span style='color: #6edaeb'>Likud</span></strong> and Gantz's <strong><span style='color: #874dc9'>\"Blue and White\"</span></strong> party. They are now at 36:33 seats.",
			location: {
                center: [34.88428, 32.08337],
				zoom: 12.27,
				pitch: 28.50,
				bearing: 1.00
            },
            onChapterEnter: [
				{
					layer: 'election-23-block',
					opacity: 0
				},
				{
					layer: 'election-23-party',
					opacity: 0.45
				}
            ],
            onChapterExit: [
				{
					layer: 'election-23-block',
					opacity: 0
				},
				{
					layer: 'election-23-party',
					opacity: 0.45
				}
            ]
        },
		{
            id: 'c-7',
			image: './images/tel_aviv.jpg',
            description: "Tel Aviv itself is traditionally divided between center-left voters in the center and to the north, and right voters in the south. And tradition is key, when ideology is not a question.",
			location: {
                center: [34.77334, 32.05253],
				zoom: 11.57,
				pitch: 28.50,
				bearing: 1.00
            },
            onChapterEnter: [
				{
					layer: 'election-23-block',
					opacity: 0
				},
				{
					layer: 'election-23-party',
					opacity: 0.45
				}
            ],
            onChapterExit: [
				{
					layer: 'election-23-block',
					opacity: 0
				},
				{
					layer: 'election-23-party',
					opacity: 0.45
				}
            ]
        },
		{
            id: 'c-8',
            description: "Zoom out to the center of the country, where most of Israel's population is concentrated, and you'll see that the struggle between these two parties was the defining feature of the election.",
			location: {
                center: [34.81835, 32.03197],
				zoom: 9.9,
				pitch: 0.00,
				bearing: 0.00
            },
            onChapterEnter: [
				{
					layer: 'election-23-block',
					opacity: 0
				},
				{
					layer: 'election-23-party',
					opacity: 0.45
				}
            ],
            onChapterExit: [
				{
					layer: 'election-23-block',
					opacity: 0
				},
				{
					layer: 'election-23-party',
					opacity: 0.45
				}
            ]
        },
		{
            id: 'c-9',
			image: './images/haifa.jpg',
            description: "Almost invisible in this struggle is the dying <strong><span style='color: #fa9191'>\"Avoda\"</span></strong> — the Israeli Labor, the party behind eight of Israel's thirteen prime ministers, including Shimon Peres and Yitzhak Rabin. Once a political giant, it had to join Meretz to its left shortly before the election to save itself from the 3.25% threshold. Here, in \"red Haifa,\" a historical labor stronghold, the party shared mere 10,000 votes with its partner in the forced marriage. It didn't win a majority in any one neighborhood.",
			location: {
                center: [34.98357, 32.79040],
				zoom: 11.4,
				pitch: 28.50,
				bearing: 1.00
            },
            onChapterEnter: [
				{
					layer: 'election-23-block',
					opacity: 0
				},
				{
					layer: 'election-23-party',
					opacity: 0.45
				}
            ],
            onChapterExit: [
				{
					layer: 'election-23-block',
					opacity: 0
				},
				{
					layer: 'election-23-party',
					opacity: 0.45
				}
            ]
        },
		{
            id: 'c-10',
			image: './images/odeh.jpg',
            description: "The dwindling of the Zionist left and labor parties coincided with the rise of the Arab <strong><span style='color: #bf5c5c'>\"United List\"</span></strong> party, which won 15 seats in the Knesset. Its charismatic new leader, Ayman Odeh, has managed to shake Arab voters from their political apathy and raise their turnout to new heights. In the Arab cities of the Galilee, for example, participation in the election increased steadily, and this week crossed the national average. ",
			location: {
				center: [35.21193, 32.77272],
				zoom: 9.9,
				pitch: 42.00,
				bearing: 20.80
            },
            onChapterEnter: [
				{
					layer: 'election-23-block',
					opacity: 0
				},
				{
					layer: 'election-23-party',
					opacity: 0.45
				}
            ],
            onChapterExit: [
				{
					layer: 'election-23-block',
					opacity: 0
				},
				{
					layer: 'election-23-party',
					opacity: 0.45
				}
            ]
        },
		{
            id: 'c-11',
            description: "Arab voters voted almost unanimously to the <strong><span style='color: #bf5c5c'>United List</span></strong>, both in the Galilee in the north and in the strip of Arab cities running north to south, east of the coast.",
			location: {
                center: [35.09450, 32.58319],
				zoom: 8.77,
				pitch: 42.00,
				bearing: 20.80
            },
            onChapterEnter: [
				{
					layer: 'election-23-block',
					opacity: 0
				},
				{
					layer: 'election-23-party',
					opacity: 0.45
				}
            ],
            onChapterExit: [
				{
					layer: 'election-23-block',
					opacity: 0
				},
				{
					layer: 'election-23-party',
					opacity: 0.45
				}
            ]
        },
		{
            id: 'c-12',
			image: './images/bedouins.jpg',
            description: "The <strong><span style='color: #bf5c5c'>United List</span></strong> enjoys absolute majority also among Bedouin voters in the Negev desert in the South, an area that is otherwise predominantly rightwing. Beyond that, the party's staunch opposition to the right has increased its popularity among  Jewish left voters, which doubled between September and March.",
			location: {
                center: [34.99359, 31.18609],
				zoom: 10.34,
				pitch: 42.00,
				bearing: 20.80
            },
            onChapterEnter: [
				{
					layer: 'election-23-block',
					opacity: 0
				},
				{
					layer: 'election-23-party',
					opacity: 0.45
				}
            ],
            onChapterExit: [
				{
					layer: 'election-23-block',
					opacity: 0
				},
				{
					layer: 'election-23-party',
					opacity: 0.45
				}
            ]
        },
		{
            id: 'c-13',
			image: './images/jerusalem.jpg',
            description: "Mirroring the Arab loyalty on the right end are the two ultra-orthodox parties, the Sephardic <strong><span style='color: #b35cbf'>\"Shas\"</span></strong> (9 seats) and the Ashkenazi <strong><span style='color: #bae84f'>\"Yehadut Hatora\"</span></strong> (7 seats). In the northern neighborhoods of Jerusalem, for example, voting patterns hold few surprises. Netanyahu likes to call these two parties \"our natural partners,\" even though historically the ultra-orthodox played with both sides before finally settling well inside the right in the 1990s.",
			location: {
                center: [35.22575, 31.78051],
				zoom: 11.25,
				pitch: 42.50,
				bearing: -63.20
            },
            onChapterEnter: [
				{
					layer: 'election-23-block',
					opacity: 0
				},
				{
					layer: 'election-23-party',
					opacity: 0.45
				}
            ],
            onChapterExit: [
				{
					layer: 'election-23-block',
					opacity: 0
				},
				{
					layer: 'election-23-party',
					opacity: 0.45
				}
            ]
        },
		{
            id: 'c-14',
			image: './images/liberman.jpg',
            description: "A crucial party in the current deadlock is the rightwing Russian party <strong><span style='color: #ffcb5c'>\"Yisrael Beitenu\"</span></strong> (7 seats). It rarely stands out on a neighborhoods map, except where there's a high concentration of citizens with Russian background, mostly from the 1990 massive migration wave, like here in East Ashdod. The party's leader, Avigdor Liberman, has served in several ministerial positions under Netanyahu until 2018. But not anymore. He has repeatedly announced he would never join a coalition with Netanyahu. On the other hand, he said, he would not tolerate any cooperation with the Arab United List. To these two deal-breakers he has recently added a third promise: there won't be a fourth election. How all that works together is left to be seen.",
			location: {
                center: [34.63994, 31.78983],
				zoom: 12.05,
				pitch: 50,
				bearing: -18.26
            },
            onChapterEnter: [
				{
					layer: 'election-23-block',
					opacity: 0
				},
				{
					layer: 'election-23-party',
					opacity: 0.45
				}
            ],
            onChapterExit: [
				{
					layer: 'election-23-block',
					opacity: 0
				},
				{
					layer: 'election-23-party',
					opacity: 0.45
				}
            ]
        },
		{
            id: 'c-15',
            description: "Finally, the electoral desert to the east is not a real desert, but the occupied West Bank. The little patches sprinkled around are the Jewish settlements, home to the only residents in this area who enjoy the right to vote. In many of them the strongest party is <strong><span style='color: #6ff7c8'>Yamina</span></strong> (6 seats), at the right end of the political spectrum.",
			location: {
                center: [35.10307, 32.09827],
				zoom: 9.50,
				pitch: 53.00,
				bearing: 70.54
            },
            onChapterEnter: [
				{
					layer: 'election-23-block',
					opacity: 0
				},
				{
					layer: 'election-23-party',
					opacity: 0.45
				}
            ],
            onChapterExit: [
				{
					layer: 'election-23-block',
					opacity: 0
				},
				{
					layer: 'election-23-party',
					opacity: 0.45
				}
            ]
        },
		{
            id: 'c-16',
            description: "As much as Israelis are divided about the way out of the deadlock, they are united about one thing: the wish to avoid a fourth election.",
			location: {
                center: [35.0, 32.39404],
				zoom: 7.74,
				pitch: 0.00,
				bearing: 0.00
            },
            onChapterEnter: [
				{
					layer: 'election-23-block',
					opacity: 0.6
				},
				{
					layer: 'election-23-party',
					opacity: 0
				}
            ],
            onChapterExit: [
				{
					layer: 'election-23-block',
					opacity: 0.6
				},
				{
					layer: 'election-23-party',
					opacity: 0
				}
            ]
        },
		{
            id: 'c-17',
			image: './images/closing.jpg',
			description: '<span style="font-size:12px">Municipal elections in Tel Aviv, 1927 (by Tzvi Oroschkes)</span>',
			location: {
                center: [34.52400, 31.52881],
				zoom: 6.35,
				pitch: 0.00,
				bearing: 0.00
            },
            onChapterEnter: [
				{
					layer: 'election-23-block',
					opacity: 0
				},
				{
					layer: 'election-23-party',
					opacity: 0
				}
            ],
            onChapterExit: [
				{
					layer: 'election-23-block',
					opacity: 0
				},
				{
					layer: 'election-23-party',
					opacity: 0
				}
            ]
        }
    ]
};



