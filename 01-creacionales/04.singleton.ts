class DatabaseConnection {
  private static instance: DatabaseConnection;
  private connected: boolean = false;

  private constructor() {
    // Simulate a database connection
    console.log("Database connection established.");
  }

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  public connect(): void {
    if (!this.connected) {
      this.connected = true;
      console.log("Database connected.");
    } else {
      console.log("Database is already connected.");
    }
  }

  public disconnect(): void {
    if (this.connected) {
      this.connected = false;
      console.log("Database disconnected.");
    } else {
      console.log("Database is already disconnected.");
    }
  }

  public query(sql: string): void {
    console.log(`Executing query: ${sql}`);
  }
}

// Usage
const mainSingleton = () => {
  const db1 = DatabaseConnection.getInstance();
  db1.connect();
  db1.query("SELECT * FROM users");

  const db2 = DatabaseConnection.getInstance();
  db2.query("SELECT * FROM products");

  db1.disconnect();

  // Check if both instances are the same
  console.log(`Are both instances the same? ${db1 === db2}`);
}

mainSingleton();