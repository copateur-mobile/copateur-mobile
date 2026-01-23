const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;

// Allow fetch from your HTML
app.use(cors());

// Hardcoded JSON for la_reserva (same shape as your current variable)
const laReservaData = {
  league_name: "La Reserva",
  regulation: "<p>Reglamento de ejemplo para la liga La Reserva.</p>",
  tournaments: [
    {
      tournament_name: "La Reserva Apertura",
      standings: [
        { pos: 1, team_name: "Reserva Norte", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", pts: 10, pj: 4, pg: 3, pe: 1, pp: 0, gf: 9, gc: 4, dg: 5 },
        { pos: 2, team_name: "Reserva Sur", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", pts: 8, pj: 4, pg: 2, pe: 2, pp: 0, gf: 7, gc: 5, dg: 2 },
        { pos: 3, team_name: "Reserva Oeste", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", pts: 4, pj: 4, pg: 1, pe: 1, pp: 2, gf: 5, gc: 7, dg: -2 },
        { pos: 4, team_name: "Reserva Este", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", pts: 1, pj: 4, pg: 0, pe: 1, pp: 3, gf: 3, gc: 8, dg: -5 }
      ],
      top_scorers: [
        { pos: 1, team_name: "Reserva Norte", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Matias R.", goals: 4 },
        { pos: 2, team_name: "Reserva Sur", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Javier S.", goals: 3 },
        { pos: 3, team_name: "Reserva Oeste", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Lucas O.", goals: 2 }
      ],
      sanctions: [
        { team_name: "Reserva Este", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Pablo E.", ta: 2, tr: 0, status: "Activo" },
        { team_name: "Reserva Sur", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Diego S.", ta: 1, tr: 1, status: "Suspendido" }
      ],
      best_defense: [
        { pos: 1, team_name: "Reserva Norte", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", gc: 4 },
        { pos: 2, team_name: "Reserva Sur", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", gc: 5 }
      ],
      current_fixture_date: 2,
      fixtures: [
        {
          "1": [
            {
              status: "finished",
              stadium: "Cancha Reserva 1",
              date_time: "23/02 19:00",
              team_1: { team_name: "Reserva Norte", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 2 },
              team_2: { team_name: "Reserva Este", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 1 }
            },
            {
              status: "finished",
              stadium: "Cancha Reserva 2",
              date_time: "23/02 21:00",
              team_1: { team_name: "Reserva Sur", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 1 },
              team_2: { team_name: "Reserva Oeste", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 1 }
            }
          ],
          "2": [
            {
              status: "pending",
              stadium: "Cancha Reserva 1",
              date_time: "02/03 19:00",
              team_1: { team_name: "Reserva Oeste", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "Reserva Norte", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            },
            {
              status: "pending",
              stadium: "Cancha Reserva 2",
              date_time: "02/03 21:00",
              team_1: { team_name: "Reserva Este", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "Reserva Sur", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            }
          ],
          "3": [
            {
              status: "pending",
              stadium: "Cancha Reserva 3",
              date_time: "09/03 18:30",
              team_1: { team_name: "Reserva Norte", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "Reserva Sur", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            },
            {
              status: "pending",
              stadium: "Cancha Reserva 4",
              date_time: "09/03 20:30",
              team_1: { team_name: "Reserva Oeste", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "Reserva Este", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            }
          ],
          "4": [
            {
              status: "pending",
              stadium: "Cancha Reserva 1",
              date_time: "16/03 19:00",
              team_1: { team_name: "Reserva Sur", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "Reserva Este", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            },
            {
              status: "pending",
              stadium: "Cancha Reserva 2",
              date_time: "16/03 21:00",
              team_1: { team_name: "Reserva Norte", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "Reserva Oeste", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            }
          ]
        }
      ]
    },
    {
      tournament_name: "La Reserva Clausura",
      standings: [
        { pos: 1, team_name: "Reserva Central", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", pts: 12, pj: 4, pg: 4, pe: 0, pp: 0, gf: 11, gc: 3, dg: 8 },
        { pos: 2, team_name: "Reserva Delta", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", pts: 7, pj: 4, pg: 2, pe: 1, pp: 1, gf: 8, gc: 6, dg: 2 },
        { pos: 3, team_name: "Reserva Union", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", pts: 4, pj: 4, pg: 1, pe: 1, pp: 2, gf: 5, gc: 8, dg: -3 },
        { pos: 4, team_name: "Reserva Sur B", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", pts: 0, pj: 4, pg: 0, pe: 0, pp: 4, gf: 2, gc: 9, dg: -7 }
      ],
      top_scorers: [
        { pos: 1, team_name: "Reserva Central", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Franco C.", goals: 5 },
        { pos: 2, team_name: "Reserva Delta", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Gaston D.", goals: 3 },
        { pos: 3, team_name: "Reserva Union", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Nicolas U.", goals: 2 }
      ],
      sanctions: [
        { team_name: "Reserva Delta", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Pedro D.", ta: 2, tr: 0, status: "Activo" },
        { team_name: "Reserva Sur B", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Martin S.", ta: 1, tr: 1, status: "Suspendido" }
      ],
      best_defense: [
        { pos: 1, team_name: "Reserva Central", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", gc: 3 },
        { pos: 2, team_name: "Reserva Delta", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", gc: 6 }
      ],
      current_fixture_date: 1,
      fixtures: [
        {
          "1": [
            {
              status: "finished",
              stadium: "Cancha Reserva 5",
              date_time: "05/04 18:00",
              team_1: { team_name: "Reserva Central", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 3 },
              team_2: { team_name: "Reserva Sur B", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 1 }
            },
            {
              status: "finished",
              stadium: "Cancha Reserva 6",
              date_time: "05/04 20:00",
              team_1: { team_name: "Reserva Delta", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 2 },
              team_2: { team_name: "Reserva Union", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 2 }
            }
          ],
          "2": [
            {
              status: "pending",
              stadium: "Cancha Reserva 5",
              date_time: "12/04 18:00",
              team_1: { team_name: "Reserva Union", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "Reserva Central", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            },
            {
              status: "pending",
              stadium: "Cancha Reserva 6",
              date_time: "12/04 20:00",
              team_1: { team_name: "Reserva Sur B", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "Reserva Delta", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            }
          ],
          "3": [
            {
              status: "pending",
              stadium: "Cancha Reserva 7",
              date_time: "19/04 18:00",
              team_1: { team_name: "Reserva Central", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "Reserva Delta", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            },
            {
              status: "pending",
              stadium: "Cancha Reserva 8",
              date_time: "19/04 20:00",
              team_1: { team_name: "Reserva Union", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "Reserva Sur B", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            }
          ],
          "4": [
            {
              status: "pending",
              stadium: "Cancha Reserva 5",
              date_time: "26/04 18:00",
              team_1: { team_name: "Reserva Delta", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "Reserva Central", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            },
            {
              status: "pending",
              stadium: "Cancha Reserva 6",
              date_time: "26/04 20:00",
              team_1: { team_name: "Reserva Sur B", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "Reserva Union", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            }
          ]
        }
      ]
    }
  ]
};


const tvnData = {
  league_name: "TVN",
  regulation: "<p>Reglamento de ejemplo para la liga TVN.</p>",
  tournaments: [
    {
      tournament_name: "TVN Apertura",
      standings: [
        { pos: 1, team_name: "TVN Lions", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", pts: 9, pj: 3, pg: 3, pe: 0, pp: 0, gf: 10, gc: 3, dg: 7 },
        { pos: 2, team_name: "TVN Warriors", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 7, gc: 5, dg: 2 },
        { pos: 3, team_name: "TVN United", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 4, gc: 6, dg: -2 },
        { pos: 4, team_name: "TVN Stars", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 2, gc: 9, dg: -7 }
      ],
      top_scorers: [
        { pos: 1, team_name: "TVN Lions", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Leo TVN", goals: 5 },
        { pos: 2, team_name: "TVN Warriors", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Marcos TVN", goals: 3 },
        { pos: 3, team_name: "TVN United", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Nico TVN", goals: 2 }
      ],
      sanctions: [
        { team_name: "TVN Stars", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Juan TVN", ta: 2, tr: 0, status: "Activo" },
        { team_name: "TVN Warriors", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Pablo TVN", ta: 1, tr: 1, status: "Suspendido" }
      ],
      best_defense: [
        { pos: 1, team_name: "TVN Lions", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", gc: 3 },
        { pos: 2, team_name: "TVN Warriors", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", gc: 5 }
      ],
      current_fixture_date: 1,
      fixtures: [
        {
          "1": [
            {
              status: "finished",
              stadium: "Cancha TVN 1",
              date_time: "01/03 18:30",
              team_1: { team_name: "TVN Lions", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 3 },
              team_2: { team_name: "TVN Stars", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 1 }
            },
            {
              status: "pending",
              stadium: "Cancha TVN 2",
              date_time: "08/03 20:30",
              team_1: { team_name: "TVN Warriors", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "TVN United", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            }
          ],
          "2": [
            {
              status: "finished",
              stadium: "Cancha TVN 1",
              date_time: "15/03 18:30",
              team_1: { team_name: "TVN United", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 2 },
              team_2: { team_name: "TVN Stars", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 0 }
            },
            {
              status: "finished",
              stadium: "Cancha TVN 2",
              date_time: "15/03 20:30",
              team_1: { team_name: "TVN Lions", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 1 },
              team_2: { team_name: "TVN Warriors", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 1 }
            }
          ],
          "3": [
            {
              status: "pending",
              stadium: "Cancha TVN 3",
              date_time: "22/03 19:00",
              team_1: { team_name: "TVN Stars", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "TVN Warriors", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            },
            {
              status: "pending",
              stadium: "Cancha TVN 1",
              date_time: "22/03 21:00",
              team_1: { team_name: "TVN United", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "TVN Lions", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            }
          ],
          "4": [
            {
              status: "pending",
              stadium: "Cancha TVN 2",
              date_time: "29/03 18:30",
              team_1: { team_name: "TVN Lions", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "TVN Stars", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            },
            {
              status: "pending",
              stadium: "Cancha TVN 3",
              date_time: "29/03 20:30",
              team_1: { team_name: "TVN Warriors", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "TVN United", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            }
          ]
        }
      ]
    },
    {
      tournament_name: "TVN Clausura",
      standings: [
        { pos: 1, team_name: "TVN Warriors", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", pts: 10, pj: 4, pg: 3, pe: 1, pp: 0, gf: 9, gc: 4, dg: 5 },
        { pos: 2, team_name: "TVN United", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", pts: 7, pj: 4, pg: 2, pe: 1, pp: 1, gf: 7, gc: 5, dg: 2 },
        { pos: 3, team_name: "TVN Stars", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", pts: 4, pj: 4, pg: 1, pe: 1, pp: 2, gf: 5, gc: 7, dg: -2 },
        { pos: 4, team_name: "TVN Lions", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", pts: 1, pj: 4, pg: 0, pe: 1, pp: 3, gf: 3, gc: 8, dg: -5 }
      ],
      top_scorers: [
        { pos: 1, team_name: "TVN Warriors", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Santi W.", goals: 4 },
        { pos: 2, team_name: "TVN United", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Lucho U.", goals: 3 },
        { pos: 3, team_name: "TVN Stars", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Mati S.", goals: 2 }
      ],
      sanctions: [
        { team_name: "TVN Stars", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Alan S.", ta: 2, tr: 0, status: "Activo" },
        { team_name: "TVN Lions", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Leo L.", ta: 1, tr: 1, status: "Suspendido" }
      ],
      best_defense: [
        { pos: 1, team_name: "TVN Warriors", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", gc: 4 },
        { pos: 2, team_name: "TVN United", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", gc: 5 }
      ],
      current_fixture_date: 1,
      fixtures: [
        {
          "1": [
            {
              status: "finished",
              stadium: "Cancha TVN 4",
              date_time: "05/04 17:30",
              team_1: { team_name: "TVN Warriors", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 2 },
              team_2: { team_name: "TVN Lions", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 1 }
            },
            {
              status: "finished",
              stadium: "Cancha TVN 5",
              date_time: "05/04 19:30",
              team_1: { team_name: "TVN United", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 1 },
              team_2: { team_name: "TVN Stars", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 1 }
            }
          ],
          "2": [
            {
              status: "pending",
              stadium: "Cancha TVN 4",
              date_time: "12/04 17:30",
              team_1: { team_name: "TVN Stars", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "TVN Warriors", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            },
            {
              status: "pending",
              stadium: "Cancha TVN 5",
              date_time: "12/04 19:30",
              team_1: { team_name: "TVN Lions", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "TVN United", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            }
          ],
          "3": [
            {
              status: "pending",
              stadium: "Cancha TVN 6",
              date_time: "19/04 17:30",
              team_1: { team_name: "TVN Warriors", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "TVN United", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            },
            {
              status: "pending",
              stadium: "Cancha TVN 7",
              date_time: "19/04 19:30",
              team_1: { team_name: "TVN Stars", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "TVN Lions", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            }
          ],
          "4": [
            {
              status: "pending",
              stadium: "Cancha TVN 4",
              date_time: "26/04 17:30",
              team_1: { team_name: "TVN United", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "TVN Warriors", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            },
            {
              status: "pending",
              stadium: "Cancha TVN 5",
              date_time: "26/04 19:30",
              team_1: { team_name: "TVN Lions", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "TVN Stars", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            }
          ]
        }
      ]
    }
  ]
};

const laLigaUruguayData = {
  league_name: "La Liga Uruguay",
  regulation: "<p>Reglamento de ejemplo para La Liga Uruguay.</p>",
  tournaments: [
    {
      tournament_name: "Clausura Uruguay",
      standings: [
        { pos: 1, team_name: "Montevideo FC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", pts: 7, pj: 3, pg: 2, pe: 1, pp: 0, gf: 6, gc: 2, dg: 4 },
        { pos: 2, team_name: "Rivera SC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", pts: 5, pj: 3, pg: 1, pe: 2, pp: 0, gf: 5, gc: 4, dg: 1 },
        { pos: 3, team_name: "Salto Juniors", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", pts: 2, pj: 3, pg: 0, pe: 2, pp: 1, gf: 3, gc: 5, dg: -2 },
        { pos: 4, team_name: "Paysandu FC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 2, gc: 5, dg: -3 }
      ],
      top_scorers: [
        { pos: 1, team_name: "Montevideo FC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Diego R.", goals: 4 },
        { pos: 2, team_name: "Rivera SC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Luis P.", goals: 3 },
        { pos: 3, team_name: "Salto Juniors", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Martin C.", goals: 2 }
      ],
      sanctions: [
        { team_name: "Paysandu FC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Federico L.", ta: 3, tr: 0, status: "Advertido" }
      ],
      best_defense: [
        { pos: 1, team_name: "Montevideo FC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", gc: 2 },
        { pos: 2, team_name: "Rivera SC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", gc: 4 }
      ],
      current_fixture_date: 1,
      fixtures: [
        {
          "1": [
            {
              status: "finished",
              stadium: "Parque Central",
              date_time: "28/02 20:00",
              team_1: { team_name: "Montevideo FC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 2 },
              team_2: { team_name: "Salto Juniors", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 0 }
            },
            {
              status: "finished",
              stadium: "Estadio Rivera",
              date_time: "28/02 22:00",
              team_1: { team_name: "Rivera SC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 1 },
              team_2: { team_name: "Paysandu FC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 1 }
            }
          ],
          "2": [
            {
              status: "finished",
              stadium: "Parque Central",
              date_time: "07/03 20:00",
              team_1: { team_name: "Salto Juniors", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 2 },
              team_2: { team_name: "Paysandu FC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 2 }
            },
            {
              status: "finished",
              stadium: "Estadio Rivera",
              date_time: "07/03 22:00",
              team_1: { team_name: "Montevideo FC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 1 },
              team_2: { team_name: "Rivera SC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 0 }
            }
          ],
          "3": [
            {
              status: "pending",
              stadium: "Parque Central",
              date_time: "14/03 20:00",
              team_1: { team_name: "Rivera SC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "Salto Juniors", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            },
            {
              status: "pending",
              stadium: "Estadio Paysandu",
              date_time: "14/03 22:00",
              team_1: { team_name: "Paysandu FC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "Montevideo FC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            }
          ],
          "4": [
            {
              status: "pending",
              stadium: "Estadio Rivera",
              date_time: "21/03 20:00",
              team_1: { team_name: "Rivera SC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "Paysandu FC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            },
            {
              status: "pending",
              stadium: "Parque Central",
              date_time: "21/03 22:00",
              team_1: { team_name: "Salto Juniors", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "Montevideo FC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            }
          ]
        }
      ]
    },
    {
      tournament_name: "Apertura Uruguay",
      standings: [
        { pos: 1, team_name: "Rivera SC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", pts: 10, pj: 4, pg: 3, pe: 1, pp: 0, gf: 8, gc: 3, dg: 5 },
        { pos: 2, team_name: "Montevideo FC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", pts: 8, pj: 4, pg: 2, pe: 2, pp: 0, gf: 7, gc: 4, dg: 3 },
        { pos: 3, team_name: "Paysandu FC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", pts: 3, pj: 4, pg: 1, pe: 0, pp: 3, gf: 4, gc: 8, dg: -4 },
        { pos: 4, team_name: "Salto Juniors", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", pts: 1, pj: 4, pg: 0, pe: 1, pp: 3, gf: 2, gc: 6, dg: -4 }
      ],
      top_scorers: [
        { pos: 1, team_name: "Rivera SC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Bruno R.", goals: 4 },
        { pos: 2, team_name: "Montevideo FC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Nacho M.", goals: 3 },
        { pos: 3, team_name: "Paysandu FC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Hernan P.", goals: 2 }
      ],
      sanctions: [
        { team_name: "Salto Juniors", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", player_name: "Sergio J.", ta: 2, tr: 1, status: "Suspendido" }
      ],
      best_defense: [
        { pos: 1, team_name: "Rivera SC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", gc: 3 },
        { pos: 2, team_name: "Montevideo FC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", gc: 4 }
      ],
      current_fixture_date: 1,
      fixtures: [
        {
          "1": [
            {
              status: "finished",
              stadium: "Estadio Rivera",
              date_time: "05/04 20:00",
              team_1: { team_name: "Rivera SC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 2 },
              team_2: { team_name: "Salto Juniors", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 0 }
            },
            {
              status: "finished",
              stadium: "Parque Central",
              date_time: "05/04 22:00",
              team_1: { team_name: "Montevideo FC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 1 },
              team_2: { team_name: "Paysandu FC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png", goals: 0 }
            }
          ],
          "2": [
            {
              status: "pending",
              stadium: "Parque Central",
              date_time: "12/04 20:00",
              team_1: { team_name: "Paysandu FC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "Rivera SC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            },
            {
              status: "pending",
              stadium: "Estadio Salto",
              date_time: "12/04 22:00",
              team_1: { team_name: "Salto Juniors", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "Montevideo FC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            }
          ],
          "3": [
            {
              status: "pending",
              stadium: "Estadio Rivera",
              date_time: "19/04 20:00",
              team_1: { team_name: "Rivera SC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "Montevideo FC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            },
            {
              status: "pending",
              stadium: "Parque Central",
              date_time: "19/04 22:00",
              team_1: { team_name: "Paysandu FC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "Salto Juniors", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            }
          ],
          "4": [
            {
              status: "pending",
              stadium: "Parque Central",
              date_time: "26/04 20:00",
              team_1: { team_name: "Rivera SC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "Paysandu FC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            },
            {
              status: "pending",
              stadium: "Estadio Salto",
              date_time: "26/04 22:00",
              team_1: { team_name: "Montevideo FC", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" },
              team_2: { team_name: "Salto Juniors", team_logo_url: "https://tvn.copateur.com/storage/img/equipos/24/3699.png" }
            }
          ]
        }
      ]
    }
  ]
};

const leagues = {
  la_reserva: laReservaData,
  tvn: tvnData,
  la_liga_uruguay: laLigaUruguayData
};

app.get("/leagues/:league_id", (req, res) => {
  const { league_id: leagueId } = req.params;
  const league = leagues[leagueId];

  if (!league) {
    return res.status(404).json({
      error: "League not found",
      league_id: leagueId,
      available_leagues: Object.keys(leagues)
    });
  }

  return res.json(league);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
