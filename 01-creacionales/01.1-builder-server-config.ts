type LogLevel = 'debug' | 'info' | 'warn' | 'error';

class ServerConfig {
  public port: number = 8080;
  public host: string = 'localhost';
  public useSSL: boolean = false;
  public maxConnections: number = 100;
  public timeout: number = 30000;
  public enableCors: boolean = false;
  public logLevel: LogLevel = 'info';

  displayConfig(): string {
    return `
    Server Config:
    Host: ${this.host},
    Port: ${this.port},
    Use SSL: ${this.useSSL ? 'Yes' : 'No'},
    Max Connections: ${this.maxConnections},
    Timeout: ${this.timeout}ms,
    Enable CORS: ${this.enableCors ? 'Yes' : 'No'},
    Log Level: ${this.logLevel}`;
  }
}

class ServerConfigBuilder {
  private config: ServerConfig;

  constructor() {
    this.config = new ServerConfig();
  }

  public setPort(port: number): ServerConfigBuilder {
    this.config.port = port;
    return this;
  }

  public setHost(host: string): ServerConfigBuilder {
    this.config.host = host;
    return this;
  }

  public enableSSL(): ServerConfigBuilder {
    this.config.useSSL = true;
    return this;
  }

  public setMaxConnections(maxConnections: number): ServerConfigBuilder {
    this.config.maxConnections = maxConnections;
    return this;
  }

  public setTimeout(timeout: number): ServerConfigBuilder {
    this.config.timeout = timeout;
    return this;
  }

  public enableCors(): ServerConfigBuilder {
    this.config.enableCors = true;
    return this;
  }

  public setLogLevel(logLevel: LogLevel): ServerConfigBuilder {
    this.config.logLevel = logLevel;
    return this;
  }

  public build(): ServerConfig {
    return this.config;
  }
}

// Usage
const serverConfig = new ServerConfigBuilder()
  .setPort(3000)
  .setHost('example.com')
  .enableSSL()
  .setMaxConnections(200)
  .setTimeout(60000)
  .enableCors()
  .setLogLevel('debug')
  .build();


console.log(serverConfig.displayConfig());