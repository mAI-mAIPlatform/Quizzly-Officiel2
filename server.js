/* eslint-disable @typescript-eslint/no-require-imports */
const { Server } = require("socket.io");
const http = require("http");

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: "*", 
    methods: ["GET", "POST"]
  }
});

let queue = [];
const games = new Map();

io.on("connection", (socket) => {
  console.log("Player connected:", socket.id);

  socket.on("join_queue", (playerData) => {
    // playerData: { pseudo, avatar, level }
    const player = { id: socket.id, ...playerData, score: 0 };
    
    // Check if player already in queue
    const existingIndex = queue.findIndex(p => p.id === socket.id);
    if (existingIndex > -1) return;

    queue.push(player);
    socket.emit("queue_status", { status: "waiting" });

    // Matchmaking
    if (queue.length >= 2) {
      const p1 = queue.shift();
      const p2 = queue.shift();

      const roomId = `duel_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      const quizId = Math.floor(Math.random() * 20) + 1; // 1 to 20

      games.set(roomId, {
        players: {
          [p1.id]: p1,
          [p2.id]: p2
        },
        roomId,
        quizId
      });

      // Join sockets to the room
      const socket1 = io.sockets.sockets.get(p1.id);
      const socket2 = io.sockets.sockets.get(p2.id);
      
      if (socket1) socket1.join(roomId);
      if (socket2) socket2.join(roomId);

      // Notify P1
      if (socket1) {
        socket1.emit("match_found", {
          roomId,
          quizId,
          opponent: p2
        });
      }

      // Notify P2
      if (socket2) {
        socket2.emit("match_found", {
          roomId,
          quizId,
          opponent: p1
        });
      }
      
      console.log(`Match created: ${p1.pseudo} vs ${p2.pseudo} in room ${roomId} for quiz ${quizId}`);
    }
  });

  socket.on("score_update", ({ roomId, newScore }) => {
    const game = games.get(roomId);
    if (!game) return;

    if (game.players[socket.id]) {
        game.players[socket.id].score = newScore;
        // Broadcast to other player in room
        socket.to(roomId).emit("opponent_score", newScore);
        
        if (newScore >= 10) {
            io.to(roomId).emit("game_over", { winnerId: socket.id, winnerPseudo: game.players[socket.id].pseudo });
            games.delete(roomId);
            console.log(`Game over in room ${roomId}. Winner: ${game.players[socket.id].pseudo}`);
        }
    }
  });
  
  socket.on("leave_queue", () => {
      queue = queue.filter(p => p.id !== socket.id);
      console.log("Player left queue:", socket.id);
  });

  socket.on("disconnect", () => {
    queue = queue.filter(p => p.id !== socket.id);
    
    // Handle disconnect by conceding the game
    for (const [roomId, game] of games.entries()) {
        if (game.players[socket.id]) {
            const opponentId = Object.keys(game.players).find(id => id !== socket.id);
            if (opponentId) {
                io.to(opponentId).emit("opponent_disconnected");
            }
            games.delete(roomId);
            console.log(`Game abandoned in room ${roomId} due to disconnect.`);
        }
    }
    console.log("Player disconnected:", socket.id);
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`WebSocket server for Quizzly running on port ${PORT}`);
});
