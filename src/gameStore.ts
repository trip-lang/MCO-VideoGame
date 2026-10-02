import AsyncStorage from "@react-native-async-storage/async-storage";

export type Game = {
  id: string;
  title: string;
  rating: number;
  completed: boolean;
};

const STORAGE_KEY = "games";

let games: Game[] = [];

// Get games currently stored in memory
export const getGames = (): Game[] => {
  return games;
};

// Load games from AsyncStorage
export const loadGames = async (): Promise<Game[]> => {
  try {
    const savedGames = await AsyncStorage.getItem(STORAGE_KEY);

    if (savedGames !== null) {
      games = JSON.parse(savedGames) as Game[];
    } else {
      games = [];
    }
  } catch (error) {
    console.log("Error loading games:", error);
    games = [];
  }

  return games;
};

// Add a new game
export const addGame = async (
  title: string,
  rating: number
): Promise<Game> => {
  const newGame: Game = {
    id: Date.now().toString(),
    title: title.trim(),
    rating: rating,
    completed: false,
  };

  games = [...games, newGame];

  await AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(games)
  );

  return newGame;
};

// Delete a game
export const deleteGame = async (
  id: string
): Promise<Game[]> => {
  games = games.filter((game) => game.id !== id);

  await AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(games)
  );

  return games;
};

// Toggle completion
export const toggleGame = async (
  id: string
): Promise<Game[]> => {
  games = games.map((game) =>
    game.id === id
      ? {
          ...game,
          completed: !game.completed,
        }
      : game
  );

  await AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(games)
  );

  return games;
};